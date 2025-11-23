import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { verifyJwt } from "@/lib/jwt";
import { prisma } from "@/lib/prisma";
import { JwtUserPayload } from "@/types/auth";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    // Get token from cookies
    const token = cookies().get("token")?.value;

    if (token) {
      // Verify token and clear session from database
      const decoded = verifyJwt<JwtUserPayload>(token);
      if (decoded) {
        await prisma.user.update({
          where: { id: decoded.id },
          data: {
            session_token: null,
            session_expires_at: null,
          },
        });
      }
    }
  } catch (error) {
    console.error("Error clearing session:", error);
    // Continue with logout even if session clearing fails
  }

  // Clear cookie
  cookies().set("token", "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 0,
    path: "/",
  });

  // Redirect to login page
  return NextResponse.redirect(
    new URL(
      "/sign-in",
      process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
    )
  );
}
