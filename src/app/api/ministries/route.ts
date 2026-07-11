import { NextResponse } from "next/server";
import { ministries } from "@/lib/data/ministries";

// GET /api/ministries — list all ministries (dummy data).
export async function GET() {
  return NextResponse.json({ data: ministries });
}
