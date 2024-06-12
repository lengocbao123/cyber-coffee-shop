import { Category, Product } from "@prisma/client";

import { IPageMetaResponse } from "./pageMeta";
export interface IFetchProductsQuery {
	page: number;
	take: number;
	name?: string;
	createdAt?: "ASC" | "DESC";
	categoryIds?: number[];
}

export interface IListProductResponse extends IPageMetaResponse<IProduct> {
	category: Category;
}
export interface IProduct extends Product {
	category: Category;
	productOption?: IProductOption[];
}

export interface IProductOption
{
	id: number;
	name: string;
	optionValue: { id: number; name: string }[];
}