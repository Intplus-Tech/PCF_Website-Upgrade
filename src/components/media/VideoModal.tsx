"use client";

import { useState } from "react";

export function VideoModal({
  label = "Watch Our Video",
  poster,
  videoSrc,
}: {
  label?: string;
  poster: string;
  videoSrc?: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="group/card block w-full overflow-hidden rounded-xl bg-cream-50 p-2 text-left shadow-xl"
      >
        <div className="relative aspect-video overflow-hidden rounded-lg">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={poster} alt={label} className="h-full w-full object-cover" />
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-cream-50/90 text-wine-700 shadow-md transition-transform group-hover/card:scale-110">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
            </span>
          </span>
        </div>
        <p className="py-3 text-center text-lg font-medium text-ink">{label}</p>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4"
          onClick={() => setOpen(false)}
        >
          <div className="relative w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setOpen(false)}
              className="absolute -top-10 right-0 text-cream-50"
              aria-label="Close"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" /></svg>
            </button>
            <div className="aspect-video overflow-hidden rounded-lg bg-black">
              {videoSrc ? (
                <video src={videoSrc} controls autoPlay className="h-full w-full" />
              ) : (
                <div className="flex h-full items-center justify-center text-cream-50/70">
                  Video coming soon
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}