import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { withAuth } from "@/lib/authMiddleware";

export const dynamic = "force-dynamic";

export const GET = withAuth(async (req: NextRequest, user) => {
  try {
    const currentUser = await prisma.user.findUnique({
      where: { id: user.id },
      select: { username: true },
    });

    const companies = await prisma.company.findMany({
      orderBy: { created_at: "desc" },
    });

    return NextResponse.json({ success: true, data: companies });
  } catch (error) {
    console.error("Failed to fetch companies:", error);
    return NextResponse.json(
      { success: false, message: "Error fetching companies" },
      { status: 500 }
    );
  }
});
