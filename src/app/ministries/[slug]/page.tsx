import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { getMinistries, getMinistry } from "@/lib/api";
import { MinistrySidebar } from "@/components/ministries/MinistrySidebar";

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

  // 0 = location pin, 1 = calendar, 2 = clock
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

export default async function MinistryDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const [ministry, ministries] = await Promise.all([
    getMinistry(slug),
    getMinistries(),
  ]);
  if (!ministry) notFound();

  return (
    <>
      {/* Shared ministries hero on every sub-page */}
      <PageHeader
        title="Ministries"
        subtitle="Our ministries gives you the opportunity to get involved and make a difference."
        image="/ministries-pics.png"
      />

      <section className="py-16 lg:py-20 bg-[#FFFFFF]">
        <Container size="wide" className="grid items-start gap-8 lg:grid-cols-[300px_1fr]">
          {/* Sidebar — all ministries */}
          {/* <aside className="space-y-4">
            {ministries.map((m) => {
              const active = m.slug === ministry.slug;
              return (
                <Link
                  key={m.slug}
                  href={`/ministries/${m.slug}`}
                  className="group relative block h-24 overflow-hidden rounded-xl"
                >
                  <Image
                    src={m.image}
                    alt={m.name}
                    fill
                    className="object-cover"
                    sizes="260px"
                  />
                  <div
                    className={
                      active
                        ? "absolute inset-0 bg-wine-900/40"
                        : "absolute inset-0 bg-wine-900/65 transition-colors group-hover:bg-wine-900/50"
                    }
                  />
                  <span className="absolute inset-0 flex items-center justify-center text-lg font-semibold text-cream-50">
                    {m.name}
                  </span>
                  {active && (
                    <span className="absolute inset-0 rounded-xl ring-2 ring-cream-50/70" />
                  )}
                </Link>
              );
            })}
          </aside> */}

          <MinistrySidebar ministries={ministries} activeSlug={ministry.slug} />

          {/* Detail panel */}
          <div className="flex min-h-[720px] flex-col rounded-2xl bg-[#F5F5F5] p-8 lg:p-10">
            <span className="block h-0.5 w-10 bg-ink/70" />
           <h2 className="mt-4 font-body text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
              {ministry.name}
            </h2>
           <p className="mt-5  text-2xl leading-relaxed text-muted">
              {ministry.description}
            </p>

            {/* Info pills (service time / age / location) */}
           {/* Info pills (location / age / time) */}
{ministry.infoPills && (
 <div className="mt-6 flex gap-3 overflow-x-auto w-full">
  {ministry.infoPills.map((pill, i) => (
    <span
      key={pill}
      // className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-wine-700/30 px-4 py-2 text-sm font-medium uppercase tracking-wide text-wine-700"
      className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border border-wine-700/30 px-3 py-1.5 text-xs font-medium uppercase tracking-wide text-wine-700"
    >
      <PillIcon index={i} />
      {pill}
    </span>
  ))}
</div>
)}

            {/* Layout A: simple checklist (Crèche) */}
            {ministry.layout === "checklist" && (
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
            )}

            {/* Layout B: What To Expect with bold lead-ins (Sunday School) */}
            {ministry.layout === "expect" && ministry.expect && (
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
            )}

            {/* Layout C: 3 feature cards (Men's / Women's) */}
            {ministry.layout === "cards" && ministry.features && (
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {ministry.features.map((f) => (
                  <div key={f.title} className="rounded-xl bg-cream-50 p-5 shadow-sm">
                    <p className="flex items-center gap-2 text-base font-bold text-ink">
                      <span className="flex h-4 w-4 items-center justify-center rounded-full bg-wine-700 text-cream-50">
                        <svg width="9" height="9" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="3"/></svg>
                      </span>
                      {f.title}
                    </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{f.text}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Optional scripture quote */}
            {ministry.quote && (
              <blockquote className="mt-8 border-l-2 border-wine-700 pl-4 text-sm italic leading-relaxed text-muted">
                {ministry.quote}
              </blockquote>
            )}

            {/* Team members (Sunday School) */}
            {/* Team members (Sunday School) */}
{ministry.layout === "expect" && ministry.team && (
  <div className="mt-8">
    <h3 className="mb-4 text-lg font-bold text-ink">Team Member</h3>
    <div className="flex items-stretch gap-3">
  {/* left 2x2 */}
  <div className="grid flex-1 grid-cols-2 gap-3">
    {ministry.team.slice(0, 4).map((src, i) => (
      <div key={i} className="relative aspect-square overflow-hidden rounded-lg">
        <Image src={src} alt={`Team member ${i + 1}`} fill className="object-cover" sizes="15vw" />
      </div>
    ))}
  </div>

  {/* center large — wider, but same height as the side clusters */}
  <div className="relative flex-[1.4] overflow-hidden rounded-lg">
    <Image src={ministry.team[4]} alt="Ministry leader" fill className="object-cover" sizes="25vw" />
  </div>

  {/* right 2x2 */}
  <div className="grid flex-1 grid-cols-2 gap-3">
    {ministry.team.slice(5, 9).map((src, i) => (
      <div key={i} className="relative aspect-square overflow-hidden rounded-lg">
        <Image src={src} alt={`Team member ${i + 6}`} fill className="object-cover" sizes="15vw" />
      </div>
    ))}
  </div>
</div>
  </div>
)}


            {/* Feature image (Crèche / Women's / Seniors gallery) */}
            {ministry.gallery && ministry.gallery.length === 1 && (
              <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-xl">
                <Image src={ministry.gallery[0]} alt={ministry.name} fill className="object-cover" sizes="70vw" />
              </div>
            )}
           {ministry.gallery && ministry.gallery.length > 1 && (
  <div className="mt-8 grid gap-4 sm:grid-cols-3">
    {ministry.gallery.map((src, i) => (
      <div key={i} className="relative aspect-[3/4] overflow-hidden">
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
)}
          </div>
        </Container>
      </section>
    </>
  );
}