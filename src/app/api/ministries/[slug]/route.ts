import { NextResponse } from "next/server";
import { ministries } from "@/lib/data/ministries";

// GET /api/ministries/:slug — single ministry (dummy data).
export async function GET(
  _req: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  const ministry = ministries.find((m) => m.slug === slug);
  if (!ministry) {
    return NextResponse.json({ error: "Ministry not found" }, { status: 404 });
  }
  return NextResponse.json({ data: ministry });
}
