import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
  tone = "ink",
  className,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  align?: "left" | "center";
  tone?: "ink" | "cream";
  className?: string;
}) {
  const isCream = tone === "cream";
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em]",
            align === "center" && "justify-center",
            isCream ? "text-gold-400" : "text-wine-600",
          )}
        >
          <span
            className={cn(
              "h-px w-6",
              isCream ? "bg-gold-400" : "bg-wine-600",
            )}
          />
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "text-3xl leading-tight sm:text-4xl",
          isCream ? "text-cream-50" : "text-ink",
        )}
      >
        {title}
      </h2>
      {lead && (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed",
            isCream ? "text-cream-100" : "text-muted",
          )}
        >
          {lead}
        </p>
      )}
    </div>
  );
}
