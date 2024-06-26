'use client';

import ProductCard from './ProductCard';
import { Skeleton } from '../ui/skeleton';
import { Product, Products } from '@/data/products';

const ProductList = ({
  products,
  title,
  subTitle,
  isLoading = false,
}: {
  products: Products;
  title?: string;
  subTitle?: string;
  isLoading?: boolean;
}) => {
  return (
    <div className="flex flex-col items-center px-4">
      {title && <h3 className="text-2xl font-bold">{title}</h3>}
      {subTitle && <p className="text-md mb-5">{subTitle}</p>}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
        {isLoading
          ? Array.from({ length: 8 }).map((_, index) => {
              return (
                <div
                  key={index}
                  className="space-y-4 shadow-lg rounded-lg overflow-hidden h-fit"
                >
                  <Skeleton className="h-[150px] w-[150px] bg-gray-200" />
                  <div className="space-y-2 p-4">
                    <Skeleton className="h-4 w-[100px]" />
                    <Skeleton className="h-4 w-[5F0px]" />
                  </div>
                </div>
              );
            })
          : products.map(product => (
              <ProductCard key={product.id} product={product as Product} />
            ))}
      </div>
    </div>
  );
};

export default ProductList;
