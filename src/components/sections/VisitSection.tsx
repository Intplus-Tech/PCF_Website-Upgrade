import { Container } from "@/components/layout/Container";
import { MapEmbed } from "@/components/MapEmbed";
import { Reveal } from "@/components/motion/Reveal";
import { RevealText } from "@/components/motion/RevealText";

export function VisitSection() {
  return (
    <section className="py-20 lg:py-24">
      {/* Eyebrow dash + heading — stays within the container */}
      <Container size="full">
        <Reveal>
          <div>
            <span className="block h-0.5 w-10 bg-ink/70" />
            <h2 className="mt-5 font-body text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              <RevealText text="Visit Us" />
            </h2>
          </div>
        </Reveal>
      </Container>

      {/* Map — full bleed, edge to edge */}
      <Reveal delay={0.2}>
        <MapEmbed
          rounded={false}
          className="mt-10 h-[520px] w-full sm:h-[620px] lg:h-[720px]"
        />
      </Reveal>
    </section>
  );
}