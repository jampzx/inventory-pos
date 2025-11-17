import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { withAuth } from "@/lib/authMiddleware";

export async function DELETE(
  _req: NextRequest,
  { params }: { params: { id: string } }
) {
  return withAuth(async (req, user) => {
    const id = parseInt(params.id);
    if (isNaN(id)) {
      return NextResponse.json(
        { success: false, message: "Invalid ID" },
        { status: 400 }
      );
    }

    try {
      await prisma.expense.delete({
        where: {
          id,
          company_id: user.company_id,
        },
      });
      return NextResponse.json({ success: true });
    } catch (error: any) {
      if (error.code === "P2025") {
        return NextResponse.json(
          { success: false, message: "Expense not found" },
          { status: 404 }
        );
      }
      return NextResponse.json(
        { success: false, message: "Failed to delete expense" },
        { status: 500 }
      );
    }
  })(_req);
}
