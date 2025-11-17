import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { withAuth } from "@/lib/authMiddleware";

export async function POST(
  _req: NextRequest,
  { params }: { params: { id: string } }
) {
  return withAuth(async (req, user) => {
    const transactionId = parseInt(params.id);

    if (isNaN(transactionId)) {
      return NextResponse.json(
        { success: false, error: "Invalid transaction ID" },
        { status: 400 }
      );
    }

    try {
      const transaction = await prisma.transaction.findUnique({
        where: {
          id: transactionId,
          company_id: user.company_id,
        },
        include: {
          items: true,
        },
      });

      if (!transaction) {
        return NextResponse.json(
          { success: false, error: "Transaction not found" },
          { status: 404 }
        );
      }

      if (transaction.status === "voided") {
        return NextResponse.json(
          { success: false, error: "Transaction is already voided" },
          { status: 400 }
        );
      }

      await prisma.$transaction([
        prisma.transaction.update({
          where: {
            id: transactionId,
            company_id: user.company_id,
          },
          data: {
            status: "voided",
          },
        }),
      ]);

      return NextResponse.json({
        success: true,
        message: "Transaction voided and stock restored",
      });
    } catch (err) {
      console.error("Error voiding transaction:", err);
      return NextResponse.json(
        { success: false, error: "Internal server error" },
        { status: 500 }
      );
    }
  })(_req);
}
