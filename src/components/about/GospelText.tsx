"use client";

import { useState } from "react";

export function GospelText() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink">
        Work of the Church
      </p>
      <h2 className="mt-4 font-body text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl">
        We Preach the Gospel in Every Sermon
      </h2>
      <p className="mt-4 text-[15px] leading-relaxed text-muted">
        Qadipiscing elit, sed do eiusmod tempor incididunt ut labore eli
        sed do eiu.
      </p>
      <blockquote className="mt-6 border-l-2 border-wine-700 pl-4 text-sm leading-relaxed text-muted/80">
        Adipiscing elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco.
      </blockquote>

      {/* Extra text — revealed when "Learn More" is clicked */}
      <div
        className={`grid transition-all duration-500 ease-in-out ${
          expanded ? "mt-4 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-[15px] leading-relaxed text-muted">
            At Peoples Church Falkirk, every message is rooted in scripture and
            delivered with clarity and heart. We believe the gospel changes
            lives, so we preach it faithfully — challenging, encouraging, and
            equipping our community to grow in faith week after week.
          </p>
          <p className="mt-3 text-[15px] leading-relaxed text-muted">
            Whether you&apos;re exploring faith for the first time or have walked
            with God for years, you&apos;ll find teaching that meets you where you
            are and points you toward Christ.
          </p>
        </div>
      </div>

      <button
        onClick={() => setExpanded((v) => !v)}
        className="mt-6 inline-flex items-center gap-2 rounded-md bg-wine-800 px-5 py-2.5 text-sm font-semibold text-cream-50 transition-colors hover:bg-wine-700"
      >
        {expanded ? "Show Less" : "Learn More"}
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          className={`transition-transform ${expanded ? "rotate-180" : ""}`}
          aria-hidden
        >
          <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" />
        </svg>
      </button>
    </div>
  );
}