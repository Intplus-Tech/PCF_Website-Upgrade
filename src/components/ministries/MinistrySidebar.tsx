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
    setTimeout(() => {
      document.getElementById("ministry-content")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  };

  return (
    <aside
      className="-mx-4 flex gap-3 overflow-x-auto px-4 pb-2 sm:mx-0 sm:px-0 lg:flex-col lg:gap-4 lg:overflow-visible lg:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      aria-label="Ministries"
    >
      {ministries.map((m) => {
        const isSelected = m.slug === selected;
        return (
          <button
            key={m.slug}
            onClick={() => handleClick(m.slug)}
            aria-current={isSelected ? "true" : undefined}
            className={`group relative w-44 shrink-0 overflow-hidden rounded-xl transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-wine-700 focus-visible:ring-offset-2 sm:w-56 lg:w-full ${
              isSelected ? "h-24 lg:h-40" : "h-20 lg:h-28"
            }`}
          >
            <Image
              src={m.image || "/ministries-banner.jpg"}
              alt={m.name}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 224px, 420px"
            />
            <div
              className={`absolute inset-0 transition-colors ${
                isSelected
                  ? "bg-wine-900/25"
                  : "bg-wine-900/70 group-hover:bg-wine-900/55"
              }`}
            />
            <span className="absolute inset-0 flex items-center justify-center px-3 text-center text-sm font-semibold text-cream-50 sm:text-base lg:text-lg">
              {m.name}
            </span>
          </button>
        );
      })}
    </aside>
  );
}
