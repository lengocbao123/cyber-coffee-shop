import { getProductById, getProducts } from "@/services/products";

export interface IFetchProductsQuery {
  page: number;
  take: number;
  name?: string;
  createdAt?: "ASC" | "DESC";
  categoryIds?: number[];
}
export type Products = Awaited<ReturnType<typeof getProducts>>["data"];
export type Product = NonNullable<
  Awaited<ReturnType<typeof getProductById>>["data"]
>;
export type Option = NonNullable<Product["options"]>[0];
