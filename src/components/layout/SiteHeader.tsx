// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { Logo } from "@/components/brand/Logo";
// import { Container } from "@/components/layout/Container";
// import { mainNav, planVisitLinks, site } from "@/lib/config/site";
// import { cn } from "@/lib/utils";

// function Caret({ open = false }: { open?: boolean }) {
//   return (
//     <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden
//       className={cn("transition-transform", open && "rotate-180")}>
//       <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" />
//     </svg>
//   );
// }

// export function SiteHeader() {
//   const pathname = usePathname();
//  const isHome = pathname === "/";
//  const overlayPages = ["/about", "/visit", "/events", "/media", "/ministries", "/contact"];
// const overlay =
//   pathname === "/" || overlayPages.some((p) => pathname.startsWith(p));
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [planOpen, setPlanOpen] = useState(false);

//   const isActive = (href: string) =>
//     href === "/" ? pathname === "/" : pathname.startsWith(href);

//   return (
//    <header
//   className={cn(
//     "z-50 text-cream-50 ",
//      isHome && "pt-14",
//     overlay ? "absolute inset-x-0 top-0" : "sticky top-0 bg-wine-900 shadow-sm",
//   )}

//     >
//       {/* ---- Top utility bar: only "Plan Your Visit" ---- */}
//       {/* ---- Top utility bar: only "Plan Your Visit" (pinned to top) ---- */}
//  {isHome &&  (     
// <div
//   style={{ backgroundColor: "#6C1317" }}
//   className="fixed inset-x-0 top-0 z-[60] border-b border-cream-50/10"
// >
//   <Container>
//     <div className="flex h-14 items-center justify-center" >
//       <div className="relative" onMouseLeave={() => setPlanOpen(false)}>
//         <button
//           onClick={() => setPlanOpen((v) => !v)}
//           onMouseEnter={() => setPlanOpen(true)}
//           aria-expanded={planOpen}
//           className="inline-flex items-center gap-2 px-5 py-1.5 text-sm text-cream-50/90 transition-colors hover:text-cream-50"
//         >
//           Plan Your Visit
//           <Caret open={planOpen} />
//         </button>
//         {planOpen && (
//           <div className="absolute left-1/2 top-full z-50 mt-2 w-52 -translate-x-1/2 rounded-card border border-wine-700/10 bg-cream-50 p-2 text-ink shadow-lg">
//             {planVisitLinks.map((link) => (
//               <Link key={link.label} href={link.href}
//                 onClick={() => setPlanOpen(false)}
//                 className="block rounded-lg px-3 py-2 text-sm transition-colors hover:bg-wine-700/8 hover:text-wine-700">
//                 {link.label}
//               </Link>
//             ))}
//           </div>
//         )}
//       </div>
//   </div>
//   </Container>
// </div>
// )}

//       {/* ---- Main nav: tabs sit inside the hero ---- */}
//       <Container>
//         <div className="flex min-h-[5rem] items-center justify-between lg:h-36">
//           {/* <Link href="/" aria-label={site.name} className="-ml-20">
//             <Logo size={250}  />
//           </Link> */}
//           <Link href="/" aria-label={site.name} className="lg:-ml-20">
//   <span className="block lg:hidden">
//     <Logo size={140} />
//   </span>
//   <span className="hidden lg:block">
//     <Logo size={250} />
//   </span>
// </Link>

//           {/* Desktop tabs */}
//           <nav className="hidden items-center gap-1 lg:flex">
//             {mainNav.map((item) =>
//               item.children ? (
//                 <div key={item.href} className="group relative">
//                   <Link href={item.href}
//                     className={cn("flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors",
//                       isActive(item.href) ? "text-cream-50" : "text-cream-50/80 hover:text-cream-50")}>
//                     {item.label}
//                     <Caret />
//                   </Link>
//                   {isActive(item.href) && (
//                     <span className="absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full bg-wine-500" />
//                   )}
//                   <div className="invisible absolute left-0 top-full w-56 translate-y-1 rounded-card border border-wine-700/10 bg-cream-50 p-2 text-ink opacity-0 shadow-lg transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
//                     {item.children.map((child) => (
//                       <Link key={child.href} href={child.href}
//                         className="block rounded-lg px-3 py-2 text-sm transition-colors hover:bg-wine-700/8 hover:text-wine-700">
//                         {child.label}
//                       </Link>
//                     ))}
//                   </div>
//                 </div>
//               ) : (
//                 <div key={item.href} className="relative">
//                   <Link href={item.href}
//                     className={cn("px-4 py-2 text-sm font-medium transition-colors",
//                       isActive(item.href) ? "text-cream-50" : "text-cream-50/80 hover:text-cream-50")}>
//                     {item.label}
//                   </Link>
//                   {isActive(item.href) && (
//                     <span className="absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full bg-wine-500" />
//                   )}
//                 </div>
//               ),
//             )}
//           </nav>

