import { NextRequest, NextResponse } from "next/server";
import { withAuth } from "@/lib/authMiddleware";
import { prisma } from "@/lib/prisma";

export const GET = withAuth(async (req: NextRequest, user) => {
  try {
    // Only allow admin users to view all sessions
    if (user.user_type !== process.env.AUTHORIZED_USE_TYPE) {
      return NextResponse.json(
        { success: false, message: "Unauthorized" },
        { status: 403 }
      );
    }

    const activeSessions = await prisma.user.findMany({
      where: {
        company_id: user.company_id,
        session_token: { not: null },
        session_expires_at: { gt: new Date() },
      },
      select: {
        id: true,
        username: true,
        full_name: true,
        last_login_at: true,
        session_expires_at: true,
      },
    });

    return NextResponse.json({
      success: true,
      sessions: activeSessions,
    });
  } catch (error) {
    console.error("Error fetching active sessions:", error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch active sessions" },
      { status: 500 }
    );
  }
});
