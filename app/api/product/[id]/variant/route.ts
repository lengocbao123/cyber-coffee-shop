import { db } from "@/lib/db";
import { NextResponse } from "next/server";
export async function GET(
	req: Request,
	{ params }: { params: { id: string } }
) {
	try {
		const { id } = params;
		const product = await db.productVariant.findMany({
			where: {
				productId: parseInt(id),
			},
			select: {
				productId: true,
				variantValues: {
					select: {
						option: {
							select: {
								option: {
									select: { name: true },
								},
							},
						},
						value: {
							select: {
								name: true,
							},
						},
					},
				},
			},
		});

		return new NextResponse(JSON.stringify(product), { status: 200 });
	} catch (e) {
		console.log({ e });
		return new NextResponse("Server Error", { status: 500 });
	}
}
