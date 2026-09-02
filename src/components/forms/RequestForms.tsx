"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  ENQUIRY_OPTIONS,
  HEARD_ABOUT_OPTIONS,
  MINISTRY_OPTIONS,
  field,
  select,
} from "@/components/forms/formStyles";

type Status = "idle" | "sending" | "sent" | "error";

export function OtherEnquiryForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [note, setNote] = useState("");

  // The ministry field only appears once an enquiry type has been chosen.
  const [enquiryType, setEnquiryType] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setNote("");

    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_ENQUIRY;
    if (!templateId) {
      setStatus("error");
      setNote("This form isn't configured yet. Please email us directly.");
      console.error("Missing NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_ENQUIRY");
      return;
    }

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        templateId,
        formRef.current!,
        { publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY! }
      );
      setStatus("sent");
      setNote("Thank you — your enquiry has been sent. We'll be in touch soon.");
      formRef.current?.reset();
      setEnquiryType("");
    } catch (err) {
      setStatus("error");
      setNote("Sorry, something went wrong. Please try again or email us directly.");
      console.error("EmailJS error:", err);
    }
  }

  return (
    <div>
      <h2 className="font-body text-2xl font-extrabold tracking-tight text-wine-800 sm:text-3xl">
        Other Enquiry
      </h2>
      <p className="mt-2 text-sm text-muted">
        Enquiry about the ministry, Requesting for testimonial or prayer request
      </p>

      <form ref={formRef} onSubmit={handleSubmit} className="mt-8 space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <input name="first_name" required placeholder="First name" className={field} aria-label="First name" />
          <input name="last_name" required placeholder="Last name" className={field} aria-label="Last name" />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <input name="email" type="email" required placeholder="Email" className={field} aria-label="Email" />
          <input name="phone" type="tel" placeholder="Phone Number" className={field} aria-label="Phone number" />
        </div>

        <select
          name="enquiry_type"
          required
          value={enquiryType}
          onChange={(e) => setEnquiryType(e.target.value)}
          className={select}
          aria-label="What you want to enquire about"
        >
          <option value="" disabled>What you want to Enquire?</option>
          {ENQUIRY_OPTIONS.map((o) => (
            <option key={o} value={o}>{o}</option>
          ))}
        </select>

        {/* Revealed only once an enquiry type has been selected */}
        {enquiryType && (
          <select
            name="ministry"
            defaultValue=""
            className={select}
            aria-label="Which ministry are you interested in?"
          >
            <option value="" disabled>Which of the Ministry are your interested in?</option>
            {MINISTRY_OPTIONS.map((m) => (
              <option key={m} value={m}>{m}</option>
            ))}
          </select>
        )}

        <textarea
          name="message"
          required
          rows={5}
          placeholder="Write message..."
          className={field}
          aria-label="Message"
        />

        <select name="source" defaultValue="" className={select} aria-label="How did you hear about us?">
          <option value="" disabled>How did you hear about us?</option>
          {HEARD_ABOUT_OPTIONS.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>

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
    </div>
  );
}
