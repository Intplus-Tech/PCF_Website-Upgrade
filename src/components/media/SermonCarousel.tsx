"use client";

import { useRef } from "react";
import Image from "next/image";
import type { Sermon } from "@/types";
import { Reveal } from "@/components/motion/Reveal";
import { RevealText } from "@/components/motion/RevealText";

export function SermonCarousel({ sermons }: { sermons: Sermon[] }) {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "prev" | "next") => {
    const el = trackRef.current;
    if (!el) return;
    const amount = el.clientWidth / 3 + 24;
    el.scrollBy({ left: dir === "next" ? amount : -amount, behavior: "smooth" });
  };

  return (
    <div>
      <div className="flex items-start justify-between gap-4">
        <Reveal>
          <div>
            <span className="block h-0.5 w-10 bg-ink/70" />
            <h2 className="mt-4 font-body text-4xl font-extrabold leading-tight tracking-tight text-ink sm:text-5xl">
              <RevealText text="Your Sermon." />
              <br />
              <RevealText text="Your Moment." />
            </h2>
          </div>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="hidden shrink-0 gap-2 sm:flex">
            <button onClick={() => scroll("prev")} aria-label="Previous"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-cream-100 text-ink transition-colors hover:bg-wine-700 hover:text-cream-50">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
            <button onClick={() => scroll("next")} aria-label="Next"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-cream-100 text-ink transition-colors hover:bg-wine-700 hover:text-cream-50">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
          </div>
        </Reveal>
      </div>

      <div ref={trackRef} className="mt-10 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {sermons.map((s, i) => (
          <Reveal
            key={s.id}
            delay={i * 0.15}
            className="flex w-[85%] shrink-0 snap-start flex-col overflow-hidden rounded-xl border border-ink/10 bg-cream-50 sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
          >
            <div className="shine relative aspect-[4/3] overflow-hidden">
              <Image src={s.image} alt={s.title} fill className="object-cover" sizes="33vw" />
            </div>
            <div className="flex flex-1 flex-col p-5">
              <div className="flex items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-wine-700/8 px-2.5 py-1 text-[11px] font-medium uppercase text-wine-700">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2"/><path d="M4 20c0-4 4-6 8-6s8 2 8 6" stroke="currentColor" strokeWidth="2"/></svg>
                  {s.speaker}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-wine-700/8 px-2.5 py-1 text-[11px] font-medium uppercase text-wine-700">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/><path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="2"/></svg>
                  {s.ago}
                </span>
              </div>
              <h3 className="mt-3 text-xl font-bold text-ink">{s.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{s.text}</p>
              <button className="mt-5 inline-flex w-fit items-center gap-2 rounded-md bg-wine-800 px-4 py-2 text-sm font-semibold text-cream-50 transition-colors hover:bg-wine-700">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
                Watch Now
              </button>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}