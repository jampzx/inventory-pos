import { NextRequest, NextResponse } from "next/server";
import { prisma } from "lib/prisma";
import { z } from "zod";
import { withAuth } from "@/lib/authMiddleware";

const productSchema = z.object({
  name: z.string().min(1, "Name is required"),
  description: z.string().optional(),
  product_type: z.enum(["product", "service"]),
  price: z.number().nonnegative(),
  image_url: z.string().optional(),
  status: z.enum(["active", "inactive"]).optional(),
  stock: z.number().int().nonnegative().optional(),
});

export const POST = withAuth(async (req: NextRequest, user) => {
  try {
    const body = await req.json();

    const parsed = productSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid product details",
          errors: parsed.error.flatten().fieldErrors,
        },
        { status: 400 },
      );
    }

    const { name, description, product_type, price, image_url, status, stock } =
      parsed.data;

    const normalizedStock = product_type === "service" ? 0 : (stock ?? 0);

    const newProduct = await prisma.product.create({
      data: {
        name,
        description,
        product_type,
        price,
        image_url,
        status: status || "active",
        stock: normalizedStock,
        company_id: user.company_id,
      },
    });

    return NextResponse.json({ success: true, data: newProduct });
  } catch (error) {
    console.error("❌ Failed to add product:", error);
    return NextResponse.json(
      { success: false, message: "Server error adding product" },
      { status: 500 },
    );
  }
});
