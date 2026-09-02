


"use client";

import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/motion/Reveal";
import { RevealText } from "@/components/motion/RevealText";

export function PageHeader({
  title,
  subtitle,
  eyebrow,
  image,
  imagePosition = "object-center",
  imageFit = "object-cover",
  heightClass = "min-h-[75vh]",
}: {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  image?: string;
  imagePosition?: string;
  imageFit?: string;
  heightClass?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden text-cream-50">
      {image && (
        <div className="absolute inset-0 -z-10">
          <Image
            src={image}
            alt=""
            fill
            priority
            className={`${imageFit} ${imagePosition}`}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
      )}
      <Container className={`flex ${heightClass} flex-col justify-center pt-40 pb-24 text-center`}>
        {eyebrow && (
          <Reveal>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-gold-400">
              {eyebrow}
            </p>
          </Reveal>
        )}
          <h1 className="font-body text-6xl font-extrabold tracking-tight sm:text-7xl md:text-8xl">
  <RevealText text={title} />
</h1>
{subtitle && (
  <Reveal delay={0.4}>
    <p className="mx-auto mt-6 max-w-3xl text-lg text-cream-100/90 sm:text-xl">{subtitle}</p>
  </Reveal>
)}
      </Container>
    </section>
  );
}