import { site } from "@/lib/config/site";

export function MapEmbed({ className }: { className?: string }) {
  const { lat, lng } = site.map;
  const d = 0.012; // zoom box size — smaller = more zoomed in
  const bbox = [lng - d, lat - d, lng + d, lat + d].join("%2C");
  const src = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat}%2C${lng}`;

  return (
    <div className={`overflow-hidden rounded-card border border-wine-700/10 shadow-sm ${className ?? ""}`}>
      <iframe
        title={`Map to ${site.name}`}
        src={src}
        className="h-full w-full"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}