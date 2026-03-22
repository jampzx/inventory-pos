import { NextRequest, NextResponse } from "next/server";
import { Prisma } from "@prisma/client";
import { prisma } from "lib/prisma";
import { withAuth } from "@/lib/authMiddleware";

export async function DELETE(
  _req: NextRequest,
  { params }: { params: { id: string } },
) {
  return withAuth(async (req, user) => {
    try {
      const id = parseInt(params.id);
      if (isNaN(id)) {
        return NextResponse.json(
          { success: false, message: "Invalid ID" },
          { status: 400 },
        );
      }

      const existingProduct = await prisma.product.findUnique({
        where: {
          id,
          company_id: user.company_id,
        },
      });

      if (!existingProduct) {
        return NextResponse.json(
          { success: false, message: "Product not found" },
          { status: 404 },
        );
      }

      const deletedProduct = await prisma.product.delete({
        where: {
          id,
          company_id: user.company_id,
        },
      });

      return NextResponse.json({ success: true, data: deletedProduct });
    } catch (error) {
      console.error("❌ Failed to delete product:", error);

      const isProductInUseError =
        (error instanceof Prisma.PrismaClientKnownRequestError &&
          error.code === "P2003") ||
        (error instanceof Prisma.PrismaClientUnknownRequestError &&
          /transaction_items_product_id_fkey|violates RESTRICT setting/i.test(
            error.message,
          ));

      if (isProductInUseError) {
        return NextResponse.json(
          {
            success: false,
            message:
              "This product cannot be deleted because it is already used in recorded transactions.",
          },
          { status: 409 },
        );
      }

      return NextResponse.json(
        { success: false, message: "Server error" },
        { status: 500 },
      );
    }
  })(_req);
}
