import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { Reveal } from "@/components/motion/Reveal";
import { GospelText } from "@/components/about/GospelText";
import { getPageHeader } from "@/lib/api";

export const metadata: Metadata = { title: "About Us" };

const values = [
  { title: "FAITH", text: "Trusting God in all we do." },
  { title: "COMMUNITY", text: "Walking together in love and grace." },
  { title: "SERVICE", text: "Reaching beyond ourselves to care for others." },
  { title: "GROWING", text: "Encouraging spiritual and personal transformation." },
];

export default async function AboutPage() {
   const header = await getPageHeader("about");
  return (
    <>
       <PageHeader
        eyebrow={header?.eyebrow ?? "Our Story"}
        title={header?.title ?? "About Us"}
        subtitle={header?.subtitle ?? "Learn about who we are and what we believe"}
        image={header?.image ?? "/about-banner.png"}
      />

      {/* Section 1 — We Preach the Gospel */}
      <section className="py-24 lg:py-32">
        <Container size="wide" className="grid items-center gap-12 lg:grid-cols-2 lg:gap-24">
          {/* Image with overlapping quote card */}
          <Reveal direction="left">
            <div className="relative">
              <div className="shine relative aspect-[4/3] w-full max-w-lg overflow-hidden">
                <Image
                   src={header?.image ?? "/we-preach-gospel.png"}
                  alt="Pastor David and Elaine"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
              </div>
              <div className="relative z-10 -mt-24 ml-auto mr-[-2rem] max-w-md bg-[#0f0f0f] p-6 text-cream-50 sm:-mt-28 sm:mr-[-3rem] sm:p-8 lg:mr-[-4rem]">
                <p className="font-body text-xl font-medium leading-snug sm:text-2xl">
                  &ldquo;Don&apos;t tell God how big your storm is, tell the storm
                  how big your God is&rdquo;
                </p>
              </div>
            </div>
          </Reveal>

          {/* Text */}
           {/* Text */}
          <Reveal direction="right">
            <GospelText />
          </Reveal>
        </Container>
      </section>

      {/* Section 2 — Why We Exist */}
      <section className="py-24 lg:py-32">
        <Container size="wide" className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal direction="left">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink">
                Our Mission &amp; Values
              </p>
              <h2 className="mt-4 font-body text-4xl font-extrabold leading-tight tracking-tight text-ink sm:text-5xl">
                Why We Exist
              </h2>
              <p className="mt-6 text-[17px] leading-relaxed text-muted">
                Our mission is to lead people into a growing relationship with
                Jesus Christ by creating meaningful worship, fostering authentic
                relationships, and faithfully serving both our local community and
                beyond. We live this out through our four core values.
              </p>
            </div>
          </Reveal>

          <div className="flex flex-col justify-center">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.12}>
                <div
                  className={`grid grid-cols-[auto_1fr] items-start gap-4 py-5 ${
                    i > 0 ? "border-t border-ink/10" : ""
                  }`}
                >
                  <p className="flex items-center gap-2 whitespace-nowrap text-sm font-bold uppercase text-wine-700">
                    {v.title}
                    <span className="h-px w-5 bg-wine-700" />
                  </p>
                  <p className="text-sm text-muted">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Section 3 — Pastor David (full-bleed) */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/pstdavid-pics.png"
            alt="Pastor David"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-wine-900/70" />
        </div>
        <Container size="wide" className="py-20 lg:py-28">
          <Reveal direction="left">
            <div className="mr-auto max-w-xl text-cream-50">
              <p className="text-base leading-relaxed sm:text-lg">
                Pastor David is passionate about helping people take the next step
                in their faith, whether it&apos;s through Sunday messages,
                mentoring, or simply sharing life together. He&apos;s intentional
                about creating opportunities for people to grow, and his
                down-to-earth approach makes spiritual growth feel both natural and
                attainable for everyone. You&apos;ll often find him connecting with
                families after service, encouraging volunteers, or cheering on the
                youth ministry. His heart for people shines through in the way he
                makes time for meaningful conversations, genuine relationships, and
                joyfully celebrating milestones both big and small.
              </p>
              <p className="mt-8 text-lg italic text-cream-100/90">
                &ldquo;Ministry is about people, not programs.&rdquo;
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Section 4 — Be Part of Our Story */}
      <section className="py-24 lg:py-32">
        <Container size="wide" className="text-center">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-ink">
              Shaped by Faith, United in Love
            </p>
            <h2 className="mt-6 font-body text-4xl font-extrabold uppercase tracking-tight text-ink sm:text-5xl">
              Be Part of Our Story
            </h2>
            <p className="mx-auto mt-6 max-w-4xl text-3xl leading-relaxed text-muted">
              <span className="font-semibold text-ink">The People Church Falkirk</span>{" "}
              is more than a place—it&apos;s a<br />
              community. Every friendship, and every act of service is part<br />
              of something bigger. We&apos;d love for you to add your story.
            </p>
          </Reveal>
        </Container>
      </section>
    </>
  );
}