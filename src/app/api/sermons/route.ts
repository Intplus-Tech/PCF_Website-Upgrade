import { NextResponse } from "next/server";
import { sermons } from "@/lib/data/sermons";

// GET /api/sermons — sermon archive (dummy data).
export async function GET() {
  return NextResponse.json({ data: sermons });
}
