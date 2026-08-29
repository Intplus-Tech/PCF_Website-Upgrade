"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { HEARD_ABOUT_OPTIONS, field, select } from "@/components/forms/formStyles";

type Status = "idle" | "sending" | "sent" | "error";

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
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <input name="first_name" required placeholder="First name" className={field} aria-label="First name" />
        <input name="last_name" required placeholder="Last name" className={field} aria-label="Last name" />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <input name="email" type="email" required placeholder="Email" className={field} aria-label="Email" />
        <input name="phone" type="tel" placeholder="Phone Number" className={field} aria-label="Phone number" />
      </div>

      <select name="source" defaultValue="" className={select} aria-label="How did you hear about us?">
        <option value="" disabled>How did you hear about us?</option>
        {HEARD_ABOUT_OPTIONS.map((s) => (
          <option key={s} value={s}>{s}</option>
        ))}
      </select>

      <textarea
        name="message"
        required
        rows={5}
        placeholder="Write message..."
        className={field}
        aria-label="Message"
      />

      <div className="flex flex-wrap items-center gap-4 pt-2">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center gap-3 rounded-lg bg-wine-800 px-7 py-3 text-sm font-semibold text-cream-50 transition-colors hover:bg-wine-700 disabled:opacity-60"
        >
          {status === "sending" ? "Sending…" : "Send Message"}
          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M2 21l21-9L2 3v7l15 2-15 2z" />
          </svg>
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
