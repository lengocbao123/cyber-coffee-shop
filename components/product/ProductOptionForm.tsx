"use client";
import { Option } from "@/data/products";
import React from "react";
import ProductOption from "./ProductOption";

const ProductOptionForm = ({ options }: { options: Option[] }) => {
  return (
    <div className="space-y-5">
      {options?.map((option) => (
        <ProductOption key={option.id} option={option} />
      ))}
    </div>
  );
};

export default ProductOptionForm;
