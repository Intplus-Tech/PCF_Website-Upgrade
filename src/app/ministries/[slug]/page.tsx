import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/layout/PageHeader";

import { MinistrySidebar } from "@/components/ministries/MinistrySidebar";
import { Reveal } from "@/components/motion/Reveal";
 import { getMinistries, getMinistry, getPageHeader } from "@/lib/api";

type Params = { slug: string };

export async function generateStaticParams() {
  const ministries = await getMinistries();
  return ministries.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata(): Promise<Metadata> {
  return { title: "Ministries" };
}

function CheckIcon() {
  return (
    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-wine-700 text-cream-50">
      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="3" />
      </svg>
    </span>
  );
}

function PillIcon({ index }: { index: number }) {
  const common = { width: 15, height: 15, viewBox: "0 0 24 24", fill: "none", "aria-hidden": true, className: "shrink-0" } as const;

  if (index === 0) {
    return (
      <svg {...common}>
        <path d="M12 21s7-6.3 7-11a7 7 0 1 0-14 0c0 4.7 7 11 7 11z" stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="2" />
      </svg>
    );
  }
  if (index === 1) {
    return (
      <svg {...common}>
        <rect x="3" y="4" width="18" height="17" rx="2" stroke="currentColor" strokeWidth="2" />
        <path d="M3 9h18M8 2v4M16 2v4" stroke="currentColor" strokeWidth="2" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
      <path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

  

export default async function MinistryDetailPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const [ministry, ministries, header] = await Promise.all([
    getMinistry(slug),
    getMinistries(),
    getPageHeader("ministries"),
  ]);
  if (!ministry) notFound();

  return (
    <>
      <PageHeader
        title={header?.title ?? "Ministries"}
        subtitle={header?.subtitle ?? "Our ministries gives you the opportunity to get involved and make a difference."}
        image={header?.image ?? "/ministries-banner.jpg"}
      />
      {/* ...rest unchanged... */}

      <section id="ministry-content" className="scroll-mt-24 bg-[#FFFFFF] py-16 lg:py-20">
        <Container size="wide" className="grid max-w-[95rem] items-start gap-8 px-4 sm:px-6 lg:grid-cols-[420px_1fr] lg:px-8">
          <MinistrySidebar ministries={ministries} activeSlug={ministry.slug} />

          {/* Detail panel */}
          <div className="flex min-h-[720px] flex-col rounded-2xl bg-[#F5F5F5] p-8 lg:p-12">
            <Reveal>
              <span className="block h-0.5 w-10 bg-ink/70" />
              <h2 className="mt-4 font-body text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
                {ministry.name}
              </h2>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="mt-5 text-2xl leading-relaxed text-muted">
                {ministry.description}
              </p>
            </Reveal>

            {/* Info pills — whole group wrapped in ONE Reveal (not each pill) */}
            {ministry.infoPills && (
              <Reveal delay={0.25}>
                <div className="mt-6 flex w-full flex-wrap gap-2">
                  {ministry.infoPills.map((pill, i) => (
                    <span
                      key={pill}
                      className="inline-flex items-center gap-2 rounded-full border border-wine-700/30 px-4 py-2 text-xs font-medium uppercase tracking-wide text-wine-700"
                    >
                      <PillIcon index={i} />
                      {pill}
                    </span>
                  ))}
                </div>
              </Reveal>
            )}

            {/* Layout A: checklist (Crèche) */}
            {ministry.layout === "checklist" && (
              <Reveal delay={0.1}>
                <div className="mt-8">
                  <h3 className="text-2xl font-bold text-ink">What To Expect?</h3>
                  <ul className="mt-4 space-y-3">
                    {ministry.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-3 text-sm text-ink">
                        <CheckIcon />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            )}

            {/* Layout B: What To Expect (Sunday School) */}
            {ministry.layout === "expect" && ministry.expect && (
              <Reveal delay={0.1}>
                <div className="mt-8">
                  <h3 className="text-xl font-bold text-ink">What To Expect?</h3>
                  <ul className="mt-4 space-y-4">
                    {ministry.expect.map((e) => (
                      <li key={e.title} className="flex items-start gap-3 text-base text-muted">
                        <CheckIcon />
                        <span>
                          <span className="font-bold text-ink">{e.title}:</span> {e.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            )}

            {/* Layout C: feature cards — staggered */}
            {ministry.layout === "cards" && ministry.features && (
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {ministry.features.map((f, i) => (
                  <Reveal key={f.title} delay={i * 0.12}>
                    <div className="rounded-xl bg-cream-50 p-5 shadow-sm">
                      <p className="flex items-center gap-2 text-base font-bold text-ink">
                        <span className="flex h-4 w-4 items-center justify-center rounded-full bg-wine-700 text-cream-50">
                          <svg width="9" height="9" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="3"/></svg>
                        </span>
                        {f.title}
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-muted">{f.text}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            )}

            {/* Scripture quote */}
            {ministry.quote && (
              <Reveal>
                <blockquote className="mt-8 border-l-2 border-wine-700 pl-4 text-sm italic leading-relaxed text-muted">
                  {ministry.quote}
                </blockquote>
              </Reveal>
            )}

                {/* Team members — responsive grid, adapts to any number of images */}
{ministry.layout === "expect" && ministry.team && ministry.team.length > 0 && (
  <Reveal>
    <div className="mt-8">
      <h3 className="mb-4 text-lg font-bold text-ink">Team Members</h3>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {ministry.team.map((src, i) => (
          <div key={i} className="shine relative aspect-square overflow-hidden rounded-lg">
            <Image
              src={src}
              alt={`Team member ${i + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
          </div>
        ))}
      </div>
    </div>
  </Reveal>
)}

            {/* Single feature image */}
            {ministry.gallery && ministry.gallery.length === 1 && (
              <Reveal>
                <div className="shine relative mt-8 aspect-[16/9] overflow-hidden rounded-xl">
                  <Image src={ministry.gallery[0]} alt={ministry.name} fill className="object-cover" sizes="(max-width: 768px) 100vw, 70vw" />
                </div>
              </Reveal>
            )}

            {/* Multi-image gallery — container in ONE Reveal, shine on each image */}
            {ministry.gallery && ministry.gallery.length > 1 && (
              <Reveal>
                <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
                  {ministry.gallery.map((src, i) => (
                    <div key={i} className="shine relative aspect-[3/4] overflow-hidden">
                      <Image
                        src={src}
                        alt={`${ministry.name} ${i + 1}`}
                        fill
                        className="object-cover"
                        sizes="30vw"
                      />
                    </div>
                  ))}
                </div>
              </Reveal>
            )}
          </div>
        </Container>
      </section>
    </>
  );
}