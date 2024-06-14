import { Category } from "@/prisma/generated/client";
import React from "react";
import CategoryItem from "./CategoryItem";

const CategoryList = ({ categories }: { categories: Category[] }) => {
  return (
    <div className="w-full flex items-center justify-center gap-8">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default CategoryList;
