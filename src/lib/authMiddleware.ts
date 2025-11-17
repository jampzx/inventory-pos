import { NextRequest, NextResponse } from "next/server";
import { verifyJwt } from "./jwt";
import { JwtUserPayload } from "types/auth";
import { cookies } from "next/headers";

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

    return handler(req, user);
  };
}
