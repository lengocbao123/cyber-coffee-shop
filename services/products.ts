"use server"
import { DataResult, PageMeta, PageMetaResponse } from "@/data/pageMeta";
import { db } from "@/lib/db";

export const getProductById = async (id: number) => {
	const data = await db.product.findUnique({
		where: {
			id,
		},
		include: {
			category: true,
			options: {
				select: {
					option: {
						select: {
							id: true,
							name: true,
							optionValue: {
								select: {
									id: true,
									name: true,
								},
							},
						},
					},
				},
			},
		},
	});
	return new DataResult({
		...data,
		options: data?.options.map((value) => value.option),
	});
};

export const getProducts = async ({
	page,
	take,
}: {
	page: number;
	take: number;
}) => {
	const total = await db.product.count({});
	const data = await db.product.findMany({
		where: {},
		include: {
			category: {
				select: { name: true },
			},
		},
		skip: (page - 1) * take,
		take,
	});
	const meta = new PageMeta(page, take, total);
	return new PageMetaResponse(data, meta);
};

