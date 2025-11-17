import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { withAuth } from "@/lib/authMiddleware";

export const dynamic = "force-dynamic";

export const GET = withAuth(async (req: NextRequest, user) => {
  try {
    const expenses = await prisma.expense.findMany({
      where: { company_id: user.company_id },
      orderBy: { date: "desc" },
    });
    return NextResponse.json({ success: true, data: expenses });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Failed to fetch expenses" },
      { status: 500 }
    );
  }
});
