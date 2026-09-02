import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { Reveal } from "@/components/motion/Reveal";
import { site } from "@/lib/config/site";

export const metadata: Metadata = { title: "Give" };

// ---------------------------------------------------------------------------
// Copy + details. Hardcoded (no Sanity fetch on this route). Everything lives
// here, so moving it to the CMS later is a swap with no JSX changes.
// ---------------------------------------------------------------------------

const hero = {
  title: "Give",
  subtitle:
    "We believe every good thing comes from God, and giving is an essential part of our worship",
  image: "/give-banner.jpg",
};

const verse = {
  text: "You should give as you have decided in your heart\u2026",
  reference: "2 Corinthians 9:7",
};

const purpose = {
  heading: "The Path of Purpose",
  body: "Tithes and offerings are more than simple transactions; they are a profound expression of communal faith and a commitment to our shared journey. Through your generosity, we fuel the engines of community impact, ensuring that the road ahead is illuminated for all who seek guidance and support.",
};

// TODO: replace with the church's real account details before launch.
const bankDetails = [
  { label: "Account Name", value: "PCF Ministries" },
  { label: "Account No.", value: "XXXXXXXX" },
  { label: "Sort Code", value: "XX-XX-XX" },
];

/* --------------------------------- icons --------------------------------- */

function BankIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden className="text-wine-700">
      <path d="M3 10h18M5 10v8M9.5 10v8M14.5 10v8M19 10v8M3 21h18M12 3l9 5H3l9-5z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CardIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden className="text-wine-700">
      <rect x="2.5" y="5" width="19" height="14" rx="2.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M2.5 9.5h19" stroke="currentColor" strokeWidth="1.6" />
      <path d="M6 14.5h3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function GiftIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden className="text-wine-700">
      <rect x="3" y="9" width="18" height="11" rx="1.6" stroke="currentColor" strokeWidth="1.6" />
      <path d="M3 13h18M12 9v11" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 9S10.5 4.5 8 4.5A2 2 0 0 0 8 9h4zm0 0s1.5-4.5 4-4.5A2 2 0 0 1 16 9h-4z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}

