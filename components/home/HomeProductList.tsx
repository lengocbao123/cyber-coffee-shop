"use client";
import ProductList from "../product/ProductList";

import { Products } from "@/data/products";

const HomeProductList = ({ products }: { products: Products }) => {
  return (
    <ProductList
      products={products}
      title="Popular product that we sold"
      subTitle="We provide best quality & fresh grocery items near your location"
    />
  );
};

export default HomeProductList;
