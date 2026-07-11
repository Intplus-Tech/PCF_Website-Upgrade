import Image from "next/image";
import { site } from "@/lib/config/site";

export function Logo({
  size = 56,
  withWordmark = false,
}: {
  size?: number;
  withWordmark?: boolean;
  tone?: "wine" | "cream"; // kept so <Logo tone=... /> calls elsewhere don't break
}) {
  return (
    <span className="inline-flex items-center gap-3">
      <Image
        src="/pcf-logo.png"        // change to /pcf-logo.svg if yours is an SVG
        alt={`${site.name} logo`}
        width={size}
        height={size}
        priority
        className="shrink-0 object-contain"
      />
      {withWordmark && (
        <span className="font-display text-base font-semibold leading-tight text-cream-50">
          {site.shortName}
        </span>
      )}
    </span>
  );
}