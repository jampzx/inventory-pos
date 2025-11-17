import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { z } from "zod";
import { withAuth } from "@/lib/authMiddleware";

const companySchema = z.object({
  company_name: z.string().min(1, "Company name is required"),
  company_email: z.string().email("Invalid email address"),
  company_contact_number: z.string().min(1, "Contact number is required"),
  company_address: z.string().min(1, "Address is required"),
  subscription_start: z.string().nullable().optional(),
  subscription_end: z.string().nullable().optional(),
});

export async function PUT(
  _req: NextRequest,
  { params }: { params: { id: string } }
) {
  return withAuth(async (req, user) => {
    try {
      const currentUser = await prisma.user.findUnique({
        where: { id: user.id },
        select: { username: true },
      });

      const id = parseInt(params.id);
      if (isNaN(id)) {
        return NextResponse.json(
          { success: false, message: "Invalid ID" },
          { status: 400 }
        );
      }

      const body = await req.json();
      const parsed = companySchema.safeParse(body);

      if (!parsed.success) {
        return NextResponse.json(
          { success: false, errors: parsed.error.flatten().fieldErrors },
          { status: 400 }
        );
      }

      const {
        company_name,
        company_email,
        company_contact_number,
        company_address,
        subscription_start,
        subscription_end,
      } = parsed.data;

      const updatedCompany = await prisma.company.update({
        where: { company_id: id },
        data: {
          company_name,
          company_email,
          company_contact_number,
          company_address,
          subscription_start: subscription_start
            ? new Date(subscription_start)
            : null,
          subscription_end: subscription_end
            ? new Date(subscription_end)
            : null,
        },
      });

      return NextResponse.json({ success: true, data: updatedCompany });
    } catch (error) {
      console.error("❌ Failed to update company:", error);
      return NextResponse.json(
        { success: false, message: "Server error" },
        { status: 500 }
      );
    }
  })(_req);
}
