"use client";

import { useState } from "react";
import Image from "next/image";

const FALLBACK_IMAGE = "/media-picsfour.png";

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

  // Position classes for the four collage slots (desktop only).
  const slot = [
    "sm:col-span-2 sm:row-span-2",
    "sm:col-span-1",
    "sm:col-span-1",
    "sm:col-span-2",
  ];

  return (
    <div>
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

      {slides.length > 1 && (
        <div className="mt-8 flex items-center justify-center gap-2">
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
      )}
    </div>
  );
}
