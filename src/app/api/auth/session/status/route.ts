import { NextRequest, NextResponse } from "next/server";
import { verifyJwt } from "@/lib/jwt";
import { JwtUserPayload } from "@/types/auth";
import { cookies } from "next/headers";
import { validateSession } from "@/lib/sessionValidation";

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

    const session = await validateSession(decoded);

    if (!session.valid) {
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
