import { NextRequest, NextResponse } from "next/server";
import { prisma } from "lib/prisma";
import { withAuth } from "@/lib/authMiddleware";

export async function DELETE(
  _req: NextRequest,
  { params }: { params: { id: string } }
) {
  return withAuth(async () => {
    try {
      const id = parseInt(params.id);
      if (isNaN(id)) {
        return NextResponse.json(
          { success: false, message: "Invalid ID" },
          { status: 400 }
        );
      }

      await prisma.user.delete({
        where: {
          id,
        },
      });

      return NextResponse.json({ success: true, message: "User deleted" });
    } catch (error) {
      console.error("❌ Failed to delete user:", error);
      return NextResponse.json(
        { success: false, message: "Server error" },
        { status: 500 }
      );
    }
  })(_req);
}
