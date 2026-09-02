"use client";

import { useEffect, useState } from "react";
import { privacyIntro, privacySections } from "@/lib/config/privacy";

export function PrivacyPolicyModal() {
  const [open, setOpen] = useState(false);

  // Close on Escape, and stop the page scrolling behind the modal.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="underline transition-colors hover:text-wine-900"
      >
        Privacy Policy
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Privacy Policy"
        >
          <div
            className="flex max-h-[88vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl bg-white text-left shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header — stays put while the body scrolls */}
            <div className="flex items-start justify-between gap-4 border-b border-ink/10 bg-white px-6 py-5 sm:px-9">
              <div>
                <h2 className="font-body text-2xl font-extrabold tracking-tight text-wine-800 sm:text-3xl">
                  Privacy Policy
                </h2>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted">
                  Peoples Church Falkirk
                </p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close"
                className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-ink/60 transition-colors hover:bg-ink/5 hover:text-ink"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" />
                </svg>
              </button>
            </div>

            {/* Body */}
            <div className="overflow-y-auto px-6 py-6 sm:px-9 sm:py-8">
              <p className="text-sm leading-relaxed text-ink/80">{privacyIntro}</p>

              <div className="mt-8 space-y-8">
                {privacySections.map((section) => (
                  <section key={section.heading}>
                    <h3 className="font-body text-base font-bold text-wine-800 sm:text-lg">
                      {section.heading}
                    </h3>

                    {section.intro && (
                      <p className="mt-2 text-sm leading-relaxed text-ink/80">
                        {section.intro}
                      </p>
                    )}

                    {section.bullets && (
                      <ul className="mt-3 space-y-2">
                        {section.bullets.map((b) => (
                          <li
                            key={b}
                            className="flex items-start gap-3 text-sm leading-relaxed text-ink/80"
                          >
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-wine-700" />
                            {b}
                          </li>
                        ))}
                      </ul>
                    )}

                    {section.outro && (
                      <p className="mt-3 text-sm leading-relaxed text-ink/80">
                        {section.outro}
                      </p>
                    )}
                  </section>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="border-t border-ink/10 bg-[#F5F5F5] px-6 py-4 text-right sm:px-9">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="inline-flex rounded-lg bg-wine-800 px-6 py-2.5 text-sm font-semibold text-cream-50 transition-colors hover:bg-wine-700"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
