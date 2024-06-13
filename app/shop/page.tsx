import AppPagination from "@/components/AppPagination";
import Filter from "@/components/filter";
import Sort from "@/components/filter/Sort";
import ProductList from "@/components/product/ProductList";
import { fetchProducts } from "@/services/products";
import { Suspense } from "react";
export default async function ShopPage() {
  const productResponse = await fetchProducts({
    page: 1,
    take: 8,
  });

  return (
    <div className="container py-20 grid grid-cols-1 sm:grid-cols-4 gap-10">
      <Suspense fallback={<div></div>}>
        <Filter />
      </Suspense>

      <div className="col-span-3 space-y-4 flex flex-col items-center">
        <div className="w-full flex justify-end">
          <Sort />
        </div>
        <ProductList products={productResponse.data} />
        <Suspense fallback={<div></div>}>
          <AppPagination
            totalPages={Number(productResponse.meta.pageCount)}
            page={Number(productResponse.meta.page)}
          />
        </Suspense>
      </div>
    </div>
  );
}
