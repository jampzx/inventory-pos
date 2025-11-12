import { NextResponse } from "next/server";
import { prisma } from "lib/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, description, product_type, price, image_url, status, stock } =
      body;

    if (!name || !product_type || !price || stock === undefined) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );
    }

    const newProduct = await prisma.product.create({
      data: {
        name,
        description,
        product_type,
        price,
        image_url,
        status: status || "active",
        stock, // Add stock field
      },
    });

    return NextResponse.json({ success: true, data: newProduct });
  } catch (error) {
    console.error("❌ Failed to add product:", error);
    return NextResponse.json(
      { success: false, message: "Server error adding product" },
      { status: 500 }
    );
  }
}
