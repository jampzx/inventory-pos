import { NextRequest, NextResponse } from "next/server";
import { prisma } from "lib/prisma";
import { withAuth } from "@/lib/authMiddleware";

export const dynamic = "force-dynamic";
export const GET = withAuth(async (req: NextRequest, user) => {
  try {
    const products = await prisma.product.findMany({
      where: { company_id: user.company_id },
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
        stock: true,
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
});
