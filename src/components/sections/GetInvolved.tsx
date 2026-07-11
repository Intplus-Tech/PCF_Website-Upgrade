"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

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

const getInvolved = [
  {
    title: "MORNING WORSHIP",
    when: "Sunday Morning",
    time: "11:00 AM",
    month: "JUL",
    dateNum: "16",
    text: "Come as you are. Leave with something real — worship that moves you and truth that anchors you.",
    image: "/morning-worship.png",
    href: "/visit",
  },
  {
    title: "GOSPEL CELEBRATION",
    when: "Sunday Evening",
    time: "6:45 PM",
    month: "JUL",
    dateNum: "16",
    text: "Loud worship. Open hearts. One message that transforms lives, families, and communities.",
    image: "/Gospel-cele.png",
    href: "/visit",
  },
  {
    title: "IMPACT – Your Destiny",
    when: "Tuesday",
    time: "7:00 PM",
    month: "JUL",
    dateNum: "16",
    text: "Every person carries a destiny. Discover yours — with people who'll walk the journey with you.",
    image: "/impact-destiny.jpg",
    href: "/ministries",
  },
];

export function GetInvolved() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "prev" | "next") => {
    const el = trackRef.current;
    if (!el) return;
    // scroll by roughly one card width
    const amount = el.clientWidth / 3 + 24;
    el.scrollBy({ left: dir === "next" ? amount : -amount, behavior: "smooth" });
  };

  return (
    <section className="py-20">
      <Container>
        <div className="flex items-end justify-between gap-4">
          <SectionHeading
            // eyebrow="Get Involved"
            title="Get involved in our movement"
              className="[&_h2]:text-4xl [&_h2]:lg:text-5xl"
            // lead="There are many ways to belong. Find the rhythm of church life that fits you and take your next step."
          />
          {/* Prev / Next controls */}
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
        </div>

        {/* Scrollable track */}
        <div
          ref={trackRef}
          className="mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {getInvolved.map((card) => (
            <article
              key={card.title}
              className="group flex w-[85%] shrink-0 snap-start flex-col overflow-hidden rounded-card border border-wine-700/10 bg-cream-50 shadow-sm transition-shadow hover:shadow-md sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 85vw, 33vw"
                />
                <div className="absolute right-3 top-3 flex flex-col items-center rounded-lg bg-cream-50 px-2.5 py-1 text-center shadow-md">
                  <span className="text-[10px] font-semibold uppercase tracking-wide text-wine-600">{card.month}</span>
                  <span className="text-lg font-bold leading-none text-ink">{card.dateNum}</span>
                </div>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-wine-700/8 px-2.5 py-1 text-[11px] font-medium uppercase tracking-wide text-wine-700">
                    <CalendarIcon />
                    {card.when}
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-wine-700/8 px-2.5 py-1 text-[11px] font-medium uppercase tracking-wide text-wine-700">
                    <ClockIcon />
                    {card.time}
                  </span>
                </div>

                <h3 className="mt-3 text-xl font-bold text-[#14422D]">{card.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{card.text}</p>

                <Link
                  href={card.href}
                  className="mt-5 inline-flex w-fit rounded-lg bg-wine-700 px-4 py-2 text-sm font-medium text-cream-50 transition-colors hover:bg-wine-800"
                >
                  Learn more
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}