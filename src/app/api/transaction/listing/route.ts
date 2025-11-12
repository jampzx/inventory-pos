import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const transactions = await prisma.transaction.findMany({
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
}
