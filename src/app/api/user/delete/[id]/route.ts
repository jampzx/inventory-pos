import { NextRequest, NextResponse } from "next/server";
import { prisma } from "lib/prisma";
import { withAuth } from "@/lib/authMiddleware";

export async function DELETE(
  _req: NextRequest,
  { params }: { params: { id: string } },
) {
  return withAuth(async (req, user) => {
    try {
      const isSuperAdmin = user.user_type === process.env.AUTHORIZED_USE_TYPE;

      const id = parseInt(params.id);
      if (isNaN(id)) {
        return NextResponse.json(
          { success: false, message: "Invalid ID" },
          { status: 400 },
        );
      }

      const existingUser = await prisma.user.findUnique({
        where: { id },
        select: { id: true, company_id: true },
      });

      if (!existingUser) {
        return NextResponse.json(
          { success: false, message: "User not found" },
          { status: 404 },
        );
      }

      if (!isSuperAdmin && existingUser.company_id !== user.company_id) {
        return NextResponse.json(
          { success: false, message: "Forbidden" },
          { status: 403 },
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
        { status: 500 },
      );
    }
  })(_req);
}
