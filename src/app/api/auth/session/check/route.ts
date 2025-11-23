import { NextRequest, NextResponse } from "next/server";
import { withAuth } from "@/lib/authMiddleware";

export const GET = withAuth(async (req: NextRequest, user) => {
  return NextResponse.json({
    success: true,
    session: {
      user_id: user.id,
      username: user.username,
      session_id: user.session_id,
      valid: true,
    },
  });
});
