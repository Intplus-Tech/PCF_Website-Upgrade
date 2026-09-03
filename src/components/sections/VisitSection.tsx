import { Container } from "@/components/layout/Container";
import { MapEmbed } from "@/components/MapEmbed";
import { Reveal } from "@/components/motion/Reveal";
import { RevealText } from "@/components/motion/RevealText";

export function VisitSection() {
  return (
    <section className="overflow-x-clip py-16 lg:py-24">
      {/* Eyebrow dash + heading — stays within the container */}
      <Container size="full">
        <Reveal>
          <div>
            <span className="block h-0.5 w-10 bg-ink/70" />
            <h2 className="mt-5 font-body text-2xl font-extrabold tracking-tight text-ink sm:text-3xl lg:text-4xl">
              <RevealText text="Visit Us" />
            </h2>
          </div>
        </Reveal>
      </Container>

      {/*
        Map — full bleed, edge to edge.
        On phones the iframe swallows vertical swipes (you pan the map instead of
        scrolling the page), so touch is disabled below `sm` and re-enabled above.
      */}
      <Reveal delay={0.2}>
        <MapEmbed
          rounded={false}
          className="mt-8 h-[300px] w-full touch-none sm:h-[560px] sm:touch-auto lg:mt-10 lg:h-[720px]"
        />
      </Reveal>
    </section>
  );
}
