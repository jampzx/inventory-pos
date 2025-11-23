import { NextRequest, NextResponse } from "next/server";
import { verifyJwt } from "@/lib/jwt";
import { prisma } from "@/lib/prisma";
import { JwtUserPayload } from "@/types/auth";
import { cookies } from "next/headers";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const token = cookies().get("token")?.value;

    if (!token) {
      return NextResponse.json({ valid: false, reason: "no_token" });
    }

    const decoded = verifyJwt<JwtUserPayload>(token);
    if (!decoded) {
      return NextResponse.json({ valid: false, reason: "invalid_token" });
    }

    // Check if session exists and is still valid in database
    const dbUser = await prisma.user.findUnique({
      where: { id: decoded.id },
      select: {
        session_token: true,
        session_expires_at: true,
      },
    });

    if (
      !dbUser ||
      !dbUser.session_token ||
      dbUser.session_token !== decoded.session_id ||
      (dbUser.session_expires_at && dbUser.session_expires_at < new Date())
    ) {
      return NextResponse.json({
        valid: false,
        reason: "session_invalidated",
        message:
          "Security Alert: Your session has been terminated because this account was accessed from another device or browser. For your security, please log in again to continue using the application.",
      });
    }

    return NextResponse.json({ valid: true });
  } catch (error) {
    console.error("Error checking session validity:", error);
    return NextResponse.json({ valid: false, reason: "error" });
  }
}
