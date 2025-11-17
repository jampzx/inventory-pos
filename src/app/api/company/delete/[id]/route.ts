import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { withAuth } from "@/lib/authMiddleware";

export async function DELETE(
  _req: NextRequest,
  { params }: { params: { id: string } }
) {
  return withAuth(async (req, user) => {
    try {
      const currentUser = await prisma.user.findUnique({
        where: { id: user.id },
        select: { username: true },
      });

      const id = parseInt(params.id);
      if (isNaN(id)) {
        return NextResponse.json(
          { success: false, message: "Invalid ID" },
          { status: 400 }
        );
      }

      const existingCompany = await prisma.company.findUnique({
        where: { company_id: id },
        include: {
          users: true,
          products: true,
          transactions: true,
        },
      });

      if (!existingCompany) {
        return NextResponse.json(
          { success: false, message: "Company not found" },
          { status: 404 }
        );
      }

      // Check if company has related records
      if (
        existingCompany.users.length > 0 ||
        existingCompany.products.length > 0 ||
        existingCompany.transactions.length > 0
      ) {
        return NextResponse.json(
          {
            success: false,
            message:
              "Cannot delete company with existing users, products, or transactions",
          },
          { status: 400 }
        );
      }

      const deletedCompany = await prisma.company.delete({
        where: { company_id: id },
      });

      return NextResponse.json({ success: true, data: deletedCompany });
    } catch (error) {
      console.error("❌ Failed to delete company:", error);
      return NextResponse.json(
        { success: false, message: "Server error" },
        { status: 500 }
      );
    }
  })(_req);
}
