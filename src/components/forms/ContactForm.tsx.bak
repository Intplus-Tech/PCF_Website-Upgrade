"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

type Status = "idle" | "sending" | "sent" | "error";

const label = "mb-1.5 block text-sm font-medium text-ink";
const field =
  "w-full rounded-md border border-ink/15 bg-white px-4 py-2.5 text-sm text-ink placeholder:text-muted/60 focus:border-wine-700 focus:outline-none focus:ring-2 focus:ring-wine-700/20";

export function ContactFormFull() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [note, setNote] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setNote("");

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current!,
        { publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY! }
      );
      setStatus("sent");
      setNote("Thank you — your message has been sent. We'll be in touch soon.");
      formRef.current?.reset();
    } catch (err) {
      setStatus("error");
      setNote("Sorry, something went wrong. Please try again or email us directly.");
      console.error("EmailJS error:", err);
    }
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={label}>Full Name</label>
          <input id="name" name="name" required className={field} placeholder="Your name" />
        </div>
        <div>
          <label htmlFor="email" className={label}>Email Address</label>
          <input id="email" name="email" type="email" required className={field} placeholder="example@email.com" />
        </div>
      </div>

      <div>
        <label htmlFor="phone" className={label}>Phone</label>
        <input id="phone" name="phone" className={field} />
      </div>

      <div>
        <label htmlFor="subject" className={label}>Subject</label>
        <input id="subject" name="subject" className={field} />
      </div>

      <div>
        <label htmlFor="message" className={label}>Message</label>
        <textarea id="message" name="message" required rows={5} className={field} placeholder="How can we help you today?" />
      </div>

      <div>
        <label htmlFor="source" className={label}>How Did You Hear About Us?</label>
        <input id="source" name="source" className={field} placeholder="Referral, Google, Social Media, etc" />
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center gap-2 rounded-md bg-wine-800 px-6 py-2.5 text-sm font-semibold text-cream-50 transition-colors hover:bg-wine-700 disabled:opacity-60"
        >
          {status === "sending" ? "Sending…" : "Send Message"}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M2 21l21-9L2 3v7l15 2-15 2z" /></svg>
        </button>
        {note && (
          <p className={status === "error" ? "text-sm text-wine-600" : "text-sm text-wine-700"} role="status">
            {note}
          </p>
        )}
      </div>
    </form>
  );
}