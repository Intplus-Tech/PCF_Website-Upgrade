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
    <aside className="flex flex-col gap-4">
      {ministries.map((m) => {
        const isSelected = m.slug === selected;
        return (
          <button
            key={m.slug}
            onClick={() => handleClick(m.slug)}
            className={`group relative block w-full shrink-0 overflow-hidden rounded-xl transition-all duration-300 ${
              isSelected ? "h-32 lg:h-40" : "h-24 lg:h-28"
            }`}
          >
             <Image
                src={m.image || "/ministries-banner.jpg"}
                alt={m.name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 420px"
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