import { db } from "@/lib/db";
import { NextResponse } from "next/server";
const LIMIT = 20;
export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const page = searchParams.get("page")
      ? Number(searchParams.get("page"))
      : 1;
    const total = await db.product.count({});
    const totalPage = Math.round(total / LIMIT);
    const data = await db.product.findMany({
      where: {},
      include: {
        category: {
          select: { name: true },
        },
      },
      skip: (page - 1) * LIMIT,
      take: LIMIT,
    });
    return new NextResponse(
      JSON.stringify({
        data,
        meta: {
          page: page,
          take: LIMIT,
          itemCount: total,
          pageCount: totalPage,
          hasPreviousPage: false,
          hasNextPage: false,
        },
      }),
      { status: 200 }
    );
  } catch (e) {
    console.log({ e });

    return new NextResponse("Server Error", { status: 500 });
  }
}
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const product = await db.product.create({
      data: body,
    });

    return NextResponse.json(product);
  } catch (error) {
    console.log("PRODUCT_POST", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
