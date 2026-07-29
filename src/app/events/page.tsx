import Image from "next/image";
import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { VisitSection } from "@/components/sections/VisitSection";
import { getEvents, getMemories } from "@/lib/api";
import { Reveal } from "@/components/motion/Reveal";

export const metadata: Metadata = { title: "Events" };

export default async function EventsPage() {
  const [events, memories] = await Promise.all([getEvents(), getMemories()]);

  const calendarMonth = events[0]
    ? new Date(events[0].date).toLocaleDateString("en-GB", {
        month: "long",
        year: "numeric",
      })
    : "";

  return (
    <>
      <PageHeader
        title="Events"
        subtitle="Where every gathering is an opportunity to connect, grow, and belong"
        image="/event-pics.png"
      />

      {/* Event Calendar — list left, image right */}
      <section className="bg-[#FFFFFF] py-20 lg:py-24">
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

          <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-stretch">
            {/* Calendar table */}
            <div>
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
                      <div className="grid grid-cols-[auto_1fr_auto] items-center gap-4 rounded-md border border-ink/10 px-5 py-4">
                        <span className="text-sm font-semibold text-wine-700">
                          {dayNum}{suffix} {weekday}
                        </span>
                        <span className="text-center text-sm text-ink">{event.title}</span>
                        <span className="text-sm text-ink">{event.time}</span>
                      </div>
                    </Reveal>
                  );
                })}
              </div>
            </div>

            {/* Side image */}
            <Reveal direction="right">
              <div className="shine relative h-64 w-full overflow-hidden rounded-md lg:h-full lg:w-80">
                <Image
                  src="/calendar-pics.jpg"
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

        {/* Recent Memories — mosaic */}
          {/* Recent Memories — mosaic */}
<section className="py-20 lg:py-24">
  <Container size="wide" className="max-w-[95rem] bg-[#F5F5F5] px-4 pb-12 pt-12 sm:px-6 lg:px-8 lg:pb-16 lg:pt-16">
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
            src={memories[0] ?? "/calendar-pics.png"}
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
                src={memories[1] ?? "/calendar-pics.png"}
                alt="Youth activity"
                fill
                className="object-cover"
                sizes="25vw"
              />
            </div>
            <div className="shine relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src={memories[2] ?? "/calendar-pics.png"}
                alt="Shared meal"
                fill
                className="object-cover"
                sizes="25vw"
              />
            </div>
          </div>
          <div className="shine relative aspect-[16/9] overflow-hidden rounded-2xl">
            <Image
              src={memories[3] ?? "/calendar-pics.png"}
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
      <section className="bg-[#FFFFFF] py-20 lg:py-24">
        <VisitSection />
      </section>
    </>
  );
}