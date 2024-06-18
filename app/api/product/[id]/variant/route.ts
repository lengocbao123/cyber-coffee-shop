import { db } from '@/lib/db';
import { NextResponse } from 'next/server';
export async function GET(
  req: Request,
  { params }: { params: { id: string } },
) {
  try {
    const { id } = params;
    const data = await db.variantValue.findMany({
      where: {
        AND: [
          { productId: 1 },
          {
            optionId: {
              in: [1, 2, 3, 4, 5],
            },
          },
          {
            valueId: {
              in: [1, 5, 10, 14, 17],
            },
          },
        ],
      },
      include: {
        variant: {
          select: {
            price: true,
            quantity: true,
            images: true,
          },
        },
        option: {
          select: {
            option: {
              select: {
                name: true,
              },
            },
          },
        },
        value: {
          select: {
            variantValue: {
              select: {
                value: {
                  select: {
                    name: true,
                  },
                },
              },
            },
          },
        },
      },
    });

    return new NextResponse(JSON.stringify(data), { status: 200 });
  } catch (e) {
    console.log({ e });
    return new NextResponse('Server Error', { status: 500 });
  }
}
