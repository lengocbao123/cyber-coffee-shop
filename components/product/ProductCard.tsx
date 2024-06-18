"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import Link from "next/link";
import slugify from "react-slugify";
import { Product } from "@/data/products";


const ProductCard = ({
  product,
}: {
  product: Product;
}) => {
  return (
    <div className="space-y-4 shadow-lg rounded-lg overflow-hidden h-fit">
      <div className="overflow-hidden">
        <Image
          src={product.thumbnail!}
          alt={product.name!}
          width={150}
          height={150}
          className={cn(
            "h-auto w-full object-cover transition-all hover:scale-105 aspect-square"
          )}
        />
      </div>
      <div className="flex gap-2 p-4">
        <div className="flex-grow space-y-1 text-sm">
          <p className="text-sx text-muted-foreground capitalize">
            {product?.category?.name}
          </p>
          <Link
            href={`/product/${product.id}/${slugify(product.name)}`}
            className="font-medium leading-none"
          >
            {product.name}
          </Link>
          <p className="text-sm text-muted-foreground">${product.price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