function HandHeartIcon() {
  return (
    <svg width="38" height="38" viewBox="0 0 24 24" fill="none" aria-hidden className="text-wine-700">
      <path d="M12 8.6s-.9-1.9-2.4-1.9a1.9 1.9 0 0 0-1.3 3.3L12 13.6l3.7-3.6a1.9 1.9 0 0 0-1.3-3.3C12.9 6.7 12 8.6 12 8.6z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M2.5 15.5l3-1.4a3 3 0 0 1 2.4 0l2.2.9a2 2 0 0 0 1.6 0l4.6-2a2 2 0 0 1 2.6 1v0a2 2 0 0 1-1 2.5l-5.6 2.8a4 4 0 0 1-3.2.2L2.5 17.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* --------------------------------- page ---------------------------------- */

export default function GivePage() {
  return (
    <>
      <PageHeader
        title={hero.title}
        subtitle={hero.subtitle}
        image={hero.image}
        imagePosition="object-[center_30%]"
      />

      {/* Verse + purpose */}
      <section className="bg-white py-14 lg:py-20">
        <Container size="wide">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <Reveal direction="left">
              <blockquote className="relative border-l-4 border-wine-700 bg-[#FAFAFA] py-9 pl-8 pr-6 sm:pl-10">
                <span
                  aria-hidden
                  className="font-display text-4xl font-bold leading-none text-ink/15"
                >
                  &ldquo;
                </span>
                <p className="mt-2 font-display text-2xl italic leading-snug text-wine-700 sm:text-3xl">
                  &ldquo;{verse.text}&rdquo;
                </p>
                <cite className="mt-4 block text-sm font-semibold uppercase not-italic tracking-[0.18em] text-muted">
                  {verse.reference}
                </cite>
              </blockquote>
            </Reveal>

            <Reveal direction="right">
              <div>
                <h2 className="font-display text-4xl font-bold tracking-tight text-wine-700 sm:text-5xl">
                  {purpose.heading}
                </h2>
                <p className="mt-5 text-base leading-relaxed text-ink sm:text-lg">
                  {purpose.body}
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Ways to contribute */}
      <section
        style={{ backgroundColor: "#F5F5F5" }}
        className="border-t border-wine-700/15 py-16 lg:py-20"
      >
        <Container size="wide">
          <Reveal>
            <div className="text-center">
              <h2 className="font-body text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
                Ways to Contribute
              </h2>
              <p className="mt-4 text-base text-muted sm:text-lg">
                Choose the path that aligns with your spirit.
              </p>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-6 md:grid-cols-3 lg:mt-12 lg:gap-8">
            {/* Bank transfer */}
            <Reveal delay={0.05}>
              <div className="h-full rounded-xl border-t-2 border-wine-700 bg-white p-6 shadow-sm sm:p-8">
                <div className="flex items-center justify-between gap-3">
                  <p className="flex items-center gap-3 font-display text-xl font-bold text-ink sm:text-2xl">
                    <BankIcon />
                    Bank Transfer
                  </p>
                  <span className="shrink-0 rounded-full border border-wine-700/40 px-3 py-1 text-xs font-semibold text-wine-700">
                    Preferred
                  </span>
                </div>

                <dl className="mt-7 space-y-5">
                  {bankDetails.map((d) => (
                    <div key={d.label}>
                      <dt className="text-sm text-muted">{d.label}</dt>
                      <dd className="mt-1 text-base font-semibold tracking-wide text-ink">
                        {d.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Reveal>

            {/* Online giving */}
            <Reveal delay={0.15}>
              <div className="flex h-full flex-col rounded-xl border-t-2 border-wine-700 bg-white p-6 text-center shadow-sm sm:p-8">
                <p className="flex items-center justify-center gap-3 font-display text-xl font-bold text-ink sm:text-2xl">
                  <CardIcon />
                  Online Giving
                </p>
                <p className="mt-5 text-base leading-relaxed text-muted">
                  Securely contribute through our digital portal for an immediate
                  impact on our shared mission.
                </p>
                <div className="mt-auto pt-7">
                  <Link
                    href={site.giveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center rounded-md bg-wine-800 px-6 py-3 text-base font-semibold text-cream-50 transition-colors hover:bg-wine-700 sm:w-auto sm:px-10"
                  >
                    Donate
                  </Link>
                </div>
              </div>
            </Reveal>

            {/* Gift aid */}
            <Reveal delay={0.25}>
              <div className="flex h-full flex-col rounded-xl border-t-2 border-wine-700 bg-white p-6 text-center shadow-sm sm:p-8">
                <p className="flex items-center justify-center gap-3 font-display text-xl font-bold text-ink sm:text-2xl">
                  <GiftIcon />
                  Gift Aid
                </p>
                <p className="mt-5 text-base leading-relaxed text-muted">
                  Enhance the reach of your contribution. Eligible UK taxpayers can
                  add a 25% boost to their donation at no extra cost.
                </p>
                <div className="mt-auto pt-7">
                  <Link
                    href="/contact"
                    className="inline-flex w-full items-center justify-center rounded-md border border-wine-700/40 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-wine-700 transition-colors hover:bg-wine-700 hover:text-cream-50"
                  >
                    Request Form
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Additional giving options */}
      <section className="bg-white py-12 lg:py-16">
        <Container size="wide">
          <Reveal>
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-4">
                <HandHeartIcon />
                <div>
                  <h2 className="font-display text-3xl font-bold tracking-tight text-wine-700 sm:text-4xl">
                    Additional Giving Options
                  </h2>
                  <p className="mt-2 text-base text-muted sm:text-lg">
                    Explore other meaningful ways to support the community.
                  </p>
                </div>
              </div>

              <Link
                href={site.giveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex shrink-0 flex-col items-start gap-1 text-sm font-semibold uppercase tracking-[0.18em] text-wine-700 sm:items-end"
              >
                Contribute Now
                <span className="block h-px w-full bg-wine-700/50 transition-colors group-hover:bg-wine-700" />
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
