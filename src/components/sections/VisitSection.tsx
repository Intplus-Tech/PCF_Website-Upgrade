import { Container } from "@/components/layout/Container";
import { MapEmbed } from "@/components/MapEmbed";

export function VisitSection() {
  return (
    <section className="py-20">
      <Container size="wide">
        {/* Eyebrow dash + heading, left-aligned like the Figma */}
        <div>
          <span className="block h-0.5 w-10 bg-ink/70" />
          <h2 className="mt-5 font-body text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Visit Us
          </h2>
        </div>

        <MapEmbed className="mt-10 h-[460px] w-full" />
      </Container>
    </section>
  );
}