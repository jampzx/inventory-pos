import { NextRequest, NextResponse } from "next/server";
import { withAuth } from "@/lib/authMiddleware";
import { prisma } from "@/lib/prisma";

export const DELETE = withAuth(async (req: NextRequest, user) => {
  try {
    // Clear session from database
    await prisma.user.update({
      where: { id: user.id },
      data: {
        session_token: null,
        session_expires_at: null,
      },
    });

    return NextResponse.json({
      success: true,
      message: "Session invalidated successfully",
    });
  } catch (error) {
    console.error("Error invalidating session:", error);
    return NextResponse.json(
      { success: false, message: "Failed to invalidate session" },
      { status: 500 }
    );
  }
});
