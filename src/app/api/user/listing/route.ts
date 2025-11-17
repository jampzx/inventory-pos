import { NextRequest, NextResponse } from "next/server";
import { prisma } from "lib/prisma";
import { withAuth } from "@/lib/authMiddleware";

export const dynamic = "force-dynamic";

export const GET = withAuth(async (req: NextRequest, user) => {
  try {
    const users = await prisma.user.findMany({
      where: { company_id: user.company_id },
      orderBy: { created_at: "desc" },
    });

    // Flatten the data to a cleaner format
    const transformedUsers = users.map((user) => ({
      id: user.id,
      name: user.full_name,
      username: user.username,
      user_type: user.user_type,
      status: user.status,
      created_at: user.created_at,
      updated_at: user.updated_at,
    }));

    return NextResponse.json({ success: true, data: transformedUsers });
  } catch (error) {
    console.error("❌ Failed to fetch users:", error);
    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
});
