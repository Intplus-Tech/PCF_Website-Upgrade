import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { MapEmbed } from "@/components/MapEmbed";
import { Reveal } from "@/components/motion/Reveal";
import { getPageHeader } from "@/lib/api";

export const metadata: Metadata = { title: "Visit" };

const services = [
  { name: "Sunday Worship", time: "11:00AM & 06:45PM" },
  { name: "Tuesday Evening", time: "07:30PM" },
  { name: "Thursday Evening", time: "07:30PM" },
];



export default async function VisitPage() {
  const header = await getPageHeader("visit");

  return (
    <>
      <PageHeader
        title={header?.title ?? "Visit"}
        subtitle={header?.subtitle ?? "Your first visit should feel easy, warm, and welcoming"}
        image={header?.image ?? "/visit-pics.png"}
      />
      {/* ...rest unchanged... */}

      {/* Join Us This Week — text left, service times right */}
      <section className="py-20 lg:py-24">
        <Container size="wide" className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left */}
          <Reveal direction="left">
            <div className="mt-16">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-ink">
                Be Our Guest
              </p>
              <h2 className="mt-5 font-body text-4xl font-extrabold uppercase tracking-tight text-ink sm:text-5xl">
                Join Us This Week
              </h2>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
                We gather every Sunday for worship, connection, and encouragement.
                Come early, meet some friendly faces before the Service begins.
              </p>
            </div>
          </Reveal>

          {/* Right — service times + location */}
          <div className="flex flex-col justify-center">
            {services.map((s, i) => (
              <Reveal key={s.name} delay={i * 0.12}>
                <div className="flex items-baseline gap-3 border-b border-ink/15 py-8">
                  <span className="text-sm font-bold uppercase text-wine-700">
                    + {s.name}:
                  </span>
                  <span className="text-sm text-ink">{s.time}</span>
                </div>
              </Reveal>
            ))}

            {/* Location */}
            <Reveal delay={services.length * 0.12}>
              <div className="flex items-start gap-3 py-8">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mt-0.5 shrink-0 text-ink"
                  aria-hidden
                >
                  <path d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z" />
                </svg>
                <p className="text-sm leading-relaxed">
                  <span className="font-bold uppercase text-wine-700">Location</span>{" "}
                  <span className="text-ink">
                    West Bridge Street, Falkirk, FK1 5RJ, United Kingdom
                  </span>
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Visit Us — map */}
      <section className="pb-24">
        <Container size="wide">
          <Reveal>
            <span className="block h-0.5 w-10 bg-ink/70" />
            <h2 className="mt-5 font-body text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              Visit Us
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <MapEmbed className="mt-8 h-[460px] w-full" />
          </Reveal>
        </Container>
      </section>
    </>
  );
}