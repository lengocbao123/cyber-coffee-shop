import { db } from "@/lib/db";
import { NextResponse } from "next/server";
export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    // const { id } = params;
    // const product = await db.product.findUnique({
    //   where: {
    //     id: parseInt(id),
    //   },
    //   include: {
    //     category: true,
    //     options: {
    //       select: {
    //         option: {
    //           select: {
    //             id: true,
    //             name: true,
    //             optionValue: {
    //               select: {
    //                 id: true,
    //                 name: true,
    //               },
    //             },
    //           },
    //         },
    //       },
    //     },
    //   },
    // });

    // return new NextResponse(
    //   JSON.stringify({
    //     ...product,
    //     options: product?.options.map((o) => o.option),
    //   }),
    //   { status: 200 }
    // );
  } catch (e) {
    console.log({ e });
    return new NextResponse("Server Error", { status: 500 });
  }
}
