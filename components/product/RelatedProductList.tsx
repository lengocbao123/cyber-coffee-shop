import { IProduct } from "@/data/products";
import ProductCard from "./ProductCard";
import { getRelativeProducts } from "@/services/products";

const RelatedProductList = async ({ product }: { product: IProduct }) => {
  const relativeProducts = await getRelativeProducts(product.id);
  console.log({relativeProducts});
  
 
  return (
    <div className="flex flex-col items-center space-y-5">
      <h3 className="text-md">Related products</h3>
      <p className="text-2xl font-semibold">
        You might also want to check out these products.
      </p>
      <div className="grid grid-cols-4 gap-5">
        {relativeProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default RelatedProductList;
