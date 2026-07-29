import { site } from "@/lib/config/site";

export function MapEmbed({ className }: { className?: string }) {
  const { lat, lng } = site.map;
  const d = 0.012; // zoom box size — smaller = more zoomed in
  const bbox = [lng - d, lat - d, lng + d, lat + d].join("%2C");
  const src = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat}%2C${lng}`;

  // Opens Google Maps directions to the church
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;

  return (
    <div className={`relative overflow-hidden rounded-card border border-wine-700/10 shadow-sm ${className ?? ""}`}>
      <iframe
        title={`Map to ${site.name}`}
        src={src}
        className="h-full w-full"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />

      {/* Clickable overlay → opens Google Maps directions */}
      <a
        href={directionsUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Get directions to ${site.name} on Google Maps`}
        className="group absolute inset-0 flex items-end justify-center bg-transparent"
      >
        <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-wine-800 px-5 py-2.5 text-sm font-semibold text-cream-50 shadow-lg transition-transform group-hover:scale-105">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M12 21s7-6.3 7-11a7 7 0 1 0-14 0c0 4.7 7 11 7 11z" stroke="currentColor" strokeWidth="2" />
            <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="2" />
          </svg>
          Get Directions
        </span>
      </a>
    </div>
  );
}