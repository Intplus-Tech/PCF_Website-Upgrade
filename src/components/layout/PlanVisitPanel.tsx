import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import type { ChurchEvent } from "@/types";

function formatEventDate(iso: string) {
  if (!iso) return "";
  const d = new Date(iso);
  const weekday = d.toLocaleDateString("en-GB", { weekday: "long" });
  const day = d.getDate();
  const month = d.toLocaleDateString("en-GB", { month: "long" });
  const suffix =
    day % 10 === 1 && day !== 11 ? "st" :
    day % 10 === 2 && day !== 12 ? "nd" :
    day % 10 === 3 && day !== 13 ? "rd" : "th";
  return `${weekday} ${day}${suffix} ${month}`;
}

export function PlanVisitPanel({ events }: { events: ChurchEvent[] }) {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const primary = events[0];
  const next = events[1];

  useEffect(() => {
    if (!open) return;
    function handleClick(e: MouseEvent) {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  return (
    <div ref={wrapRef} onMouseEnter={() => setOpen(true)}>
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="inline-flex items-center gap-2 rounded-full px-5 py-1.5 text-sm text-cream-50/90 transition-colors hover:border-cream-50/60 hover:text-cream-50"
      >
        Plan Your Visit
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
          className={`transition-transform ${open ? "rotate-180" : ""}`}>
          <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" />
        </svg>
      </button>

      {open && primary && (
        <div
          className="fixed inset-x-0 top-14 z-[70] max-h-[85vh] w-screen overflow-y-auto shadow-2xl"
          style={{ backgroundColor: "#E9E9E9" }}
        >
          <div className="mx-auto flex max-w-[1120px] items-center px-4 py-6 md:px-8">
            <div className="flex w-full flex-col gap-4 md:flex-row md:gap-0">
              {/* Left — next service */}
              <div
                className="flex flex-col justify-center rounded-[12px] md:h-[300px] md:flex-[2] md:rounded-r-none"
                style={{
                  backgroundColor: "#F5F5F5",
                  gap: "16px",
                  paddingTop: "24px",
                  paddingRight: "40px",
                  paddingBottom: "24px",
                  paddingLeft: "40px",
                }}
              >
                <div>
                  <p className="underline" style={{ color: "#414943", fontWeight: 400, lineHeight: "140%" }}>
                    Our Next Service is coming on
                  </p>
                  <p style={{ color: "#170F49", fontWeight: 600, lineHeight: "115%", marginTop: "10px" }} className="font-body text-3xl sm:text-4xl">
                    {formatEventDate(primary.date)}
                  </p>
                  <p style={{ color: "#414943", fontWeight: 400, lineHeight: "150%", marginTop: "4px" }} className="text-lg">
                    {primary.title}
                  </p>
                  <p style={{ color: "#6C1317", fontWeight: 600, lineHeight: "100%", marginTop: "12px" }} className="font-body text-2xl sm:text-3xl">
                    {primary.time}
                  </p>
                </div>
              </div>

              {/* Right — coming up next */}
              {next && (
                <div className="flex justify-center md:flex-[1] md:justify-start">
                  <div
                    className="flex w-full max-w-[372px] flex-col rounded-[12px] md:h-[300px] md:rounded-l-none"
                    style={{
                      backgroundColor: "#FFFFFF",
                      paddingTop: "20px",
                      paddingRight: "24px",
                      paddingBottom: "20px",
                      paddingLeft: "24px",
                      gap: "12px",
                    }}
                  >
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ink/60">
                      Coming Up Next
                    </p>
                    <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg">
                      <Image
                        src={next.image || "/plan-image.png"}
                        alt={next.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 90vw, 300px"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-ink">{formatEventDate(next.date)}</p>
                      <p className="text-sm text-ink/60">{next.title}</p>
                      <p className="mt-1 text-sm text-wine-700">{next.time}</p>
                    </div>
                    <Link href="/events" onClick={() => setOpen(false)} className="mt-auto inline-block text-sm font-medium text-ink underline hover:text-wine-700">
                      View Events
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}