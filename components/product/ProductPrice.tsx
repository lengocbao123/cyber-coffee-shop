import { Button } from '../ui/button';
import { ProductVariant } from '@/prisma/generated/client';

const ProductPrice = ({ product }: { product?: ProductVariant }) => {
  const isAvailable = product && !!product.quantity;

  return (
    <div className="w-full space-y-3 border-t py-5">
      {isAvailable ? (
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold capitalize">
            Price ${product.price}
          </h2>
          <span className="text-sm text-foreground">
            {product.quantity} items in stock
          </span>
        </div>
      ) : (
        <h2 className="text-sm capitalize">Not available</h2>
      )}
      <Button disabled={!product} className="w-full">
        Add to cart
      </Button>
    </div>
  );
};

export default ProductPrice;
