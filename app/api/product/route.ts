import { getProducts } from "@/services/products";
import { NextResponse } from "next/server";
const LIMIT = 20;
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  try {
    const page = searchParams.get("page")
      ? Number(searchParams.get("page"))
      : 1;
    const result = await getProducts({ page, take: LIMIT });
    return new NextResponse(JSON.stringify(result), { status: 200 });
  } catch (e) {
    console.log({ e });

    return new NextResponse("Server Error", { status: 500 });
  }
}
