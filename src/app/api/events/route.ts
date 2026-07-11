import { NextResponse } from "next/server";
import { events } from "@/lib/data/events";

// GET /api/events — returns upcoming events (dummy data for now).
// Backend engineer: replace the body with a real DB query.
export async function GET() {
  return NextResponse.json({ data: events });
}
