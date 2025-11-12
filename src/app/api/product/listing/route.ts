import { NextResponse } from "next/server";
import { prisma } from "lib/prisma";

export const dynamic = "force-dynamic";
export async function GET() {
  try {
    const products = await prisma.product.findMany({
      orderBy: {
        created_at: "desc",
      },
      select: {
        id: true,
        name: true,
        description: true,
        product_type: true,
        price: true,
        image_url: true,
        status: true,
        stock: true, // Include stock field
      },
    });

    return NextResponse.json({ success: true, data: products });
  } catch (error) {
    console.error("Failed to fetch products:", error);
    return NextResponse.json(
      { success: false, message: "Error fetching products" },
      { status: 500 }
    );
  }
}
