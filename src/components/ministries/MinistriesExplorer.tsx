"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { MinistrySidebar } from "@/components/ministries/MinistrySidebar";
import { Reveal } from "@/components/motion/Reveal";
import type { Ministry } from "@/types";

/**
 * Sanity text fields keep line breaks, but HTML collapses them — so a
 * description typed as several paragraphs renders as one block. Split on blank
 * lines (or single newlines) and render each as its own <p>.
 */
function toParagraphs(text: string): string[] {
  if (!text) return [];
  return text
    .split(/\n\s*\n|\n/)
    .map((t) => t.trim())
    .filter(Boolean);
}

function CheckIcon() {
  return (
    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-wine-700 text-cream-50">
      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="3" />
      </svg>
    </span>
  );
}

function PillIcon({ index }: { index: number }) {
  const common = { width: 15, height: 15, viewBox: "0 0 24 24", fill: "none", "aria-hidden": true, className: "shrink-0" } as const;

  if (index === 0) {
    return (
      <svg {...common}>
        <path d="M12 21s7-6.3 7-11a7 7 0 1 0-14 0c0 4.7 7 11 7 11z" stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="2" />
      </svg>
    );
  }
  if (index === 1) {
    return (
      <svg {...common}>
        <rect x="3" y="4" width="18" height="17" rx="2" stroke="currentColor" strokeWidth="2" />
        <path d="M3 9h18M8 2v4M16 2v4" stroke="currentColor" strokeWidth="2" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
      <path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

export function MinistriesExplorer({
  ministries,
  initialSlug,
}: {
  ministries: Ministry[];
  initialSlug: string;
}) {
  const [activeSlug, setActiveSlug] = useState(initialSlug);
  const ministry =
    ministries.find((m) => m.slug === activeSlug) ?? ministries[0];

  if (!ministry) return null;

  function handleSelect(slug: string) {
    setActiveSlug(slug);
    // Keep the address bar in step without triggering a navigation.
    window.history.replaceState(null, "", `/ministries/${slug}`);
  }

  return (
    <section id="ministry-content" className="scroll-mt-24 bg-[#FFFFFF] py-10 sm:py-14 lg:py-20">
      <Container
        size="wide"
        className="grid max-w-[95rem] items-start gap-6 px-4 sm:px-6 lg:grid-cols-[420px_1fr] lg:gap-8 lg:px-8"
      >
        {/*
          min-w-0 lets the sidebar scroll horizontally on mobile instead of
          forcing the grid track wider than the viewport. On desktop the sidebar
          is sticky and scrolls with the page — no nested scroll area.
        */}
        <div className="min-w-0 lg:sticky lg:top-24 lg:h-[820px] lg:overflow-y-auto lg:overscroll-contain lg:pr-3 lg:[scrollbar-color:rgb(110_20_35_/_0.4)_transparent] lg:[scrollbar-width:thin] lg:[&::-webkit-scrollbar-thumb]:rounded-full lg:[&::-webkit-scrollbar-thumb]:bg-wine-700/40 lg:[&::-webkit-scrollbar-thumb:hover]:bg-wine-700/60 lg:[&::-webkit-scrollbar-track]:bg-ink/5 lg:[&::-webkit-scrollbar]:w-2">
          <MinistrySidebar
            ministries={ministries}
            activeSlug={activeSlug}
            onSelect={handleSelect}
          />
        </div>

        {/* Detail panel — keyed so entrance animations replay on each change */}
        <div
          key={ministry.slug}
          className="flex min-w-0 flex-col rounded-2xl bg-[#F5F5F5] p-5 sm:p-8 lg:min-h-[820px] lg:p-12"
        >
          <Reveal>
            <span className="block h-0.5 w-10 bg-ink/70" />
            <h2 className="mt-4 font-body text-2xl font-extrabold tracking-tight text-ink sm:text-4xl lg:text-5xl">
              {ministry.name}
            </h2>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-4 space-y-4 text-base leading-relaxed text-muted sm:mt-5 sm:text-lg lg:text-xl">
              {toParagraphs(ministry.description).map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </Reveal>

          {ministry.infoPills && (
            <Reveal delay={0.25}>
              <div className="mt-6 flex w-full flex-wrap gap-2">
                {ministry.infoPills.map((pill, i) => (
                  <span
                    key={pill}
                    className="inline-flex items-center gap-2 rounded-full border border-wine-700/30 px-3 py-1.5 text-[10px] font-medium uppercase tracking-wide text-wine-700 sm:px-4 sm:py-2 sm:text-xs"
                  >
                    <PillIcon index={i} />
                    {pill}
                  </span>
                ))}
              </div>
            </Reveal>
          )}

          {/* Join this ministry — opens the contact enquiry form preselected */}
          <Reveal delay={0.3}>
            <div className="mt-7">
              <Link
                href={`/contact?enquiry=join-ministry&ministry=${encodeURIComponent(
                  ministry.name
                )}#enquiry`}
                className="group inline-flex items-center gap-2 rounded-lg bg-wine-700 px-6 py-3 text-sm font-semibold text-cream-50 transition-colors hover:bg-wine-800"
              >
                Join {ministry.name}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="transition-transform group-hover:translate-x-1">
                  <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </Reveal>

          {/* Layout A: checklist */}
          {ministry.layout === "checklist" && (
            <Reveal delay={0.1}>
              <div className="mt-8">
                <h3 className="text-xl font-bold text-ink sm:text-2xl">What To Expect?</h3>
                <ul className="mt-4 space-y-3">
                  {ministry.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-3 text-sm text-ink">
                      <CheckIcon />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          )}

          {/* Layout B: what to expect */}
          {ministry.layout === "expect" && ministry.expect && (
            <Reveal delay={0.1}>
              <div className="mt-8">
                <h3 className="text-lg font-bold text-ink sm:text-xl">What To Expect?</h3>
                <ul className="mt-4 space-y-4">
                  {ministry.expect.map((e) => (
                    <li key={e.title} className="flex items-start gap-3 text-sm text-muted sm:text-base">
                      <CheckIcon />
                      <span>
                        <span className="font-bold text-ink">{e.title}:</span> {e.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          )}

          {/* Layout C: feature cards */}
          {ministry.layout === "cards" && ministry.features && (
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {ministry.features.map((f, i) => (
                <Reveal key={f.title} delay={i * 0.12}>
                  <div className="rounded-xl bg-cream-50 p-5 shadow-sm">
                    <p className="flex items-center gap-2 text-base font-bold text-ink">
                      <span className="flex h-4 w-4 items-center justify-center rounded-full bg-wine-700 text-cream-50">
                        <svg width="9" height="9" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="3"/></svg>
                      </span>
                      {f.title}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{f.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          )}

          {ministry.quote && (
            <Reveal>
              <blockquote className="mt-8 border-l-2 border-wine-700 pl-4 text-sm italic leading-relaxed text-muted">
                {ministry.quote}
              </blockquote>
            </Reveal>
          )}

          {/* Ministry leader — photo, name and the ministries they oversee */}
          {ministry.leaderImage && (
            <Reveal>
              <div className="mt-8">
                <h3 className="mb-4 text-lg font-bold text-ink">
                  Ministry Leader
                </h3>
                <div className="flex items-center gap-5 rounded-xl bg-cream-50 p-5 shadow-sm sm:gap-6 sm:p-6">
                  <div className="shine relative h-24 w-24 shrink-0 overflow-hidden rounded-full sm:h-28 sm:w-28">
                    <Image
                      src={ministry.leaderImage}
                      alt={ministry.leader || `${ministry.name} leader`}
                      fill
                      className="object-cover object-top"
                      sizes="112px"
                    />
                  </div>
                  <div className="min-w-0">
                    {ministry.leader && (
                      <p className="font-body text-lg font-bold text-ink sm:text-xl">
                        {ministry.leader}
                      </p>
                    )}
                    {ministry.leaderRole && (
                      <p className="mt-1 text-sm text-muted sm:text-base">
                        {ministry.leaderRole}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </Reveal>
          )}

          {/* Team photos — only when no leader is set */}
          {!ministry.leaderImage &&
            ministry.team &&
            ministry.team.length > 0 && (
              <Reveal>
                <div className="mt-8">
                  <h3 className="mb-4 text-lg font-bold text-ink">Team Members</h3>
                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
                    {ministry.team.map((src, i) => (
                      <div key={i} className="shine relative aspect-square overflow-hidden rounded-lg">
                        <Image
                          src={src}
                          alt={`Team member ${i + 1}`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            )}

          {/* Single feature image */}
          {ministry.gallery && ministry.gallery.length === 1 && (
            <Reveal>
              <div className="shine relative mt-8 aspect-[16/9] overflow-hidden rounded-xl">
                <Image src={ministry.gallery[0]} alt={ministry.name} fill className="object-cover" sizes="(max-width: 768px) 100vw, 70vw" />
              </div>
            </Reveal>
          )}

          {/* Multi-image gallery */}
          {ministry.gallery && ministry.gallery.length > 1 && (
            <Reveal>
              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
                {ministry.gallery.map((src, i) => (
                  <div key={i} className="shine relative aspect-[3/4] overflow-hidden">
                    <Image
                      src={src}
                      alt={`${ministry.name} ${i + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, 30vw"
                    />
                  </div>
                ))}
              </div>
            </Reveal>
          )}
        </div>
      </Container>
    </section>
  );
}
