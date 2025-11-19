import { NextResponse } from "next/server";
import { jwtVerify } from "jose";
import type { NextRequest } from "next/server";
import { JwtUserPayload } from "@/types/auth";

const PUBLIC_PATHS = ["/sign-in", "/unauthorized", "/api"];
const ADMIN_ONLY_PATHS = ["/users", "/companies"];

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (PUBLIC_PATHS.some((path) => pathname.startsWith(path))) {
    return NextResponse.next();
  }

  const token = request.cookies.get("token")?.value;

  if (!token) {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }

  try {
    const { payload } = await jwtVerify(
      token,
      new TextEncoder().encode(process.env.JWT_SECRET)
    );

    const user = payload as unknown as JwtUserPayload;

    // Check if the route requires admin access
    const isAdminOnlyRoute = ADMIN_ONLY_PATHS.some((path) =>
      pathname.startsWith(path)
    );

    if (
      isAdminOnlyRoute &&
      user.user_type !== process.env.AUTHORIZED_USE_TYPE
    ) {
      return NextResponse.redirect(new URL("/unauthorized", request.url));
    }

    return NextResponse.next();
  } catch (err) {
    console.warn("Invalid token:", err);
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }
}

export const config = {
  matcher: ["/((?!_next/image|_next/static|favicon.ico|logo.png).*)"],
};
