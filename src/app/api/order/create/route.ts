import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { z } from "zod";

const orderSchema = z.object({
  product_id: z.number(),
  quantity: z.number().int().nonnegative(),
  order_price: z.number(),
  selling_price: z.number(),
  order_date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
});

export async function POST(req: NextRequest) {
  const body = await req.json();
  const parse = orderSchema.safeParse(body);

  if (!parse.success) {
    return NextResponse.json({ error: parse.error.flatten() }, { status: 400 });
  }

  const { product_id, quantity, order_price, selling_price, order_date } =
    parse.data;

  try {
    const product = await prisma.product.findUnique({
      where: { id: product_id },
      select: { name: true },
    });

    if (!product) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    const profit_per_unit = selling_price - order_price;
    const net_profit = profit_per_unit * quantity;

    const newOrder = await prisma.order.create({
      data: {
        product_id,
        product: product.name,
        quantity,
        remaining_quantity: quantity,
        order_price,
        selling_price,
        profit_per_unit,
        net_profit,
        order_date: new Date(order_date),
      },
    });

    return NextResponse.json(newOrder, { status: 201 });
  } catch (error) {
    console.error("CREATE ORDER ERROR:", error);
    return NextResponse.json(
      { error: "Failed to create order" },
      { status: 500 }
    );
  }
}
