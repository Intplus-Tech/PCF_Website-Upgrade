"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import type { Ministry } from "@/types";

export function MinistrySidebar({
  ministries,
  activeSlug,
}: {
  ministries: Ministry[];
  activeSlug: string;
}) {
  const router = useRouter();
  const [selected, setSelected] = useState(activeSlug);

  const handleClick = (slug: string) => {
    setSelected(slug);
    router.push(`/ministries/${slug}`);
    // After navigation, scroll to the content section so the user doesn't land on the hero
    setTimeout(() => {
      document.getElementById("ministry-content")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  };

  return (
    <aside className="flex flex-col gap-4 lg:h-full">
      {ministries.map((m) => {
        const isSelected = m.slug === selected;
        return (
          <button
            key={m.slug}
            onClick={() => handleClick(m.slug)}
            className={`group relative block h-24 w-full overflow-hidden rounded-xl transition-all duration-300 lg:h-auto lg:min-h-[90px] ${
              isSelected ? "lg:flex-[2.5]" : "lg:flex-1"
            }`}
          >
            <Image
              src={m.image}
              alt={m.name}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 360px"
            />
            <div
              className={`absolute inset-0 transition-colors ${
                isSelected
                  ? "bg-wine-900/25"
                  : "bg-wine-900/70 group-hover:bg-wine-900/55"
              }`}
            />
            <span className="absolute inset-0 flex items-center justify-center text-lg font-semibold text-cream-50 sm:text-xl">
              {m.name}
            </span>
          </button>
        );
      })}
    </aside>
  );
}