import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { signJwt } from "@/lib/jwt";
import { cookies } from "next/headers";
import { env } from "process";

export async function POST(req: Request) {
  const { username, password } = await req.json();

  // Fetch user and their company's subscription dates
  const user = await prisma.user.findUnique({
    where: { username },
    select: {
      id: true,
      full_name: true,
      username: true,
      user_type: true,
      password: true,
      company_id: true,
      company: {
        select: {
          subscription_start: true,
          subscription_end: true,
        },
      },
    },
  });

  if (!user) {
    return NextResponse.json(
      { success: false, message: "Invalid credentials" },
      { status: 401 }
    );
  }

  // Validate subscription
  const now = new Date();
  const { subscription_start, subscription_end } = user.company || {};
  if (
    (subscription_start && now < subscription_start) ||
    (subscription_end && now > subscription_end)
  ) {
    return NextResponse.json(
      {
        success: false,
        message:
          "Your company's subscription is inactive. Please contact administrator.",
      },
      { status: 403 }
    );
  }

  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) {
    return NextResponse.json(
      { success: false, message: "Invalid credentials" },
      { status: 401 }
    );
  }

  // Add company_id to the JWT payload
  const token = signJwt({
    id: user.id,
    name: user.full_name,
    username: user.username,
    user_type: user.user_type,
    company_id: user.company_id,
  });

  cookies().set("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24 * 7,
    path: "/",
  });

  return NextResponse.json({
    success: true,
    token,
    user: {
      id: user.id,
      name: user.full_name,
      username: user.username,
      user_type: user.user_type,
      company_id: user.company_id,
    },
  });
}
