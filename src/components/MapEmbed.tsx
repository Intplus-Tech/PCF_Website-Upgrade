import Image from "next/image";
import { site } from "@/lib/config/site";

// Copied from Google Maps → Share → Embed a map.
// To change the view: zoom to the church on Google Maps first, then re-copy.
const GOOGLE_EMBED_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4569076.173126106!2d-13.013305664062484!3d56.001452700329764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48887a30a2649ea9%3A0x9292ce877cee2e19!2sPeoples%20Church!5e0!3m2!1sen!2sng!4v1787855367017!5m2!1sen!2sng";

const ADDRESS = "West Bridge St, Falkirk FK1 5RJ, United Kingdom";

// Google rating shown on the listing. Update by hand — reading this live would
// need the Google Places API (billing-enabled key + server-side fetch).
const RATING = "4.8";
const REVIEW_COUNT = 20;

function StarIcon({ filled = true }: { filled?: boolean }) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden
      className="shrink-0 text-gold-500"
    >
      <path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4 6.1 20.5l1.2-6.5L2.5 9.4l6.6-.9 2.9-6z" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden className="mt-0.5 shrink-0 text-wine-700">
      <path d="M12 21s7-6.3 7-11a7 7 0 1 0-14 0c0 4.7 7 11 7 11z" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden className="shrink-0 text-wine-700">
      <path
        d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function MapEmbed({
  className,
  /** Photo of the church shown at the top of the info card. */
  image = "/contact-slide-form.jpg",
  /** Set false for a full-bleed, edge-to-edge map (no corners or border). */
  rounded = true,
}: {
  className?: string;
  image?: string;
  rounded?: boolean;
}) {
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    ADDRESS,
  )}`;

  return (
    <div
      className={`relative overflow-hidden ${
        rounded ? "rounded-card border border-wine-700/10 shadow-sm" : ""
      } ${className ?? ""}`}
    >
      <iframe
        title={`Map to ${site.name}`}
        src={GOOGLE_EMBED_SRC}
        className="h-full w-full"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="strict-origin-when-cross-origin"
      />

      {/* Info card — pointer-events-none on the wrapper keeps the map draggable */}
      <div className="pointer-events-none absolute inset-0 flex items-end p-3 sm:p-6 lg:p-10">
        <div className="pointer-events-auto w-full max-w-[260px] overflow-hidden rounded-xl bg-white shadow-xl lg:max-w-[300px]">
          <div className="relative h-24 w-full lg:h-32">
            <Image
              src={image}
              alt={site.name}
              fill
              className="object-cover"
              sizes="300px"
            />
          </div>

          <div className="p-3.5 lg:p-4">
            <p className="font-body text-sm font-bold leading-tight text-ink lg:text-base">
              {site.name}
            </p>

            <div className="mt-1 flex items-center gap-1.5">
              <span className="text-xs font-semibold text-ink">{RATING}</span>
              <span className="flex items-center gap-0.5">
                {[0, 1, 2, 3, 4].map((i) => (
                  <StarIcon key={i} filled={i < Math.round(Number(RATING))} />
                ))}
              </span>
              <span className="text-[11px] text-muted">({REVIEW_COUNT})</span>
            </div>

            <p className="mt-0.5 text-[11px] text-muted">Church</p>

            <p className="mt-3 flex items-start gap-2 text-[11px] leading-relaxed text-ink lg:text-xs">
              <PinIcon />
              {ADDRESS}
            </p>

            <p className="mt-2 flex items-center gap-2 text-[11px] text-ink lg:text-xs">
              <PhoneIcon />
              <a href={`tel:${site.phone}`} className="hover:text-wine-700">
                {site.phone}
              </a>
            </p>

            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Get directions to ${site.name} on Google Maps`}
              className="mt-3.5 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-wine-800 px-4 py-2 text-xs font-semibold text-cream-50 transition-colors hover:bg-wine-700"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M12 21s7-6.3 7-11a7 7 0 1 0-14 0c0 4.7 7 11 7 11z" stroke="currentColor" strokeWidth="2" />
                <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="2" />
              </svg>
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
