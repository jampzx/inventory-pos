import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import {
  signJwt,
  generateSessionId,
  getSessionExpirationDate,
} from "@/lib/jwt";
import { cookies } from "next/headers";
import { env } from "process";

export async function POST(req: Request) {
  const { username, password, forceLogin = false } = await req.json();

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
      session_token: true,
      session_expires_at: true,
      last_login_at: true,
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

  // Check if user has an active session and forceLogin is not requested
  const hasActiveSession =
    user.session_token &&
    user.session_expires_at &&
    user.session_expires_at > new Date();

  if (hasActiveSession && !forceLogin) {
    return NextResponse.json(
      {
        success: false,
        requiresConfirmation: true,
        message:
          "This account is currently logged in on another device. Do you want to force logout and continue?",
        lastLoginAt: user.last_login_at,
      },
      { status: 409 }
    );
  }

  // Generate new session
  const sessionId = generateSessionId();
  const sessionExpiresAt = getSessionExpirationDate();

  // Invalidate any existing session and create new one
  await prisma.user.update({
    where: { id: user.id },
    data: {
      session_token: sessionId,
      last_login_at: new Date(),
      session_expires_at: sessionExpiresAt,
    },
  });

  // Add session_id to the JWT payload
  const token = signJwt({
    id: user.id,
    name: user.full_name,
    username: user.username,
    user_type: user.user_type,
    company_id: user.company_id,
    session_id: sessionId,
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
