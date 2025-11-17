import { NextRequest, NextResponse } from "next/server";
import { prisma } from "lib/prisma";
import { z } from "zod";
import { withAuth } from "@/lib/authMiddleware";

const productSchema = z.object({
  name: z.string().min(1, "Name is required"),
  description: z.string().optional(),
  product_type: z.enum(["product", "service"]),
  price: z.number().positive(),
  image_url: z.string().optional(),
  status: z.enum(["active", "inactive"]),
  stock: z.number().int().nonnegative(),
});

export async function PUT(
  _req: NextRequest,
  { params }: { params: { id: string } }
) {
  return withAuth(async (req, user) => {
    try {
      const id = parseInt(params.id);
      if (isNaN(id)) {
        return NextResponse.json(
          { success: false, message: "Invalid ID" },
          { status: 400 }
        );
      }

      const body = await req.json();
      const parsed = productSchema.safeParse(body);

      if (!parsed.success) {
        return NextResponse.json(
          { success: false, errors: parsed.error.flatten().fieldErrors },
          { status: 400 }
        );
      }

      const {
        name,
        description,
        product_type,
        price,
        image_url,
        status,
        stock,
      } = parsed.data;

      // 1. Update the product
      const updatedProduct = await prisma.product.update({
        where: {
          id,
          company_id: user.company_id,
        },
        data: {
          name,
          description,
          product_type,
          price,
          image_url,
          status,
          stock,
        },
      });

      return NextResponse.json({ success: true, data: updatedProduct });
    } catch (error) {
      console.error("❌ Failed to update product:", error);
      return NextResponse.json(
        { success: false, message: "Server error" },
        { status: 500 }
      );
    }
  })(_req);
}
