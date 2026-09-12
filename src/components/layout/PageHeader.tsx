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
  /**
   * Darkening layer over the banner image. Lighter values show more of the
   * photo; darker ones improve text contrast. Override per page, e.g.
   * overlayClass="bg-black/25" for an already-dark image.
   */
  overlayClass = "bg-black/35",
}: {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  image?: string;
  imagePosition?: string;
  imageFit?: string;
  heightClass?: string;
  overlayClass?: string;
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
          <div className={`absolute inset-0 ${overlayClass}`} />
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
        <h1 className="font-body text-4xl font-extrabold tracking-tight [text-shadow:_0_2px_16px_rgb(0_0_0_/_45%)] sm:text-6xl md:text-8xl">
          <RevealText text={title} />
        </h1>
        {subtitle && (
          <Reveal delay={0.4}>
            <p className="mx-auto mt-6 max-w-3xl text-base text-cream-100/90 [text-shadow:_0_1px_10px_rgb(0_0_0_/_45%)] sm:text-lg md:text-xl">
              {subtitle}
            </p>
          </Reveal>
        )}
      </Container>
    </section>
  );
}
