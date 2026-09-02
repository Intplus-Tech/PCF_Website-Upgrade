

"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/brand/Logo";
import { Container } from "@/components/layout/Container";
import { PlanVisitPanel } from "@/components/layout/PlanVisitPanel";
import { mainNav, site } from "@/lib/config/site";
import { cn } from "@/lib/utils";
import type { ChurchEvent } from "@/types";

function Caret({ open = false }: { open?: boolean }) {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden
      className={cn("transition-transform", open && "rotate-180")}>
      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

export function SiteHeader({ events }: { events: ChurchEvent[] }) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const overlayPages = ["/about", "/visit", "/events", "/media", "/ministries", "/contact", "/give"];
  const overlay =
    pathname === "/" || overlayPages.some((p) => pathname.startsWith(p));
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={cn(
        "z-50 text-cream-50",
        isHome && "pt-14",
        overlay ? "absolute inset-x-0 top-0" : "sticky top-0 bg-wine-900 shadow-sm",
      )}
    >
      {/* ---- Top utility bar: "Plan Your Visit" (pinned to top, home only) ---- */}
      {isHome && (
        <div
          style={{ backgroundColor: "#6C1317" }}
          className="fixed inset-x-0 top-0 z-[60] border-b border-cream-50/10"
        >
          <Container>
            <div className="flex h-14 items-center justify-center">
              <PlanVisitPanel events={events} />
            </div>
          </Container>
        </div>
      )}

      {/* ---- Main nav: tabs sit inside the hero ---- */}
      <Container>
        <div className="flex min-h-[5rem] items-center justify-between lg:h-36">
          <Link href="/" aria-label={site.name} className="lg:-ml-20">
            <span className="block lg:hidden">
              <Logo size={140} />
            </span>
            <span className="hidden lg:block">
              <Logo size={250} />
            </span>
          </Link>

          {/* Desktop tabs — no dropdowns; every item is a plain tab */}
          <nav className="hidden items-center gap-1 lg:-mt-14 lg:flex">
            {mainNav.map((item) => (
              <div key={item.href} className="relative">
                <Link href={item.href}
                  className={cn("px-4 py-2 text-lg font-medium transition-colors",
                    isActive(item.href) ? "text-cream-50" : "text-cream-50/80 hover:text-cream-50")}>
                  {item.label}
                </Link>
                {isActive(item.href) && (
                  <span className="absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full bg-wine-500" />
                )}
              </div>
            ))}
          </nav>

          {/* Donate + mobile toggle */}
          <div className="flex items-center gap-3 lg:-mt-14">
             <Link href="/give"
              className={cn(
                "hidden rounded-xl px-6 py-2.5 text-sm font-semibold text-cream-50 transition-colors sm:inline-flex",
                isActive("/give") ? "bg-wine-500" : "bg-wine-600 hover:bg-wine-500",
              )}>
              Give
            </Link>
            <button
              className="inline-flex h-11 w-11 items-center justify-center rounded-full text-cream-50 lg:hidden"
              onClick={() => setMobileOpen((v) => !v)} aria-label="Toggle menu" aria-expanded={mobileOpen}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                {mobileOpen
                  ? <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" />
                  : <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" />}
              </svg>
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="bg-wine-900 lg:hidden">
          <Container className="py-4">
            <nav className="flex flex-col gap-1">
              {mainNav.map((item) => (
                <div key={item.href}>
                  <Link href={item.href} onClick={() => setMobileOpen(false)}
                    className={cn("block rounded-lg px-3 py-2.5 text-sm font-medium",
                      isActive(item.href) ? "bg-cream-50/10 text-cream-50" : "text-cream-50/80")}>
                    {item.label}
                  </Link>
                </div>
              ))}
               <Link href="/give" onClick={() => setMobileOpen(false)}
              className="mt-3 inline-flex items-center justify-center rounded-full bg-wine-600 px-6 py-2.5 text-sm font-semibold text-cream-50">
              Give
            </Link>
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
}