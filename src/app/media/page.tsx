import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { Reveal } from "@/components/motion/Reveal";
import { MemoriesCarousel } from "@/components/media/MemoriesCarousel";
import { SermonsGrid } from "@/components/media/SermonsGrid";
import { getInvolvedCards, getMemories, getPageHeader } from "@/lib/api";

export const metadata: Metadata = { title: "Media" };

export default async function MediaPage() {
  const [header, memories, cards] = await Promise.all([
    getPageHeader("media"),
    getMemories(),
    getInvolvedCards(),
  ]);

  return (
    <>
      <PageHeader
        title={header?.title ?? "Media"}
        subtitle={
          header?.subtitle ??
          "Every Message Preached. Every Word available whenever you need it"
        }
        image={header?.image ?? "/media-pics.png"}
        imagePosition="object-center"
      />

      <div style={{ backgroundColor: "#F5F5F5" }}>
        {/* Recent Memories */}
        <section className="py-16 lg:py-20">
          <Container size="wide">
            <Reveal>
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="font-body text-3xl font-extrabold tracking-tight text-ink sm:text-5xl">
                  Recent Memories
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
                  Revisit some of our favorite moments from last month&apos;s
                  gatherings and community celebrations.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-10 lg:mt-12">
                <MemoriesCarousel memories={memories} />
              </div>
            </Reveal>
          </Container>
        </section>

        {/* Sermons — same cards as the Events page */}
        <section className="pb-20 pt-4 lg:pb-24">
          <Container size="wide">
            <SermonsGrid cards={cards} />
          </Container>
        </section>
      </div>
    </>
  );
}
