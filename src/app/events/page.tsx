import Image from "next/image";
import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { VisitSection } from "@/components/sections/VisitSection";
import { getInvolvedCards, getPageHeader } from "@/lib/api";
import { Reveal } from "@/components/motion/Reveal";
import { parseLocalDate } from "@/lib/recurrence";

export const metadata: Metadata = { title: "Events" };

// Builds the schedule line, e.g. "Sunday at 11:00 AM"
function scheduleLine(dateISO: string, time: string): string {
  const d = parseLocalDate(dateISO);
  if (isNaN(d.getTime())) return time;
  const weekday = d.toLocaleDateString("en-GB", { weekday: "long" });
  return `${weekday} at ${time}`;
  
}

export default async function EventsPage() {
  const [cards, header] = await Promise.all([
    getInvolvedCards(),
    getPageHeader("events"),
  ]);

  return (
    <>
      <PageHeader
        title={header?.title ?? "Events"}
        subtitle={header?.subtitle ?? "Where every gathering is an opportunity to connect, grow, and belong"}
        image={header?.image ?? "/event-bannersnew.jpg"}
      />

      {/* Event Calendar — alternating image + text rows */}
      <section className="overflow-hidden bg-[#FFFFFF] py-20 lg:py-24">
        <Container size="wide">
          <Reveal>
            <span className="block h-0.5 w-10 bg-ink/70" />
            <h2 className="mt-5 font-body text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
              Event Calendar
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
              We gather every Sunday for worship, connection, and encouragement.
              Come early, meet some friendly faces before the Service begins.
            </p>
          </Reveal>

          <div className="mt-16 space-y-16 lg:space-y-20">
            {cards.map((card, i) => {
              const imageLeft = i % 2 === 1; // alternate: 1st text-left, 2nd image-left, etc.
              return (
                <Reveal key={card.id}>
                  <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
                    {/* Image */}
                        <div className={`shine relative aspect-square w-full overflow-hidden rounded-2xl ${imageLeft ? "lg:order-1" : "lg:order-2"}`}>
                      <Image
                        src={card.eventsImage || "/in-events.jpg"}
                        alt={card.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>
                    {/* Text */}
                    <div className={`${imageLeft ? "lg:order-2" : "lg:order-1"}`}>
                      <p className="text-sm text-muted">
                        {scheduleLine(card.date, card.time)}
                      </p>
                      <h3 className="mt-2 font-body text-2xl font-extrabold tracking-tight text-wine-700 sm:text-3xl">
                        {card.title}
                      </h3>
                      <p className="mt-4 leading-relaxed text-muted">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Visit Us — reusable section (same as homepage) */}
      <section className="overflow-hidden bg-[#FFFFFF]">
        <VisitSection />
      </section>
    </>
  );
}