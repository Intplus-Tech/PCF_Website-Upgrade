export function VideoModal({
  label = "Watch Our Video",
  poster,
  href = "https://www.youtube.com/channel/UCnLTOOGYZfXM7AF4YMR1tgQ",
}: {
  label?: string;
  poster: string;
  href?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group/card block w-full overflow-hidden rounded-xl bg-cream-50 p-2 text-left shadow-xl"
    >
      <div className="relative aspect-video overflow-hidden rounded-lg">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={poster} alt={label} className="h-full w-full object-cover" />
        <span className="absolute inset-0 flex items-center justify-center">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-cream-50/90 text-wine-700 shadow-md transition-transform group-hover/card:scale-110">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
          </span>
        </span>
      </div>
      <p className="py-3 text-center text-lg font-medium text-ink">{label}</p>
    </a>
  );
}