import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { VisitSection } from "@/components/sections/VisitSection";
import { getHomepage, getInvolvedCards } from "@/lib/api";
import { site } from "@/lib/config/site";
import Link from "next/link";
import { GetInvolved } from "@/components/sections/GetInvolved";
import { Float } from "@/components/motion/Float";
import { Reveal } from "@/components/motion/Reveal";
import { RotatingHeadline } from "@/components/motion/RotatingHeadline";

export default async function HomePage() {
  const [home, cards] = await Promise.all([
    getHomepage(),
    getInvolvedCards(),
  ]);

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
              className="h-full w-full object-cover object-[center_30%]"
            >
              <source src={home?.heroVideoUrl ?? "/hero-new-video.mp4"} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-black/20" />
          </div>
          {/* min-h-svh avoids the mobile address-bar jump that 100vh causes */}
          <Container className="flex min-h-[80svh] flex-col justify-center space-y-4 pb-16 pt-40 text-cream-50 sm:space-y-6 sm:pb-20 sm:pt-52 lg:min-h-[78vh] lg:pt-64">
            <RotatingHeadline prefix={home?.heroPrefix} phrases={home?.heroPhrases} />
            <Reveal delay={0.3}>
              <div className="mt-6 sm:mt-8">
                <span className="inline-flex items-center rounded-full border border-cream-50/20 bg-wine-900/50 px-5 py-2 text-xs font-medium text-cream-50/90 backdrop-blur-sm sm:px-6 sm:py-2.5 sm:text-base">
                  {home?.heroPill ?? site.heroPill}
                </span>
              </div>
            </Reveal>
          </Container>
        </section>
      </div>

      <div style={{ backgroundColor: "#F5F5F5" }}>
        <GetInvolved cards={cards} />
      </div>

      {/* Grey band: Mission + Pastors + Visit */}
      <div style={{ backgroundColor: "#F5F5F5" }}>
        {/* Mission */}
        <section className="overflow-x-clip py-12 sm:py-16 lg:py-24">
          <Container size="full">
            <div className="relative">
              <Reveal direction="left">
                <div className="relative aspect-[4/3] w-full overflow-hidden shadow-md lg:mr-auto lg:aspect-[759/680] lg:w-[68%]">
                  <Image
                    src={home?.missionImage ?? "/Godmission-pics.png"}
                    alt="Hands resting on a Bible in prayer"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 68vw"
                  />
                </div>
              </Reveal>

              <Float className="relative z-10 mx-3 -mt-12 sm:mx-4 sm:-mt-20 lg:absolute lg:right-0 lg:top-[75%] lg:mx-0 lg:mt-0 lg:w-[40%] lg:-translate-y-1/2">
                <Link
                  href="/about"
                  className="group block border border-wine-700/10 bg-cream-50 p-6 shadow-xl transition-all hover:border-wine-700/30 hover:shadow-2xl sm:p-8 lg:min-h-[520px] lg:p-12"
                >
                  <span className="block h-0.5 w-10 bg-ink/70" />
                  <h2 className="mt-5 font-body text-2xl font-bold leading-tight tracking-tight text-ink sm:mt-6 sm:text-[32px] sm:tracking-[-1.05px] lg:text-[41.96px] lg:leading-[52.45px]">
                    {home?.missionHeading ?? "God's mission has no edges. Ours doesn't either"}
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-muted sm:mt-5 sm:text-[18px] lg:text-[25.86px] lg:leading-[36.2px]">
                    {home?.missionText ?? "We may be one church in one town, but our reach extends far beyond Falkirk. Through prayer, giving, and partnership, we're part of something bigger — God's mission to every nation and every person."}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 rounded-lg bg-wine-700 px-5 py-2.5 text-sm font-semibold text-cream-50 transition-colors group-hover:bg-wine-800">
                    Learn more
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="transition-transform group-hover:translate-x-1">
                      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </Link>
              </Float>
            </div>
          </Container>
        </section>

        {/* Pastors */}
        <section className="overflow-x-clip py-12 sm:py-16 lg:py-24">
          <Container size="full">
            <div className="relative">
              <Reveal direction="right">
                <div className="relative aspect-[4/3] w-full overflow-hidden shadow-md lg:ml-auto lg:aspect-[759/680] lg:w-[68%]">
                  <Image
                    src={home?.pastorsImage ?? "/Meetdavid-pics.jpg"}
                    alt="Open Bible on a table"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 68vw"
                  />
                </div>
              </Reveal>

              <Float className="relative z-10 mx-3 -mt-12 border border-wine-700/10 bg-cream-50 p-6 shadow-xl sm:mx-4 sm:-mt-20 sm:p-8 lg:absolute lg:left-0 lg:top-[45%] lg:mx-0 lg:mt-0 lg:min-h-[520px] lg:w-[40%] lg:-translate-y-1/2 lg:p-12">
                <span className="block h-0.5 w-10 bg-ink/70" />
                <h2 className="mt-5 font-body text-2xl font-bold leading-tight tracking-tight text-ink sm:mt-6 sm:text-[32px] sm:tracking-[-1.05px] lg:text-[41.96px] lg:leading-[52.45px]">
                  {home?.pastorsHeading ?? "Meet David & Elaine Morrison our beloved pastors"}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted sm:mt-5 sm:text-[18px] lg:text-[25.86px] lg:leading-[36.2px]">
                  {home?.pastorsText ?? "They have built a church where faith is real, community runs deep, and every person is welcomed like family. Their vision is simple: a church where you encounter God, find hope in Jesus, and step into the life you were made for."}
                </p>
                <div className="mt-7 flex justify-center sm:mt-8">
                  <Link
                    href="/about"
                    className="group inline-flex items-center gap-2 rounded-lg bg-wine-700 px-5 py-2.5 text-sm font-semibold text-cream-50 transition-colors hover:bg-wine-800"
                  >
                    {home?.pastorsButtonLabel ?? "Learn more"}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="transition-transform group-hover:translate-x-1">
                      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
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
              src={home?.ctaImage ?? "/Findpeople-pics.png"}
              alt="Congregation worshipping with hands raised"
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-black/20" />
          </div>
          <Container className="py-20 text-center text-cream-50 sm:py-28 lg:py-40">
            <Reveal>
              <h2 className="mx-auto max-w-3xl font-body text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl">
                {home?.ctaHeading ?? "Find hope in Jesus."}
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-8 sm:mt-10">
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
