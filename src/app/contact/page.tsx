import Image from "next/image";
import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { MapEmbed } from "@/components/MapEmbed";
import { site } from "@/lib/config/site";
import { ContactFormFull } from "@/components/forms/ContactForm";
import { Reveal } from "@/components/motion/Reveal";
import { getPageHeader } from "@/lib/api";

export const metadata: Metadata = { title: "Contact Us" };

const services = [
  { name: "Sunday Worship", time: "11:00 AM & 06:45 PM" },
  { name: "Bible Study", time: "07:30 PM" },
  { name: "Prayer Meeting", time: "06:30 PM & 07:30 PM" },
];

export default async function ContactPage() {
  const header = await getPageHeader("contact");

  return (
    <>
      <PageHeader
        eyebrow={header?.eyebrow ?? "We're Listening"}
        title={header?.title ?? "Contact Us"}
        subtitle={header?.subtitle ?? "Learn about who we are and what we believe"}
        image={header?.image ?? "/contact-pics.png"}
      />

      {/* Body — info left, form right */}
      <section className="overflow-hidden py-20 lg:py-24">
        <Container size="wide" className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: image + church info */}
          <Reveal direction="left">
            <div className="lg:border-r lg:border-ink/10 lg:pr-16">
              <div className="shine relative aspect-[4/3] w-full max-w-md overflow-hidden">
                <Image
                  src="/contact-slide-form.jpg"
                  alt="The People Church Falkirk"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
              </div>

              <h2 className="mt-6 font-body text-2xl font-extrabold text-ink">
                The People Church Falkirk
              </h2>

              <p className="mt-4 flex items-start gap-2 text-sm text-ink">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="mt-0.5 shrink-0 text-wine-700" aria-hidden>
                  <path d="M12 21s7-6.3 7-11a7 7 0 1 0-14 0c0 4.7 7 11 7 11z" stroke="currentColor" strokeWidth="2" />
                  <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="2" />
                </svg>
                West Bridge Street, Falkirk, FK1 5RJ, United Kingdom
              </p>

              <div className="mt-4 space-y-1 text-sm text-ink">
                <p><a href={`tel:${site.phone}`} className="hover:text-wine-700">+44 1324 633100</a></p>
                <p><a href="mailto:office@pcfministries.org" className="hover:text-wine-700">office@pcfministries.org</a></p>
              </div>

              <p className="mt-6 text-sm leading-relaxed text-muted">
                We&apos;d love to welcome you this Sunday or at one of our upcoming
                gatherings. Find our service times below:
              </p>

              <ul className="mt-4 space-y-1.5 text-sm text-ink">
                {services.map((s) => (
                  <li key={s.name}>
                    + {s.name} <span className="text-muted">— {s.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Right: form */}
          <Reveal direction="right">
            <div>
              <h2 className="mb-6 font-body text-2xl font-extrabold text-wine-700 sm:text-3xl">
                Send us a Message
              </h2>
              <ContactFormFull />
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Visit Us — map */}
      <section className="pb-24">
        <Container size="wide">
          <Reveal>
            <span className="block h-0.5 w-10 bg-ink/70" />
            <h2 className="mt-5 font-body text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              Visit Us
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <MapEmbed className="mt-8 h-[460px] w-full" />
          </Reveal>
        </Container>
      </section>
    </>
  );
}