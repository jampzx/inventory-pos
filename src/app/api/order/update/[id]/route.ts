import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { z } from "zod";
import { withAuth } from "@/lib/authMiddleware";

const updateOrderSchema = z.object({
  product_id: z.number().optional(),
  quantity: z.number().int().nonnegative().optional(),
  order_price: z.number().optional(),
  selling_price: z.number().optional(),
  order_date: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/)
    .optional(),
});

export async function PUT(
  _req: NextRequest,
  { params }: { params: { id: string } }
) {
  return withAuth(async (req, user) => {
    const id = Number(params.id);
    if (isNaN(id)) {
      return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
    }

    const body = await req.json();
    const parse = updateOrderSchema.safeParse(body);

    if (!parse.success) {
      return NextResponse.json(
        { error: parse.error.flatten() },
        { status: 400 }
      );
    }

    const { product_id, quantity, order_price, selling_price, order_date } =
      parse.data;

    try {
      // If product_id is included, fetch product name
      let productName: string | undefined;
      if (product_id) {
        const product = await prisma.product.findUnique({
          where: {
            id: product_id,
            company_id: user.company_id,
          },
          select: { name: true },
        });

        if (!product) {
          return NextResponse.json(
            { error: "Product not found" },
            { status: 404 }
          );
        }

        productName = product.name;
      }

      // If enough data is provided, compute profits
      let profit_per_unit: number | undefined;
      let net_profit: number | undefined;

      if (order_price != null && selling_price != null) {
        profit_per_unit = selling_price - order_price;
      }

      if (profit_per_unit != null && quantity != null) {
        net_profit = profit_per_unit * quantity;
      }

      const updatedOrder = await prisma.order.update({
        where: {
          id,
          company_id: user.company_id,
        },
        data: {
          ...(product_id && { product_id }),
          ...(productName && { product: productName }),
          ...(quantity != null && { quantity }),
          ...(order_price != null && { order_price }),
          ...(selling_price != null && { selling_price }),
          ...(profit_per_unit != null && { profit_per_unit }),
          ...(net_profit != null && { net_profit }),
          ...(order_date && { order_date: new Date(order_date) }),
        },
      });

      return NextResponse.json(updatedOrder);
    } catch (error) {
      console.error("UPDATE ORDER ERROR:", error);
      return NextResponse.json(
        { error: "Failed to update order" },
        { status: 500 }
      );
    }
  })(_req);
}
