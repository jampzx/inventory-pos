import { NextRequest, NextResponse } from "next/server";
import { verifyJwt } from "lib/jwt";

export async function GET(req: NextRequest) {
  const authHeader = req.headers.get("authorization");
  const token = authHeader?.split(" ")[1];

  if (!token) {
    return NextResponse.json(
      { success: false, message: "Unauthorized" },
      { status: 401 }
    );
  }

  const user = verifyJwt<{ id: number; user_type: string }>(token);

  if (!user) {
    return NextResponse.json(
      { success: false, message: "Invalid token" },
      { status: 401 }
    );
  }

  return NextResponse.json({ success: true, data: { user } });
}
