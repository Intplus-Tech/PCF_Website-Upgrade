"use client";

import { useState, useEffect } from "react";

const DEFAULT_PHRASES = [
  "Worship Inspires",
  "Every Generation Belongs",
  "Worship Becomes a Lifestyle",
  "Your Family Will Gather, Grow and Go Forth",
];

export function RotatingHeadline({
  prefix = "A Place Where",
  phrases,
}: {
  prefix?: string;
  phrases?: string[];
}) {
  const list = phrases && phrases.length > 0 ? phrases : DEFAULT_PHRASES;
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let swap: ReturnType<typeof setTimeout>;
    const cycle = setInterval(() => {
      setVisible(false);
      swap = setTimeout(() => {
        setIndex((i) => (i + 1) % list.length);
        setVisible(true);
      }, 500);
    }, 3500);

    return () => {
      clearInterval(cycle);
      clearTimeout(swap);
    };
  }, [list.length]);

  return (
     <h1 className="max-w-4xl font-body text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
      {prefix}{" "}
      <span
        className={`inline-block transition-opacity duration-500 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      >
        {list[index]}.
      </span>
    </h1>
  );
}