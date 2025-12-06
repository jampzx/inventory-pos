import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { withAuth } from "@/lib/authMiddleware";

const quickCustomerSchema = z.object({
  name: z.string().min(1, "Name is required"),
  phone: z.string().optional().nullable(),
});

export const POST = withAuth(async (req: NextRequest, user) => {
  try {
    const body = await req.json();
    const validated = quickCustomerSchema.parse(body);

    // Check for duplicate by phone if provided
    if (validated.phone) {
      const existing = await prisma.customer.findFirst({
        where: {
          company_id: user.company_id,
          phone: validated.phone,
          status: "active",
        },
      });

      if (existing) {
        return NextResponse.json(
          {
            success: true,
            data: existing,
            isExisting: true,
            message: "Customer with this phone already exists",
          },
          { status: 200 }
        );
      }
    }

    const customer = await prisma.customer.create({
      data: {
        name: validated.name,
        phone: validated.phone,
        company_id: user.company_id,
        status: "active",
      },
    });

    return NextResponse.json(
      { success: true, data: customer, isExisting: false },
      { status: 201 }
    );
  } catch (err: any) {
    console.error("Quick create customer error:", err);
    if (err instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, error: err.errors },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { success: false, error: "Failed to create customer" },
      { status: 500 }
    );
  }
});
