import { NextResponse } from "next/server";
import { jwtVerify } from "jose";
import type { NextRequest } from "next/server";

const PUBLIC_PATHS = ["/sign-in", "/unauthorized", "/api"];

const pathAccess: {
  pattern: RegExp;
  requiredPermission: { group: string; action: string };
}[] = [
  // Dashboard
  {
    pattern: /^\/$/,
    requiredPermission: { group: "Dashboard", action: "READ" },
  },
  {
    pattern: /^\/pos/,
    requiredPermission: { group: "Dashboard", action: "READ" },
  },
  {
    pattern: /^\/tiktok/,
    requiredPermission: { group: "Dashboard", action: "READ" },
  },
  {
    pattern: /^\/branch-sell/,
    requiredPermission: { group: "Dashboard", action: "READ" },
  },

  // Transactions
  {
    pattern: /^\/transaction\/pos/,
    requiredPermission: { group: "Transactions", action: "READ" },
  },
  {
    pattern: /^\/transaction\/tiktok/,
    requiredPermission: { group: "Transactions", action: "READ" },
  },
  {
    pattern: /^\/transaction\/branch-sell/,
    requiredPermission: { group: "Transactions", action: "READ" },
  },
  {
    pattern: /^\/transaction\/orders/,
    requiredPermission: { group: "Transactions", action: "READ" },
  },

  // Products
  {
    pattern: /^\/list\/products/,
    requiredPermission: { group: "Products", action: "READ" },
  },
  {
    pattern: /^\/list\/product-categories/,
    requiredPermission: { group: "Products", action: "READ" },
  },

  // Staff & Commissions
  {
    pattern: /^\/list\/staff-commission/,
    requiredPermission: { group: "Staff & Commissions", action: "READ" },
  },
  {
    pattern: /^\/list\/commission-categories/,
    requiredPermission: { group: "Staff & Commissions", action: "READ" },
  },
  {
    pattern: /^\/list\/commission-list/,
    requiredPermission: { group: "Staff & Commissions", action: "READ" },
  },

  // Expenses
  {
    pattern: /^\/list\/expenses/,
    requiredPermission: { group: "Expenses", action: "READ" },
  },
  {
    pattern: /^\/list\/expense-categories/,
    requiredPermission: { group: "Expenses", action: "READ" },
  },

  // System Management
  {
    pattern: /^\/list\/tender/,
    requiredPermission: { group: "System Management", action: "READ" },
  },
  {
    pattern: /^\/list\/payment-types/,
    requiredPermission: { group: "System Management", action: "READ" },
  },
  {
    pattern: /^\/list\/branches/,
    requiredPermission: { group: "System Management", action: "READ" },
  },
  {
    pattern: /^\/list\/users/,
    requiredPermission: { group: "System Management", action: "READ" },
  },
  {
    pattern: /^\/list\/user-access/,
    requiredPermission: { group: "System Management", action: "READ" },
  },
];

type Permission = { group: string; action: string };

function canAccess(
  permissions: Permission[] | undefined,
  required: Permission
): boolean {
  if (!permissions) return false;
  return permissions.some(
    (p) => p.group === required.group && p.action === required.action
  );
}

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

    const permissions = payload.permissions as Permission[] | undefined;

    // Special case: /list/user-access requires READ + admin
    if (
      pathname.startsWith("/list/user-access") &&
      (payload.user_type !== "admin" ||
        !canAccess(permissions, { group: "System Management", action: "READ" }))
    ) {
      return NextResponse.redirect(new URL("/unauthorized", request.url));
    }

    const match = pathAccess.find(({ pattern }) => pattern.test(pathname));

    if (match && !canAccess(permissions, match.requiredPermission)) {
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
