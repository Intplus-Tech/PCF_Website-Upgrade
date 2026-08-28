import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { MapEmbed } from "@/components/MapEmbed";
import { ContactFormFull } from "@/components/forms/ContactForm";
import { Reveal } from "@/components/motion/Reveal";
import { site } from "@/lib/config/site";
import { getPageHeader } from "@/lib/api";

export const metadata: Metadata = { title: "Contact Us" };

const addressParts = ["West Bridge St", "Falkirk", "Scotland", "FK1 5RJ"];

// TODO: point these at the real form pages once they exist.
const additionalForms = [
  { title: "Join a ministry", href: "#", image: "/contact-slide-form.jpg" },
  { title: "Prayer Request", href: "#", image: "/contact-slide-form.jpg" },
  { title: "Testimonials", href: "#", image: "/contact-slide-form.jpg" },
];

function PinIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      className="shrink-0 text-muted"
    >
      <path
        d="M12 21s7-6.3 7-11a7 7 0 1 0-14 0c0 4.7 7 11 7 11z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

export default async function ContactPage() {
  const header = await getPageHeader("contact");

  return (
    <>
      <PageHeader
        eyebrow={header?.eyebrow ?? "We're Listening"}
        title={header?.title ?? "Contact Us"}
        subtitle={
          header?.subtitle ?? "Learn about who we are and what we believe"
        }
        image={header?.image ?? "/contact-pics.png"}
        imagePosition="object-top"
      />

      <section style={{ backgroundColor: "#F5F5F5" }} className="py-14 lg:py-20">
        <Container size="wide">
          {/* Form left · map + details right */}
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
            {/* Form */}
            <Reveal direction="left">
              <div className="rounded-2xl bg-white p-6 shadow-sm sm:p-8 lg:p-10">
                <h2 className="font-body text-2xl font-extrabold tracking-tight text-wine-700 sm:text-3xl">
                  Get In Touch
                </h2>
                <div className="mt-6">
                  <ContactFormFull />
                </div>
              </div>
            </Reveal>

            {/* Map + address */}
            <Reveal direction="right">
              <div>
                <MapEmbed className="h-[380px] w-full overflow-hidden rounded-2xl sm:h-[460px] lg:h-[560px]" />

                {/* Address parts */}
                <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
                  {addressParts.map((part) => (
                    <span
                      key={part}
                      className="inline-flex items-center gap-2 text-sm text-ink sm:text-base"
                    >
                      <PinIcon />
                      {part}
                    </span>
                  ))}
                </div>

                {/* Tel + email */}
                <div className="mt-4 flex flex-wrap items-center gap-x-8 gap-y-2 text-sm">
                  <span className="inline-flex items-center gap-2 text-ink">
                    <span className="h-1.5 w-1.5 rounded-full bg-ink/50" />
                    Tel:{" "}
                    <a
                      href={`tel:${site.phone}`}
                      className="transition-colors hover:text-wine-700"
                    >
                      01324 633100
                    </a>
                  </span>
                  <span className="inline-flex items-center gap-2 text-ink">
                    <span className="h-1.5 w-1.5 rounded-full bg-ink/50" />
                    Email:{" "}
                    <a
                      href={`mailto:${site.email}`}
                      className="underline transition-colors hover:text-wine-700"
                    >
                      {site.email}
                    </a>
                  </span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Additional contact forms */}
          <div className="mt-14 border-t border-ink/15 pt-10 lg:mt-16">
            <Reveal>
              <h2 className="font-body text-2xl font-extrabold tracking-tight text-wine-700 sm:text-3xl">
                Additional Contact Forms
              </h2>
            </Reveal>

            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {additionalForms.map((card, i) => (
                <Reveal key={card.title} delay={i * 0.1}>
                  <Link
                    href={card.href}
                    className="group relative block h-32 overflow-hidden rounded-xl sm:h-36"
                  >
                    <Image
                      src={card.image}
                      alt=""
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-wine-900/45 transition-colors group-hover:bg-wine-900/60" />
                    <span className="absolute inset-0 flex flex-col items-center justify-center gap-1 text-center">
                      <span className="font-display text-xl font-bold text-cream-50 sm:text-2xl">
                        {card.title}
                      </span>
                      <span className="text-[11px] font-semibold text-cream-50/90">
                        Click to see the form
                      </span>
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
