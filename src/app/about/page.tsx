import Image from "next/image";
import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { Reveal } from "@/components/motion/Reveal";
import { AboutTabs } from "@/components/about/AboutTabs";
import { aboutImages, seniorPastor } from "@/lib/config/about";
import { getPageHeader } from "@/lib/api";

export const metadata: Metadata = { title: "About Us" };

export default async function AboutPage() {
  const header = await getPageHeader("about");

  return (
    <>
      <PageHeader
        eyebrow={header?.eyebrow ?? "Our Story"}
        title={header?.title ?? "About Us"}
        subtitle={
          header?.subtitle ?? "Learn about who we are and what we believe"
        }
        image={header?.image ?? "/about-banner.png"}
        imagePosition="object-[center_40%]"
      />

      {/* Sidebar + content views */}
      <AboutTabs />

                 {/* Senior pastor — full-width image (text is baked into the artwork) */}
      <section className="bg-wine-900">
        <Image
          src="/pastors-frame.png"
          alt="About our Senior Pastor, David Morrison — 'Ministry is about people, not programs.'"
          width={2400}
          height={1200}
          priority
          className="h-auto w-full"
          sizes="100vw"
        />
      </section>
         


      {/* Closing */}
      <section className="py-20 lg:py-28">
        <Container size="wide" className="text-center">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink sm:text-sm">
              Shaped by Faith, United in Love
            </p>
            <h2 className="mt-5 font-body text-3xl font-extrabold uppercase tracking-tight text-ink sm:text-5xl">
              Be Part of Our Story
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-muted sm:text-2xl">
              <span className="font-semibold text-ink">
                The Peoples Church Falkirk
              </span>{" "}
              is more than a place — it&apos;s a community. Every friendship, and
              every act of service is part of something bigger. We&apos;d love for
              you to add your story.
            </p>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
