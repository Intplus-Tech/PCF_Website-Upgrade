"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { GetInvolvedCardData } from "@/lib/api";
import { parseLocalDate } from "@/lib/recurrence";

const FALLBACK_IMAGE = "/media-pics.png";

function monthLabel(iso: string) {
  const d = parseLocalDate(iso);
  if (Number.isNaN(d.getTime())) return "";
  return d.toLocaleDateString("en-GB", { month: "short" }).toUpperCase();
}

function dayLabel(iso: string) {
  const d = parseLocalDate(iso);
  if (Number.isNaN(d.getTime())) return "";
  return String(d.getDate());
}

/**
 * "SUNDAY MORNING" / "SUNDAY EVENING" / "TUESDAY" — Sunday gets a
 * morning/evening suffix because there are two Sunday services.
 */
function serviceLabel(iso: string, time: string) {
  const d = parseLocalDate(iso);
  if (Number.isNaN(d.getTime())) return "";
  const weekday = d.toLocaleDateString("en-GB", { weekday: "long" }).toUpperCase();
  if (weekday !== "SUNDAY") return weekday;
  return /pm/i.test(time) ? `${weekday} EVENING` : `${weekday} MORNING`;
}

function CalIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden className="shrink-0">
      <rect x="3" y="4" width="18" height="17" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="M3 9h18M8 2v4M16 2v4" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden className="shrink-0">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
      <path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

/** How many cards are visible at the current breakpoint. */
function usePerView() {
  const [perView, setPerView] = useState(4);

  useEffect(() => {
    const sm = window.matchMedia("(min-width: 640px)");
    const lg = window.matchMedia("(min-width: 1024px)");

    const update = () => setPerView(lg.matches ? 4 : sm.matches ? 2 : 1);

    update();
    sm.addEventListener("change", update);
    lg.addEventListener("change", update);
    return () => {
      sm.removeEventListener("change", update);
      lg.removeEventListener("change", update);
    };
  }, []);

  return perView;
}

export function SermonsGrid({
  cards,
  learnMoreHref = "/events",
}: {
  cards: GetInvolvedCardData[];
  learnMoreHref?: string;
}) {
  const perView = usePerView();
  const [index, setIndex] = useState(0);

  const maxIndex = Math.max(0, cards.length - perView);

  useEffect(() => {
    setIndex((i) => Math.min(i, Math.max(0, cards.length - perView)));
  }, [perView, cards.length]);

  if (cards.length === 0) {
    return (
      <p className="mt-8 text-sm text-muted">
        Sermons will appear here once they&apos;ve been added.
      </p>
    );
  }

  return (
    <>
      {/* Header row — title left, arrows right */}
      <div className="flex items-end justify-between gap-6">
        <div>
          <span className="block h-0.5 w-20 bg-ink/70" />
          <h2 className="mt-5 font-body text-3xl font-extrabold tracking-tight text-ink sm:text-5xl">
            Sermons
          </h2>
        </div>

        {maxIndex > 0 && (
          <div className="flex shrink-0 items-center gap-3">
            <button
              type="button"
              onClick={() => setIndex((i) => Math.max(0, i - 1))}
              disabled={index === 0}
              aria-label="Previous"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-ink shadow-md transition hover:bg-cream-50 disabled:opacity-40 sm:h-14 sm:w-14"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => setIndex((i) => Math.min(maxIndex, i + 1))}
              disabled={index === maxIndex}
              aria-label="Next"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-ink shadow-md transition hover:bg-cream-50 disabled:opacity-40 sm:h-14 sm:w-14"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        )}
      </div>

      {/* Sliding track */}
      <div className="mt-10 overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${index * (100 / perView)}%)` }}
        >
          {cards.map((card) => {
            const month = monthLabel(card.date);
            const day = dayLabel(card.date);
            const label = serviceLabel(card.date, card.time);

            return (
              <div key={card.id} className="w-full shrink-0 px-3 sm:w-1/2 lg:w-1/4">
                <article className="flex h-full flex-col overflow-hidden rounded-xl bg-white shadow-sm">
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={card.image || card.eventsImage || FALLBACK_IMAGE}
                      alt={card.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    {month && (
                      <span className="absolute right-3 top-3 flex flex-col items-center rounded-md bg-white px-2.5 py-1.5 leading-none shadow-md">
                        <span className="text-[10px] font-semibold tracking-[0.12em] text-ink/70">
                          {month}
                        </span>
                        <span className="mt-0.5 text-base font-bold text-ink">{day}</span>
                      </span>
                    )}
                  </div>

                  <div className="flex flex-1 flex-col p-5">
                    {(label || card.time) && (
                      <div className="flex flex-wrap items-center justify-between gap-2 text-[10px] font-semibold uppercase tracking-wide text-wine-700">
                        {label && (
                          <span className="inline-flex items-center gap-1.5">
                            <CalIcon />
                            {label}
                          </span>
                        )}
                        {card.time && (
                          <span className="inline-flex items-center gap-1.5">
                            <ClockIcon />
                            {card.time}
                          </span>
                        )}
                      </div>
                    )}

                    <h3 className="mt-3 font-body text-lg font-extrabold leading-snug tracking-tight text-ink">
                      {card.title}
                    </h3>

                    {card.description && (
                      <p className="mt-3 text-sm leading-relaxed text-muted">
                        {card.description}
                      </p>
                    )}

                    <div className="mt-auto pt-6">
                      <Link
                        href={learnMoreHref}
                        className="inline-flex rounded-md bg-wine-800 px-5 py-2.5 text-xs font-semibold text-cream-50 transition-colors hover:bg-wine-700"
                      >
                        Learn more
                      </Link>
                    </div>
                  </div>
                </article>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
