'use server';
import { DataResult, PageMeta, PageMetaResponse } from '@/data/pageMeta';
import { db } from '@/lib/db';
import { Prisma, ProductVariant } from '@/prisma/generated/client';
import sql, { empty, join, raw } from 'sql-template-tag';

export const getProductById = async (id: number) => {
  const data = await db.product.findUnique({
    where: {
      id,
    },
    include: {
      category: true,
      options: {
        select: {
          option: {
            select: {
              id: true,
              name: true,
              optionValue: {
                select: {
                  id: true,
                  name: true,
                },
              },
            },
          },
        },
      },
      contents: {
        select: {
          id: true,
          name: true,
          content: true,
        },
      },
    },
  });
  return new DataResult({
    ...data,
    options: data?.options.map(value => value.option),
  });
};

export const getProducts = async ({
  page,
  take,
}: {
  page: number;
  take: number;
}) => {
  const total = await db.product.count({});
  const data = await db.product.findMany({
    where: {},
    include: {
      category: {
        select: { name: true },
      },
    },
    skip: (page - 1) * take,
    take,
  });

  const meta = new PageMeta(page, take, total);
  return new PageMetaResponse(data, meta);
};

export const getProductVariant = async (
  productId: number,
  optionIds: number[],
  valueIds: number[],
) => {
  return db.$queryRaw<
    ProductVariant[]
  >`select "ProductVariant".id,"ProductVariant"."productId", "ProductVariant".sku,"ProductVariant".price,"ProductVariant".quantity, "ProductVariant".images   
  from "ProductVariant"
  join "VariantValue" vv on vv."variantId" = "ProductVariant".id
  join "Option" on "Option"."id" = vv."optionId" 
  join "OptionValue" ON "OptionValue"."id" = vv."valueId"
  join "Product" ON "Product"."id" = "ProductVariant"."productId"
  where "ProductVariant"."productId" =${productId} and vv."optionId" in (${Prisma.join(
    optionIds,
  )}) and vv."valueId" in (${Prisma.join(valueIds)})
  group by("ProductVariant".id,"ProductVariant"."productId")
  HAVING COUNT(DISTINCT vv."optionId") = (select count("productId") from "ProductOption" where "ProductOption"."productId" =${productId})
  LIMIT 1;`;
};
