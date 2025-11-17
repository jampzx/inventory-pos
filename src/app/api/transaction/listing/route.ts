import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { withAuth } from "@/lib/authMiddleware";

export const dynamic = "force-dynamic";

export const GET = withAuth(async (req: NextRequest, user) => {
  try {
    const transactions = await prisma.transaction.findMany({
      where: { company_id: user.company_id },
      orderBy: { created_at: "desc" },
      include: {
        items: {
          include: {
            product: {
              select: {
                id: true,
                name: true,
                price: true,
              },
            },
          },
        },
        payments: true,
        details: true,
      },
    });

    return NextResponse.json({ success: true, data: transactions });
  } catch (error) {
    console.error("Failed to fetch transactions:", error);
    return NextResponse.json(
      { success: false, error: "Failed to load transactions" },
      { status: 500 }
    );
  }
});
