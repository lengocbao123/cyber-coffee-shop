import ProductInformation from '@/components/product/ProductInformation';
import ProductMeta from '@/components/product/ProductMeta';
import ProductOptionForm from '@/components/product/ProductOptionForm';
import ProductPolicy from '@/components/product/ProductPolicy';
import RelatedProductList from '@/components/product/RelatedProductList';
import { cn } from '@/lib/utils';
import { getProductById } from '@/services/products';
import Image from 'next/image';

export default async function ProductPage({
  params,
}: {
  params: { slug: string; productId: string };
}) {
  const { data: product } = await getProductById(Number(params.productId));

  if (!product) {
    return <div>Product no found.</div>;
  }
  return (
    <div className="container grid grid-cols-1 sm:grid-cols-3 gap-10 py-20">
      <div className="w-full flex flex-col gap-3 divide-y">
        <ProductMeta product={product} />
        <ProductInformation product={product} />
        <ProductPolicy product={product} />
      </div>

      <div className="p-1 h-fit bg-gray-100 border rounded-lg">
        <Image
          src={product?.thumbnail!}
          alt={product?.name!}
          width={460}
          height={427}
          className={cn(
            'h-auto w-auto object-cover transition-all aspect-square rounded-lg',
          )}
        />
      </div>
      <ProductOptionForm product={product} />
      <div className="col-span-3 space-y-5 text-sm text-justify">
        <h3 className="text-2xl font-semibold">About this product</h3>
        {product.contents?.map(c => (
          <p key={c.id} className="text-sm">
            {c.content}
          </p>
        ))}
      </div>
      <div className="col-span-3">
        <RelatedProductList product={product} />
      </div>
    </div>
  );
}
