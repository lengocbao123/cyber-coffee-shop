'use client';
import { Product } from '@/data/products';
import React, { useMemo } from 'react';
import ProductOption from './ProductOption';
import ProductPrice from './ProductPrice';
import { useFieldArray, useForm } from 'react-hook-form';
import { z } from 'zod';
import { Form, FormField } from '../ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useQuery } from '@tanstack/react-query';
import { getProductVariant } from '@/services/products';
import { Skeleton } from '../ui/skeleton';
import { useStore } from '../provider/StoreProvider';
const schema = z.object({
  options: z.array(
    z.object({
      id: z.number(),
      name: z.string(),
      valueId: z.number(),
      value: z.string(),
    }),
  ),
});
type Schema = z.infer<typeof schema>;

const ProductOptionForm = ({ product }: { product: Product }) => {
  const store = useStore();
  const form = useForm<Schema>({
    resolver: zodResolver(schema),
    defaultValues: {
      options: product.options?.map(op => {
        return {
          id: op.id,
          name: op.name,
          valueId: op.optionValue[0].id,
          value: op.optionValue[0].name,
        };
      }),
    },
  });
  const { optionIds, valueIds } = useMemo(() => {
    let optionIds: number[] = [];
    let valueIds: number[] = [];
    form.getValues('options').forEach(op => {
      optionIds = [...optionIds, op.id];
      valueIds = [...valueIds, op.valueId];
    });
    return {
      optionIds,
      valueIds,
    };
  }, [form.getValues('options')]);
  const { data: variants, isLoading } = useQuery({
    queryKey: ['getProductVariant', optionIds, valueIds],
    queryFn: () => getProductVariant(product.id!, optionIds, valueIds),
  });

  const { update } = useFieldArray({
    control: form.control,
    name: 'options',
  });
  const submit = (data: Schema) => {
    const variant = variants ? variants[0] : undefined;
    variant &&
      store?.cartStore.addToCart({
        id: variant.id,
        price: variant.price,
        quantity: 1,
        name: product.name,
        thumbnail: product.thumbnail,
      });
  };

  return (
    <div>
      <Form {...form}>
        <form className="space-y-5" onSubmit={form.handleSubmit(submit)}>
          {product.options?.map((option, index) => (
            <FormField
              key={option.id}
              name="options"
              control={form.control}
              render={({ field }) => (
                <ProductOption
                  index={index}
                  key={option.id}
                  option={option}
                  value={field.value[index].valueId}
                  onChange={(id, value) =>
                    update(index, {
                      ...field.value[index],
                      valueId: id,
                      value,
                    })
                  }
                />
              )}
            />
          ))}
          {!isLoading ? (
            <ProductPrice product={variants ? variants[0] : undefined} />
          ) : (
            <div className="flex flex-col space-y-3">
              <Skeleton className="w-1/2 h-5 rounded-lg" />
              <Skeleton className="w-full h-8 rounded-lg" />
            </div>
          )}
        </form>
      </Form>
    </div>
  );
};

export default ProductOptionForm;
