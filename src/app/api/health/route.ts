import { NextResponse } from "next/server";

// GET /api/health — simple readiness check
export async function GET() {
  return NextResponse.json({ status: "ok", time: new Date().toISOString() });
}
