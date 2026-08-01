import Image from "next/image";
import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { VisitSection } from "@/components/sections/VisitSection";
import { getEvents, getMemories, getPageHeader, getSiteSettings } from "@/lib/api";
import { Reveal } from "@/components/motion/Reveal";

export const metadata: Metadata = { title: "Events" };

export default async function EventsPage() {
  const [events, memories, header, settings] = await Promise.all([
    getEvents(),
    getMemories(),
    getPageHeader("events"),
    getSiteSettings(),
  ]);

  const calendarMonth = events[0]
    ? new Date(events[0].date).toLocaleDateString("en-GB", {
        month: "long",
        year: "numeric",
      })
    : "";

  return (
    <>
      <PageHeader
        title={header?.title ?? "Events"}
        subtitle={header?.subtitle ?? "Where every gathering is an opportunity to connect, grow, and belong"}
        image={header?.image ?? "/events-banner.png"}
      />

      {/* Event Calendar — list left, image right */}
      <section className="overflow-hidden bg-[#FFFFFF] py-20 lg:py-24">
        <Container size="wide">
          <Reveal>
            <span className="block h-0.5 w-10 bg-ink/70" />
            <h2 className="mt-5 font-body text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
              Event Calender
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
              We gather every Sunday for worship, connection, and encouragement.
              Come early, meet some friendly faces before the Service begins.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-stretch">
            {/* Calendar table */}
            <div className="min-w-0">
              <Reveal>
                <div className="rounded-md bg-[#1a1a1a] py-3 text-center text-sm font-semibold text-cream-50">
                  {calendarMonth}
                </div>
              </Reveal>
              <div className="mt-4 space-y-4">
                {events.map((event, i) => {
                  const d = new Date(event.date);
                  const dayNum = d.getDate();
                  const weekday = d.toLocaleDateString("en-GB", { weekday: "long" });
                  const suffix =
                    dayNum % 10 === 1 && dayNum !== 11 ? "st" :
                    dayNum % 10 === 2 && dayNum !== 12 ? "nd" :
                    dayNum % 10 === 3 && dayNum !== 13 ? "rd" : "th";

                  return (
                    <Reveal key={event.id} delay={i * 0.1}>
                      <div className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 rounded-md border border-ink/10 px-3 py-4 sm:gap-4 sm:px-5">
                        <span className="text-xs font-semibold text-wine-700 sm:text-sm">
                          {dayNum}{suffix}<span className="hidden sm:inline"> {weekday}</span>
                          <span className="block text-[10px] text-wine-700/70 sm:hidden">{weekday}</span>
                        </span>
                        <span className="min-w-0 break-words text-center text-xs text-ink sm:text-sm">
                          {event.title}
                          {event.speaker && (
                            <span className="block text-[11px] text-muted">Speaker: {event.speaker}</span>
                          )}
                        </span>
                        <span className="whitespace-nowrap text-xs text-ink sm:text-sm">{event.time}</span>
                      </div>
                    </Reveal>
                  );
                })}
              </div>
            </div>

            {/* Side image — from Sanity (Site Settings), fallback to /in-events.jpg */}
            <Reveal direction="right">
              <div className="shine relative h-64 w-full overflow-hidden rounded-md lg:h-full lg:w-80">
                <Image
                  src={settings?.eventsSideImage ?? "/in-events.jpg"}
                  alt="Worship singer"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 320px"
                />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Recent Memories — mosaic (Sanity-controlled via getMemories) */}
      <section className="overflow-hidden py-20 lg:py-24">
        <Container size="full" className="bg-[#F5F5F5] pb-12 pt-12 lg:pb-16 lg:pt-16">
          <Reveal>
            <div className="text-center">
              <h2 className="font-body text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
                Recent Memories
              </h2>
              <p className="mx-auto mt-4 max-w-3xl leading-relaxed text-muted">
                Revisit some of our favorite moments from last month&apos;s
                gatherings and community celebrations.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-4 lg:grid-cols-2">
            {/* Large left image */}
            <Reveal direction="left">
              <div className="shine relative aspect-[4/5] overflow-hidden rounded-2xl lg:aspect-auto lg:h-full">
                <Image
                  src={memories[0] ?? "/in-events.jpg"}
                  alt="Congregation gathered"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </Reveal>

            {/* Right cluster */}
            <Reveal direction="right" delay={0.15}>
              <div className="grid gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="shine relative aspect-[4/3] overflow-hidden rounded-2xl">
                    <Image
                      src={memories[1] ?? "/in-events.jpg"}
                      alt="Youth activity"
                      fill
                      className="object-cover"
                      sizes="25vw"
                    />
                  </div>
                  <div className="shine relative aspect-[4/3] overflow-hidden rounded-2xl">
                    <Image
                      src={memories[2] ?? "/in-events.jpg"}
                      alt="Shared meal"
                      fill
                      className="object-cover"
                      sizes="25vw"
                    />
                  </div>
                </div>
                <div className="shine relative aspect-[16/9] overflow-hidden rounded-2xl">
                  <Image
                    src={memories[3] ?? "/in-events.jpg"}
                    alt="Community outreach"
                    fill
                    className="object-cover"
                    sizes="50vw"
                  />
                </div>
              </div>
            </Reveal>
          </div>

          {/* Dots */}
          <div className="mt-8 flex justify-center gap-2 pb-4">
            <span className="h-2 w-6 rounded-full bg-wine-700" />
            <span className="h-2 w-2 rounded-full bg-ink/25" />
            <span className="h-2 w-2 rounded-full bg-ink/25" />
          </div>
        </Container>
      </section>

      <section className="overflow-hidden bg-[#FFFFFF] py-20 lg:py-24">
        <VisitSection />
      </section>
    </>
  );
}