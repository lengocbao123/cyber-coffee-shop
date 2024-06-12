import { db } from "@/lib/db";
import { NextResponse } from "next/server";
export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const product = await db.product.findUnique({
      where: {
        id: parseInt(id),
      },
      include: {
        category: true,
      },
    });
    if (!product) {
      return new NextResponse("Server Error", { status: 500 });
    }
    const products = await db.product.findMany({
      where: {
        categoryId: product.category.id!,
      },
      include: {
        category: true,
      },
      take: 5,
    });

    return new NextResponse(
      JSON.stringify(products.filter((p) => p.id !== parseInt(id))),
      { status: 200 }
    );
  } catch (e) {
    console.log({ e });
    return new NextResponse("Server Error", { status: 500 });
  }
}
