import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { Reveal } from "@/components/motion/Reveal";
import { AboutTabs } from "@/components/about/AboutTabs";
import { VisitSection } from "@/components/sections/VisitSection";
import { seniorPastor } from "@/lib/config/about";
import { getPageHeader } from "@/lib/api";

export const metadata: Metadata = { title: "About Us" };

export default async function AboutPage() {
  const header = await getPageHeader("about");

  return (
    <>
      <PageHeader
        title={header?.title ?? "About Us"}
        subtitle={
          header?.subtitle ?? "Learn about who we are and what we believe"
        }
        image={header?.image ?? "/about-us-recent.png"}
        imagePosition="object-[center_35%]"
        overlayClass="bg-black/20"
      />

      {/* Sidebar + content views */}
      <AboutTabs />

               {/* Senior pastor — photo left, live text right */}
      <section className="bg-wine-900 py-10 lg:py-14">
        <Container size="wide">
         <div className="grid items-end gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
            <Reveal direction="left">
              <div className="relative h-[480px] w-full sm:h-[580px] lg:h-[760px]">
                <Image
                  src="/new-pastorsphoto.png"
                  alt="Pastor David Morrison"
                  fill
                  priority
                  className="object-contain object-bottom"
                 sizes="(max-width: 1024px) 90vw, 55vw"
                />
              </div>
            </Reveal>

            <Reveal direction="right">
              <div className="pb-4 text-cream-50 lg:pb-10">
                <h2 className="font-body text-2xl font-extrabold tracking-tight sm:text-3xl">
                  {seniorPastor.heading}
                </h2>

                {seniorPastor.paragraphs.map((p, i) => (
                  <p
                    key={i}
                    className="mt-4 text-sm leading-relaxed text-cream-100/90 sm:text-[15px]"
                  >
                    {p}
                  </p>
                ))}

                <blockquote className="mt-7 border-l-2 border-cream-50/40 pl-5 text-base italic text-cream-100/90 sm:text-lg">
                  &ldquo;{seniorPastor.quote}&rdquo;
                </blockquote>
              </div>
            </Reveal>
          </div>
        </Container>
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

      <VisitSection />
    </>
  );
}
