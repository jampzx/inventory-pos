import { NextRequest, NextResponse } from "next/server";
import { verifyJwt } from "./jwt";
import { JwtUserPayload } from "types/auth";

export function withAuth(
  handler: (req: NextRequest, user: JwtUserPayload) => Promise<NextResponse>
) {
  return async (req: NextRequest) => {
    const authHeader = req.headers.get("authorization");
    const token = authHeader?.split(" ")[1];

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
