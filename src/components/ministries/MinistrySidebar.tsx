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
  // The clicked (selected) card expands; default to the active page's ministry
  const [selected, setSelected] = useState(activeSlug);

  return (
  <aside className="flex flex-col gap-4 lg:h-full">
      {ministries.map((m) => {
        const isSelected = m.slug === selected;
        return (
          <button
            key={m.slug}
            onClick={() => {
              setSelected(m.slug);
              router.push(`/ministries/${m.slug}`);
            }}
            className={`group relative block w-full overflow-hidden rounded-xl transition-all duration-300 ${
  isSelected ? "flex-[2.5]" : "flex-1"
} min-h-[90px]`}
           
          >
            <Image
              src={m.image}
              alt={m.name}
              fill
              className="object-cover"
              sizes="300px"
            />
            {/* Selected = lighter overlay; others = darker */}
            <div
              className={`absolute inset-0 transition-colors ${
                isSelected
                  ? "bg-wine-900/25"
                  : "bg-wine-900/70 group-hover:bg-wine-900/55"
              }`}
            />
            <span className="absolute inset-0 flex items-center justify-center text-xl font-semibold text-cream-50">
              {m.name}
            </span>
          </button>
        );
      })}
    </aside>

  );
}