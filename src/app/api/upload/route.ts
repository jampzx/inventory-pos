import { NextRequest, NextResponse } from "next/server";
import { put } from "@vercel/blob";
import { v4 as uuidv4 } from "uuid";
import { withAuth } from "@/lib/authMiddleware";

export const POST = withAuth(async (req: NextRequest) => {
  try {
    const formData = await req.formData();
    const file: File | null = formData.get("file") as unknown as File;

    if (!file) {
      return NextResponse.json(
        { success: false, message: "No file uploaded" },
        { status: 400 },
      );
    }

    const fileName = `${uuidv4()}_${file.name}`;
    const blob = await put(fileName, file, { access: "public" });

    return NextResponse.json({
      success: true,
      url: blob.url,
    });
  } catch (error) {
    console.error("Upload failed:", error);
    return NextResponse.json(
      { success: false, message: "Upload error" },
      { status: 500 },
    );
  }
});
