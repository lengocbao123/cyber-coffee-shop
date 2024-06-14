import { Category } from "@/prisma/generated/client";
import Image from "next/image";
import React from "react";

const CategoryItem = ({ category }: { category: Category }) => {
  return (
    <div className="flex bg-extend-8/10 flex-col items-center justify-center space-y-1 py-2 px-4 rounded-lg">
      <Image
        src={category?.image!}
        width={48}
        height={48}
        alt={category.name}
      />
      <h3 className="font-bold text-md">{category.name}</h3>
      <span className="text-sm">10 Items</span>
    </div>
  );
};

export default CategoryItem;
