import { NextRequest, NextResponse } from "next/server";
import { prisma } from "lib/prisma";
import { z } from "zod";
import bcrypt from "bcryptjs";
import { withAuth } from "@/lib/authMiddleware";

// Same schema, but password is optional for update
const userUpdateSchema = z.object({
  full_name: z.string().min(1, "Full name is required"),
  username: z.string().min(1, "Username is required"),
  password: z.string().min(6).optional(),
  user_type: z.enum(["admin", "user"]),
  status: z.enum(["active", "inactive"]),
  company_id: z.string().min(1, "Company is required"),
});

export async function PUT(
  _req: NextRequest,
  { params }: { params: { id: string } },
) {
  return withAuth(async (req, user) => {
    try {
      const isSuperAdmin = user.user_type === process.env.AUTHORIZED_USE_TYPE;

      const id = parseInt(params.id);
      if (isNaN(id)) {
        return NextResponse.json(
          { success: false, message: "Invalid user ID" },
          { status: 400 },
        );
      }

      const body = await req.json();
      const parsed = userUpdateSchema.safeParse(body);

      if (!parsed.success) {
        return NextResponse.json(
          { success: false, errors: parsed.error.flatten().fieldErrors },
          { status: 400 },
        );
      }

      const { username, password, company_id, ...rest } = parsed.data;
      const requestedCompanyId = parseInt(company_id);

      if (isNaN(requestedCompanyId)) {
        return NextResponse.json(
          { success: false, message: "Invalid company" },
          { status: 400 },
        );
      }

      const existingUser = await prisma.user.findUnique({
        where: {
          id,
        },
      });

      if (!existingUser) {
        return NextResponse.json(
          { success: false, message: "User not found" },
          { status: 404 },
        );
      }

      if (!isSuperAdmin && existingUser.company_id !== user.company_id) {
        return NextResponse.json(
          { success: false, message: "Forbidden" },
          { status: 403 },
        );
      }

      if (!isSuperAdmin && requestedCompanyId !== user.company_id) {
        return NextResponse.json(
          { success: false, message: "Forbidden" },
          { status: 403 },
        );
      }

      // Hash new password if provided
      const updatedData: any = {
        username,
        ...rest,
        company_id: isSuperAdmin ? requestedCompanyId : user.company_id,
      };

      if (password) {
        updatedData.password = await bcrypt.hash(password, 12);
      }

      // ✅ Step 1: Update the user record
      const updatedUser = await prisma.user.update({
        where: {
          id,
        },
        data: updatedData,
      });

      return NextResponse.json({ success: true, data: updatedUser });
    } catch (error) {
      console.error("Failed to update user:", error);
      return NextResponse.json(
        { success: false, message: "Server error" },
        { status: 500 },
      );
    }
  })(_req);
}
