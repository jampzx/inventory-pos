import { NextRequest, NextResponse } from "next/server";
import { verifyJwt } from "./jwt";
import { JwtUserPayload } from "types/auth";
import { cookies } from "next/headers";
import { prisma } from "./prisma";

export function withAuth(
  handler: (req: NextRequest, user: JwtUserPayload) => Promise<NextResponse>
) {
  return async (req: NextRequest) => {
    // Try to get token from Authorization header first
    const authHeader = req.headers.get("authorization");
    let token = authHeader?.split(" ")[1];

    // If no token in header, try to get from cookies
    if (!token) {
      token = cookies().get("token")?.value;
    }

    if (!token) {
      return NextResponse.json(
        { success: false, message: "Unauthorized" },
        { status: 401 }
      );
    }

    const user = verifyJwt<JwtUserPayload>(token);

    if (!user) {
      return NextResponse.json(
        { success: false, message: "Invalid token" },
        { status: 401 }
      );
    }

    // Validate session against database
    try {
      const dbUser = await prisma.user.findUnique({
        where: { id: user.id },
        select: {
          session_token: true,
          session_expires_at: true,
        },
      });

      if (
        !dbUser ||
        !dbUser.session_token ||
        dbUser.session_token !== user.session_id ||
        (dbUser.session_expires_at && dbUser.session_expires_at < new Date())
      ) {
        return NextResponse.json(
          { success: false, message: "Session expired or invalid" },
          { status: 401 }
        );
      }
    } catch (error) {
      console.error("Error validating session:", error);
      return NextResponse.json(
        { success: false, message: "Session validation error" },
        { status: 401 }
      );
    }

    return handler(req, user);
  };
}
