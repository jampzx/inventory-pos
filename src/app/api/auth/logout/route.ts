import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export const dynamic = "force-dynamic";

export async function GET() {
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
