import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { z } from "zod";
import bcrypt from "bcryptjs";
import { withAuth } from "@/lib/authMiddleware";

// Schema for profile updates - only allow full_name, username, and password
const profileUpdateSchema = z
  .object({
    full_name: z.string().min(1, "Full name is required"),
    username: z.string().min(1, "Username is required"),
    current_password: z.string().optional(),
    new_password: z
      .string()
      .min(6, "Password must be at least 6 characters")
      .optional(),
    confirm_password: z.string().optional(),
  })
  .refine(
    (data) => {
      // If new_password is provided, current_password must also be provided
      if (data.new_password && !data.current_password) {
        return false;
      }
      // If new_password is provided, confirm_password must match
      if (data.new_password && data.new_password !== data.confirm_password) {
        return false;
      }
      return true;
    },
    {
      message: "Password validation failed",
      path: ["new_password"],
    }
  );

export async function GET(req: NextRequest) {
  return withAuth(async (request, user) => {
    try {
      const currentUser = await prisma.user.findUnique({
        where: { id: user.id },
        select: {
          id: true,
          full_name: true,
          username: true,
          user_type: true,
          status: true,
          company: {
            select: {
              company_id: true,
              company_name: true,
              subscription_start: true,
              subscription_end: true,
            },
          },
        },
      });

      if (!currentUser) {
        return NextResponse.json(
          { success: false, message: "User not found" },
          { status: 404 }
        );
      }

      return NextResponse.json({
        success: true,
        data: currentUser,
      });
    } catch (error) {
      console.error("Failed to get user profile:", error);
      return NextResponse.json(
        { success: false, message: "Server error" },
        { status: 500 }
      );
    }
  })(req);
}

export async function PUT(req: NextRequest) {
  return withAuth(async (request, user) => {
    try {
      const body = await request.json();
      const parsed = profileUpdateSchema.safeParse(body);

      if (!parsed.success) {
        return NextResponse.json(
          { success: false, errors: parsed.error.flatten().fieldErrors },
          { status: 400 }
        );
      }

      const { full_name, username, current_password, new_password } =
        parsed.data;

      // Check if user exists
      const existingUser = await prisma.user.findUnique({
        where: { id: user.id },
      });

      if (!existingUser) {
        return NextResponse.json(
          { success: false, message: "User not found" },
          { status: 404 }
        );
      }

      // Check if username is already taken by another user
      if (username !== existingUser.username) {
        const usernameExists = await prisma.user.findFirst({
          where: {
            username,
            id: { not: user.id },
          },
        });

        if (usernameExists) {
          return NextResponse.json(
            { success: false, message: "Username already exists" },
            { status: 400 }
          );
        }
      }

      const updateData: any = {
        full_name,
        username,
      };

      // Handle password update
      if (new_password && current_password) {
        // Verify current password
        const isCurrentPasswordValid = await bcrypt.compare(
          current_password,
          existingUser.password
        );

        if (!isCurrentPasswordValid) {
          return NextResponse.json(
            { success: false, message: "Current password is incorrect" },
            { status: 400 }
          );
        }

        // Hash new password
        updateData.password = await bcrypt.hash(new_password, 12);
      }

      // Update user
      const updatedUser = await prisma.user.update({
        where: { id: user.id },
        data: updateData,
        select: {
          id: true,
          full_name: true,
          username: true,
          user_type: true,
          status: true,
          company: {
            select: {
              company_id: true,
              company_name: true,
              subscription_start: true,
              subscription_end: true,
            },
          },
        },
      });

      return NextResponse.json({
        success: true,
        data: updatedUser,
        message: "Profile updated successfully",
      });
    } catch (error: any) {
      console.error("Failed to update user profile:", error);

      // Handle unique constraint violations
      if (error.code === "P2002") {
        return NextResponse.json(
          { success: false, message: "Username already exists" },
          { status: 400 }
        );
      }

      return NextResponse.json(
        { success: false, message: "Server error" },
        { status: 500 }
      );
    }
  })(req);
}
