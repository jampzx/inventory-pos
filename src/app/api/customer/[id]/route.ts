import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { withAuth } from "@/lib/authMiddleware";

const customerSchema = z.object({
  name: z.string().min(1).optional(),
  email: z.string().email().optional().nullable(),
  phone: z.string().optional().nullable(),
  address: z.string().optional().nullable(),
  notes: z.string().optional().nullable(),
  status: z.enum(["active", "inactive"]).optional(),
});

// GET single customer
export async function GET(
  _req: NextRequest,
  { params }: { params: { id: string } }
) {
  return withAuth(async (req, user) => {
    try {
      const customer = await prisma.customer.findFirst({
        where: {
          id: parseInt(params.id),
          company_id: user.company_id,
        },
      });

      if (!customer) {
        return NextResponse.json(
          { success: false, error: "Customer not found" },
          { status: 404 }
        );
      }

      return NextResponse.json({ success: true, data: customer });
    } catch (err) {
      return NextResponse.json(
        { success: false, error: "Failed to fetch customer" },
        { status: 500 }
      );
    }
  })(_req);
}

// PUT update customer
export async function PUT(
  _req: NextRequest,
  { params }: { params: { id: string } }
) {
  return withAuth(async (req, user) => {
    try {
      const body = await req.json();
      const validated = customerSchema.parse(body);

      const customer = await prisma.customer.updateMany({
        where: {
          id: parseInt(params.id),
          company_id: user.company_id,
        },
        data: validated,
      });

      if (customer.count === 0) {
        return NextResponse.json(
          { success: false, error: "Customer not found" },
          { status: 404 }
        );
      }

      return NextResponse.json({ success: true });
    } catch (err: any) {
      if (err instanceof z.ZodError) {
        return NextResponse.json(
          { success: false, error: err.errors },
          { status: 400 }
        );
      }
      return NextResponse.json(
        { success: false, error: "Failed to update customer" },
        { status: 500 }
      );
    }
  })(_req);
}

// DELETE customer (soft delete by setting status to inactive)
export async function DELETE(
  _req: NextRequest,
  { params }: { params: { id: string } }
) {
  return withAuth(async (req, user) => {
    try {
      await prisma.customer.updateMany({
        where: {
          id: parseInt(params.id),
          company_id: user.company_id,
        },
        data: { status: "inactive" },
      });

      return NextResponse.json({ success: true });
    } catch (err) {
      return NextResponse.json(
        { success: false, error: "Failed to delete customer" },
        { status: 500 }
      );
    }
  })(_req);
}
