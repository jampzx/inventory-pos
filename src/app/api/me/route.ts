import { NextResponse } from "next/server";
import { verifyJwt } from "@/lib/jwt";
import { prisma } from "@/lib/prisma";
import { cookies } from "next/headers";
import { JwtUserPayload } from "@/types/auth";

export const dynamic = "force-dynamic";

export async function GET() {
  const token = cookies().get("token")?.value;

  if (!token) {
    return NextResponse.json({ user: null }, { status: 401 });
  }

  try {
    const decoded = (await verifyJwt(token)) as JwtUserPayload;

    if (!decoded) {
      return NextResponse.json({ user: null }, { status: 401 });
    }

    // Validate session against database
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
      return NextResponse.json({ user: null }, { status: 401 });
    }

    return NextResponse.json({
      user: decoded,
      authorizedUserType: process.env.AUTHORIZED_USE_TYPE,
    });
  } catch (err) {
    console.error("Error in /api/me", err);
    return NextResponse.json({ user: null }, { status: 401 });
  }
}
