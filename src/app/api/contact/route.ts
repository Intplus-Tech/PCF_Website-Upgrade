import { NextResponse } from "next/server";
import type { ContactPayload } from "@/types";

// POST /api/contact — accepts a contact form submission.
// For now it validates and echoes success. Backend engineer: wire this
// to email/CRM/database when ready.
export async function POST(req: Request) {
  let body: Partial<ContactPayload>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const name = body.name?.trim();
  const email = body.email?.trim();
  const message = body.message?.trim();

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Please fill in your name, email, and message." },
      { status: 422 },
    );
  }

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!emailOk) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 422 },
    );
  }

  // TODO(backend): persist / forward the message here.
  return NextResponse.json({
    ok: true,
    message: "Thank you! Your message has been received — we'll be in touch soon.",
  });
}