//           {/* Donate + mobile toggle */}
//           <div className="flex items-center gap-3">
//               <Link href="/contact"
//                 className="hidden rounded-lg border border-cream-50 px-6 py-2.5 text-sm font-semibold text-cream-50 transition-colors hover:bg-cream-50 hover:text-wine-800 sm:inline-flex">
//                  Contact Us
//               </Link>
//             <Link href={site.giveUrl}
//             target="_blank"
//   rel="noopener noreferrer"
//               className="hidden rounded-xl bg-wine-600 px-6 py-2.5 text-sm font-semibold text-cream-50 transition-colors hover:bg-wine-500 sm:inline-flex">
//               Donate
//             </Link>
//             <button
//               className="inline-flex h-11 w-11 items-center justify-center rounded-full text-cream-50 lg:hidden"
//               onClick={() => setMobileOpen((v) => !v)} aria-label="Toggle menu" aria-expanded={mobileOpen}>
//               <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
//                 {mobileOpen
//                   ? <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" />
//                   : <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" />}
//               </svg>
//             </button>
//           </div>
//         </div>
//       </Container>

//       {/* Mobile menu */}
//       {mobileOpen && (
//         <div className="bg-wine-900 lg:hidden">
//           <Container className="py-4">
//             <nav className="flex flex-col gap-1">
//               {mainNav.map((item) => (
//                 <div key={item.href}>
//                   <Link href={item.href} onClick={() => setMobileOpen(false)}
//                     className={cn("block rounded-lg px-3 py-2.5 text-sm font-medium",
//                       isActive(item.href) ? "bg-cream-50/10 text-cream-50" : "text-cream-50/80")}>
//                     {item.label}
//                   </Link>
//                   {item.children && (
//                     <div className="ml-3 border-l border-cream-50/15 pl-3">
//                       {item.children.map((child) => (
//                         <Link key={child.href} href={child.href} onClick={() => setMobileOpen(false)}
//                           className="block rounded-lg px-3 py-2 text-sm text-cream-50/70">
//                           {child.label}
//                         </Link>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               ))}
//                <Link href="/contact" onClick={() => setMobileOpen(false)}
//                  className="mt-3 inline-flex items-center justify-center rounded-full border border-cream-50 px-6 py-2.5 text-sm font-semibold text-cream-50">
//                   Contact Us
//                </Link>

//               <Link href={site.giveUrl} onClick={() => setMobileOpen(false)}
//                 className="mt-3 inline-flex items-center justify-center rounded-full bg-wine-600 px-6 py-2.5 text-sm font-semibold text-cream-50">
//                 Donate
//               </Link>
//             </nav>
//           </Container>
//         </div>
//       )}
//     </header>
//   );
// }

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
  const overlayPages = ["/about", "/visit", "/events", "/media", "/ministries", "/contact"];
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

          {/* Desktop tabs */}
          <nav className="hidden items-center gap-1 lg:-mt-14 lg:flex">
            {mainNav.map((item) =>
              item.children ? (
                <div key={item.href} className="group relative">
                  <Link href={item.href}
                    className={cn("flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors",
                      isActive(item.href) ? "text-cream-50" : "text-cream-50/80 hover:text-cream-50")}>
                    {item.label}
                    <Caret />
                  </Link>
                  {isActive(item.href) && (
                    <span className="absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full bg-wine-500" />
                  )}
                  <div className="invisible absolute left-0 top-full w-56 translate-y-1 rounded-card border border-wine-700/10 bg-cream-50 p-2 text-ink opacity-0 shadow-lg transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    {item.children.map((child) => (
                      <Link key={child.href} href={child.href}
                        className="block rounded-lg px-3 py-2 text-sm transition-colors hover:bg-wine-700/8 hover:text-wine-700">
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <div key={item.href} className="relative">
                  <Link href={item.href}
                    className={cn("px-4 py-2 text-sm font-medium transition-colors",
                      isActive(item.href) ? "text-cream-50" : "text-cream-50/80 hover:text-cream-50")}>
                    {item.label}
                  </Link>
                  {isActive(item.href) && (
                    <span className="absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full bg-wine-500" />
                  )}
                </div>
              ),
            )}
          </nav>

          {/* Donate + mobile toggle */}
          <div className="flex items-center gap-3 lg:-mt-14">
            {/* <Link href="/contact"
              className="hidden rounded-lg border border-cream-50 px-6 py-2.5 text-sm font-semibold text-cream-50 transition-colors hover:bg-cream-50 hover:text-wine-800 sm:inline-flex">
              Contact Us
            </Link> */}
            <Link href={site.giveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden rounded-xl bg-wine-600 px-6 py-2.5 text-sm font-semibold text-cream-50 transition-colors hover:bg-wine-500 sm:inline-flex">
              Donate
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
                  {item.children && (
                    <div className="ml-3 border-l border-cream-50/15 pl-3">
                      {item.children.map((child) => (
                        <Link key={child.href} href={child.href} onClick={() => setMobileOpen(false)}
                          className="block rounded-lg px-3 py-2 text-sm text-cream-50/70">
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link href="/contact" onClick={() => setMobileOpen(false)}
                className="mt-3 inline-flex items-center justify-center rounded-full border border-cream-50 px-6 py-2.5 text-sm font-semibold text-cream-50">
                Contact Us
              </Link>
              <Link href={site.giveUrl} onClick={() => setMobileOpen(false)}
                className="mt-3 inline-flex items-center justify-center rounded-full bg-wine-600 px-6 py-2.5 text-sm font-semibold text-cream-50">
                Donate
              </Link>
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
}