import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { MapEmbed } from "@/components/MapEmbed";
import { ContactFormFull } from "@/components/forms/ContactForm";
import { AdditionalForms } from "@/components/contact/AdditionalForms";
import { Reveal } from "@/components/motion/Reveal";
import { site } from "@/lib/config/site";
import { getPageHeader } from "@/lib/api";

export const metadata: Metadata = { title: "Contact Us" };

const addressParts = ["West Bridge St", "Falkirk", "Scotland", "FK1 5RJ"];

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
        // eyebrow={header?.eyebrow ?? "We're Listening"}
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

          {/* Additional contact forms — cards open each form in a modal */}
          <div className="mt-14 border-t border-ink/15 pt-10 lg:mt-16">
            <Reveal>
              <h2 className="font-body text-2xl font-extrabold tracking-tight text-wine-700 sm:text-3xl">
                Additional Contact Forms
              </h2>
            </Reveal>

            <AdditionalForms />
          </div>
        </Container>
      </section>
    </>
  );
}
