import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { withAuth } from "@/lib/authMiddleware";

export async function DELETE(
  _req: NextRequest,
  { params }: { params: { id: string } }
) {
  return withAuth(async (req, user) => {
    const id = Number(params.id);

    if (isNaN(id)) {
      return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
    }

    try {
      await prisma.order.delete({
        where: {
          id,
          company_id: user.company_id,
        },
      });
      return NextResponse.json(
        { success: true, message: "Order deleted" },
        { status: 200 }
      );
    } catch (error) {
      console.error("DELETE ORDER ERROR:", error);
      return NextResponse.json(
        { error: "Failed to delete order" },
        { status: 500 }
      );
    }
  })(_req);
}
