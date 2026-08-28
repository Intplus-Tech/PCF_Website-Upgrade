"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "../motion/Reveal";
import { parseLocalDate } from "@/lib/recurrence";
import type { GetInvolvedCardData } from "@/lib/api";

function CalendarIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3" y="4" width="18" height="17" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="M3 9h18M8 2v4M16 2v4" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}
function ClockIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
      <path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

export function GetInvolved({ cards }: { cards: GetInvolvedCardData[] }) {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "prev" | "next") => {
    const el = trackRef.current;
    if (!el) return;
    const amount = el.clientWidth / 4 + 41;
    el.scrollBy({ left: dir === "next" ? amount : -amount, behavior: "smooth" });
  };

  if (!cards || cards.length === 0) return null;

  return (
    <section className="py-20">
      <Container size="full">
        {/* Heading + arrows — arrows align to the right edge (= last card's right edge) */}
        <div className="flex items-end justify-between gap-4">
          <Reveal>
            <SectionHeading
              title="Be Part of What God is Doing"
              className="[&_h2]:text-4xl [&_h2]:lg:text-5xl"
            />
          </Reveal>
          <Reveal delay={0.2}>
            <div className="hidden shrink-0 gap-2 sm:flex">
              <button
                onClick={() => scroll("prev")}
                aria-label="Previous"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-wine-700/20 text-wine-700 transition-colors hover:bg-wine-700 hover:text-cream-50"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                onClick={() => scroll("next")}
                aria-label="Next"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-wine-700/20 text-wine-700 transition-colors hover:bg-wine-700 hover:text-cream-50"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </Reveal>
        </div>

        {/* Scrollable track — 4 cards fill the width, carousel on smaller screens */}
        <div
          ref={trackRef}
          className="mt-12 flex snap-x snap-mandatory gap-[40.91px] overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {cards.map((card, i) => {
            const d = parseLocalDate(card.date);
            const validDate = !isNaN(d.getTime());
            const month = validDate
              ? d.toLocaleDateString("en-GB", { month: "short" }).toUpperCase()
              : "";
            const dateNum = validDate ? d.getDate() : "";
            const weekday = validDate
              ? d.toLocaleDateString("en-GB", { weekday: "long" })
              : "";

            return (
              <Reveal
                key={card.id}
                delay={i * 0.12}
                className="group flex min-h-[540px] w-[85%] shrink-0 snap-start flex-col overflow-hidden rounded-[8.98px] border-[0.75px] border-[#C0C9C14D] bg-white pb-[1.5px] shadow-sm transition-shadow hover:shadow-md sm:w-[calc(50%-20px)] lg:w-[calc(25%-30.68px)]"
              >
                <div className="shine relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={card.image || "/morning-worship.png"}
                    alt={card.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 85vw, 25vw"
                  />
                  {validDate && (
                    <div className="absolute right-3 top-3 flex flex-col items-center rounded-lg bg-cream-50 px-2.5 py-1 text-center shadow-md">
                      <span className="text-[10px] font-semibold uppercase tracking-wide text-wine-600">{month}</span>
                      <span className="text-lg font-bold leading-none text-ink">{dateNum}</span>
                    </div>
                  )}
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <div className="flex flex-wrap items-center gap-2">
                    {weekday && (
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-wine-700/8 px-2.5 py-1 text-[11px] font-medium uppercase tracking-wide text-wine-700">
                        <CalendarIcon />
                        {weekday}
                      </span>
                    )}
                    {card.time && (
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-wine-700/8 px-2.5 py-1 text-[11px] font-medium uppercase tracking-wide text-wine-700">
                        <ClockIcon />
                        {card.time}
                      </span>
                    )}
                  </div>

                  <h3 className="mt-3 text-xl font-bold leading-snug text-[#000000]">{card.title}</h3>
                  <p className="mt-2 flex-1 text-[15px] leading-relaxed text-muted">{card.description}</p>

                  <Link
                    href="/events"
                    className="mt-5 inline-flex w-fit rounded-lg bg-wine-700 px-4 py-2 text-sm font-medium text-cream-50 transition-colors hover:bg-wine-800"
                  >
                    Learn more
                  </Link>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
