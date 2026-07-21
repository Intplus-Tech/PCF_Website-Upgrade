import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { VisitSection } from "@/components/sections/VisitSection";
import { getStaff } from "@/lib/api";
import { site } from "@/lib/config/site";
import Link from "next/link";
import { GetInvolved } from "@/components/sections/GetInvolved";
import { Float } from "@/components/motion/Float";
import { Reveal } from "@/components/motion/Reveal";

export default async function HomePage() {
  const [pastors] = await getStaff();

  return (
    <>
      {/* Hero */}
      <div style={{ backgroundColor: "#F5F5F5" }}>
        <section className="relative isolate overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <video
              autoPlay
              muted
              loop
              playsInline
              poster="/pcf-poster.jpg"
              className="h-full w-full object-cover"
            >
              <source src="/pcf-video.mp4" type="video/mp4" />
            </video>
          </div>
          <Container className="flex min-h-screen flex-col justify-start space-y-6 pb-24 pt-56 text-cream-50 sm:pt-40 lg:pt-72">
            <Reveal>
              <h1 className="max-w-3xl font-body text-5xl font-extrabold leading-[1.03] tracking-tight sm:text-6xl md:text-7xl">
                A Place Where Worship Inspires.
              </h1>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-8">
                <span className="inline-flex items-center rounded-full border border-cream-50/20 bg-wine-900/50 px-6 py-2.5 text-sm font-medium text-cream-50/90 backdrop-blur-sm sm:text-base">
                  {site.heroPill}
                </span>
              </div>
            </Reveal>
          </Container>
        </section>
      </div>

      <div style={{ backgroundColor: "#F5F5F5" }}>
        <GetInvolved />
      </div>

      {/* Grey band: Mission + Pastors + Visit */}
      <div style={{ backgroundColor: "#F5F5F5" }}>
        {/* Mission — image left, card overlapping right */}
        <section className="py-20 lg:py-24">
          <Container>
            <div className="relative">
              <Reveal direction="left">
                <div className="relative aspect-[4/3] w-full overflow-hidden shadow-md lg:mr-auto lg:aspect-[759/680] lg:w-[759px] lg:max-w-[62%]">
                  <Image
                    src="/Godmission-pics.png"
                    alt="Hands resting on a Bible in prayer"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 62vw"
                  />
                </div>
              </Reveal>

              <Float className="relative z-10 mx-4 -mt-20 border border-wine-700/10 bg-cream-50 p-8 shadow-xl lg:absolute lg:right-4 lg:top-[75%] lg:mx-0 lg:mt-0 lg:min-h-[414px] lg:w-[46%] lg:-translate-y-1/2 lg:p-10">
                <span className="block h-0.5 w-10 bg-ink/70" />
                <h2 className="mt-5 font-body text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl">
                  God&apos;s mission has no edges. Ours doesn&apos;t either
                </h2>
                <p className="mt-4 text-[15px] leading-relaxed text-muted">
                  We may be one church in one town, but our reach extends far beyond
                  Falkirk. Through prayer, giving, and partnership, we&apos;re part of
                  something bigger — God&apos;s mission to every nation and every person.
                </p>
              </Float>
            </div>
          </Container>
        </section>

        {/* Pastors — card left, image overlapping right */}
        <section className="py-20 lg:py-24">
          <Container>
            <div className="relative">
              <Reveal direction="right">
                <div className="relative aspect-[4/3] w-full overflow-hidden shadow-md lg:ml-auto lg:aspect-[759/680] lg:w-[759px] lg:max-w-[62%]">
                  <Image
                    src="/Meetdavid-pics.jpg"
                    alt="Open Bible on a table"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 759px"
                  />
                </div>
              </Reveal>

              <Float className="relative z-10 mx-4 -mt-20 border border-wine-700/10 bg-cream-50 p-8 shadow-xl lg:absolute lg:left-4 lg:top-[45%] lg:mx-0 lg:mt-0 lg:w-[46%] lg:-translate-y-1/2 lg:p-10">
                <span className="block h-0.5 w-10 bg-ink/70" />
                <h2 className="mt-5 font-body text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl">
                  Meet David &amp; Elaine Morrison our beloved pastors
                </h2>
                <p className="mt-4 text-[15px] leading-relaxed text-muted">
                  They have built a church where faith is real, community runs deep, and
                  every person is welcomed like family. Their vision is simple: a church
                  where you encounter God, find your people, and step into the life you
                  were made for.
                </p>
                <div className="mt-6 flex justify-center">
                  <Link
                    href="/about"
                    className="inline-flex rounded-md bg-wine-700 px-4 py-2 text-xs font-semibold text-cream-50 transition-colors hover:bg-wine-800"
                  >
                    Learn more About us
                  </Link>
                </div>
              </Float>
            </div>
          </Container>
        </section>

        <VisitSection />
      </div>

      {/* Closing CTA */}
      <div style={{ backgroundColor: "#F5F5F5" }}>
        <section className="relative isolate overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <Image
              src="/Findpeople-pics.png"
              alt="Congregation worshipping with hands raised"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
          <Container className="py-28 text-center text-cream-50">
            <Reveal>
              <h2 className="mx-auto max-w-3xl font-body text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl">
                Find your people. Find your purpose.
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-10">
                <Link
                  href="/contact"
                  className="inline-flex rounded-md bg-wine-700 px-7 py-3 text-base font-medium text-cream-50 transition-colors hover:bg-wine-800"
                >
                  Contact Us
                </Link>
              </div>
            </Reveal>
          </Container>
        </section>
      </div>
    </>
  );
}