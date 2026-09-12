"use client";

import { useState } from "react";
import Image from "next/image";

const FALLBACK_IMAGE = "/media-pics.png";

function chunk<T>(items: T[], size: number): T[][] {
  const out: T[][] = [];
  for (let i = 0; i < items.length; i += size) out.push(items.slice(i, i + size));
  return out;
}

export function MemoriesCarousel({ memories }: { memories: string[] }) {
  const slides = chunk(memories, 4);
  const [index, setIndex] = useState(0);

  if (slides.length === 0) return null;

  const slide = slides[index] ?? [];
  const hasMore = slides.length > 1;

  // Position classes for the four collage slots (desktop only).
  const slot = [
    "sm:col-span-2 sm:row-span-2",
    "sm:col-span-1",
    "sm:col-span-1",
    "sm:col-span-2",
  ];

  const go = (dir: -1 | 1) =>
    setIndex((i) => (i + dir + slides.length) % slides.length);

  return (
    <div className="relative">
      <div className="grid grid-cols-1 gap-4 sm:auto-rows-[180px] sm:grid-cols-4 lg:auto-rows-[230px]">
        {slide.map((src, i) => (
          <div
            key={`${index}-${i}`}
            className={`shine relative h-52 overflow-hidden rounded-xl sm:h-auto ${
              slot[i] ?? "sm:col-span-1"
            }`}
          >
            <Image
              src={src || FALLBACK_IMAGE}
              alt={`Church memory ${i + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
            />
          </div>
        ))}
      </div>

      {hasMore && (
        <>
          {/* Arrows — sit beside the collage on desktop, below it on mobile */}
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Previous memories"
            className="absolute -left-2 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white text-ink shadow-lg transition hover:bg-cream-50 lg:flex lg:-left-6"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="More memories"
            className="absolute -right-2 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white text-ink shadow-lg transition hover:bg-cream-50 lg:flex lg:-right-6"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* Dots + mobile arrows */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous memories"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-ink shadow-md transition hover:bg-cream-50 lg:hidden"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <div className="flex items-center gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`Show memories ${i + 1}`}
                  aria-current={i === index ? "true" : undefined}
                  className={`h-2 rounded-full transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-wine-700 focus-visible:ring-offset-2 ${
                    i === index ? "w-7 bg-wine-700" : "w-2 bg-ink/25 hover:bg-ink/40"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => go(1)}
              aria-label="More memories"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-ink shadow-md transition hover:bg-cream-50 lg:hidden"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </>
      )}
    </div>
  );
}
