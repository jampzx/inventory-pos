import { NextResponse } from "next/server";
import { prisma } from "lib/prisma";
import { z } from "zod";
import bcrypt from "bcryptjs";

// Validation schema with branch_ids array
const userSchema = z.object({
  full_name: z.string().min(1, "Full name is required"),
  username: z.string().min(1, "Username is required"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  user_type: z.enum(["admin", "user"]),
  status: z.enum(["active", "inactive"]),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = userSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { success: false, errors: parsed.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const { username, password, ...rest } = parsed.data;

    const existingUser = await prisma.user.findUnique({ where: { username } });

    if (existingUser) {
      return NextResponse.json(
        { success: false, message: "Username already exists." },
        { status: 409 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    // ✅ Step 1: Create the user (no branches)
    const newUser = await prisma.user.create({
      data: {
        username,
        ...rest,
        password: hashedPassword,
      },
    });

    return NextResponse.json({ success: true, data: newUser });
  } catch (error) {
    console.error("❌ Failed to create user:", error);
    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}
