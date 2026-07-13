import Image from "next/image";
import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { VideoModal } from "@/components/media/VideoModal";
import { SermonCarousel } from "@/components/media/SermonCarousel";
import { getSermons } from "@/lib/api";


export const metadata: Metadata = { title: "Media" };

const carouselSermons = [
  { id: "s1", title: "Faith that Moves", speaker: "Pastor David", ago: "2 Days Ago", text: "Come as you are. Leave with something real — worship that moves you and truth that anchors you.", image: "/mediafaith-pics.png" },
  { id: "s2", title: "Walking in Prayer", speaker: "Pastor David", ago: "Week Ago", text: "Loud worship. Open hearts. One message that transforms lives, families, and communities.", image: "/mediawork-pics.png" },
  { id: "s3", title: "Holy Spirit Power", speaker: "Pastor David", ago: "Week Ago", text: "Every person carries a destiny. Discover yours — with people who'll walk the journey with you.", image: "/mediaholy-pics.jpg" },
];

export default async function MediaPage() {
  const carouselSermons = await getSermons();
  return (
    <>
      <PageHeader
        eyebrow="Watch & Listen"
        title="Media"
        subtitle="Catch up on recent messages and revisit the teaching that's shaping our church."
        image="/media-pics.png"
      />
   
      {/* Section 1 — Your Destiny feature */}
      <section className="py-16 lg:py-20">
        {/* <Container size="wide" className="grid items-center gap-10 overflow-hidden lg:grid-cols-[1.3fr_1fr]"> */}
        <Container size="wide" className="grid items-center gap-10 lg:grid-cols-[1.3fr_1fr]">
          {/* Image + overlapping video card */}
          <div className="relative">
            <div className="relative aspect-[5/4] w-full overflow-hidden rounded-xl">
              <Image src="/media-pics.png" alt="PCF family" fill className="object-cover" sizes="50vw" />
            </div>
           <div className="relative z-10 mx-auto -mt-16 w-56 sm:-mt-24 sm:w-64 lg:ml-auto lg:mr-4">
              <VideoModal label="Watch Our Video" poster="/mediaholy-pics.jpg" />
            </div>
          </div>

          {/* Text */}
        <div className="flex flex-col justify-center">
  <span className="block h-0.5 w-10 bg-ink/70" />
  <h2 className="mt-4 font-body text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl">
  Your Destiny -<br />
  <span className="sm:whitespace-nowrap">Tuesday &amp; Thursday Evenings</span>
</h2>
  <p className="mt-4 max-w-md leading-relaxed text-muted">
    Looking to go deeper? &ldquo;Your Destiny&rdquo; is our mid-week
    fellowship and discipleship program. It&apos;s a space for deeper
    bible study, honest questions, and building lifelong friendships
    within the PCF Family.
  </p>
  <ul className="mt-6 space-y-2 text-sm text-wine-700">
    <li className="flex items-center gap-2"><CalIcon /> Every Tuesday &amp; Thursday</li>
    <li className="flex items-center gap-2"><PinIcon /> West Bridge Street, Falkirk</li>
    <li className="flex items-center gap-2"><ClockIcon /> 7:30 PM - 9:00PM</li>
  </ul>
  <div className="mt-6 flex flex-wrap gap-3">
    <button className="rounded-md bg-wine-800 px-5 py-2.5 text-sm font-semibold text-cream-50 transition-colors hover:bg-wine-700">
      Watch Past Recordings
    </button>
    <a href="/visit" className="inline-flex items-center gap-2 rounded-md border border-wine-700/40 px-5 py-2.5 text-sm font-semibold text-wine-700 transition-colors hover:bg-wine-700 hover:text-cream-50">
      Join in Person →
    </a>
  </div>
</div>
        </Container>
      </section>

      {/* Section 2 — search + featured (image left, text right) */}
      <section className="py-12 lg:py-16">
        <Container size="wide">
          {/* Search / filter bar */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="relative w-full max-w-[449px]">
  <svg className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" width="16" height="16" viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2"/><path d="M21 21l-4-4" stroke="currentColor" strokeWidth="2"/></svg>
  <input placeholder="Search by speaker, topic, title,..." className="h-[49px] w-full rounded-lg border border-ink/15 bg-white pl-10 pr-4 text-sm focus:border-wine-700 focus:outline-none" />
</div>
            <div className="flex gap-2">
              <button className="rounded-full border border-ink/15 px-4 py-2 text-sm">Series ▾</button>
              <button className="rounded-full border border-ink/15 px-4 py-2 text-sm">Speaker ▾</button>
              <button className="rounded-full bg-wine-800 px-5 py-2 text-sm font-semibold text-cream-50">All</button>
            </div>
          </div>

          {/* Featured series */}
          <div className="mt-10 grid items-center gap-10 lg:grid-cols-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
              <Image src="/media-pics.png" alt="The Book Of Plan" fill className="object-cover" sizes="50vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-wine-900/70 to-transparent" />
              <div className="absolute bottom-6 left-6 text-cream-50">
                <p className="text-sm uppercase tracking-[0.3em]">Featured Series</p>
                <p className="font-body text-4xl font-extrabold">The Book Of Plan</p>
              </div>
            </div>
           <div>
  <span className="block h-0.5 w-10 bg-ink/70" />
  <h2 className="mt-4 max-w-md font-body text-3xl font-extrabold leading-tight text-ink sm:text-4xl">
    Discovering Light in the Darkness
  </h2>
  <p className="mt-4 leading-relaxed text-muted">
    Pastor David Morrison leads us through an in-depth study of the
    Gospel of John, exploring the divine nature of Christ and the
    life-changing power of his grace.
  </p>
  <div className="mt-5 flex items-center gap-3">
    <div className="relative h-10 w-10 overflow-hidden rounded-full">
      <Image src="/david-pics.png" alt="Pastor David Morrison" fill className="object-cover" sizes="40px" />
    </div>
    <div>
      <p className="text-sm font-bold text-ink">Pastor David Morrison</p>
      <p className="text-xs text-muted">Senior Pastor</p>
    </div>
  </div>
  <button className="mt-6 inline-flex items-center gap-2 rounded-md bg-wine-800 px-5 py-2.5 text-sm font-semibold text-cream-50 transition-colors hover:bg-wine-700">
    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
    Watch Series
  </button>
</div>
          </div>

          {/* Section 3 — text left, image right */}
          <div className="mt-16 grid items-center gap-10 lg:grid-cols-2">
            <div className="lg:order-1">
              <span className="block h-0.5 w-10 bg-ink/70" />
              <h2 className="mt-4 font-body text-3xl font-extrabold leading-tight text-ink sm:text-4xl">
                Foundational Principals of Faith
              </h2>
              <p className="mt-4 leading-relaxed text-muted">
                Pastor David Morrison says, In a world that keeps shifting, your
                foundation matters more than ever. Pastor David Morrison brings a
                powerful word on building your life on Christ&apos;s unshakeable truth.
              </p>
              <div className="mt-5 flex items-center gap-3">
                <div className="relative h-10 w-10 overflow-hidden rounded-full">
                  <Image src="/david-pics.png" alt="Pastor David Morrison" fill className="object-cover" sizes="40px" />
                </div>
                <div>
                  <p className="text-sm font-bold text-ink">Pastor David Morrison</p>
                  <p className="text-xs text-muted">Senior Pastor</p>
                </div>
              </div>
              <button className="mt-6 inline-flex items-center gap-2 rounded-md bg-wine-800 px-5 py-2.5 text-sm font-semibold text-cream-50 transition-colors hover:bg-wine-700">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
                Watch Series
              </button>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl lg:order-2">
              <Image src="/media-pics.png" alt="Building on the Rock" fill className="object-cover" sizes="50vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-wine-900/70 to-transparent" />
              <div className="absolute bottom-6 left-6 text-cream-50">
                <p className="text-sm uppercase tracking-[0.3em]">Featured Series</p>
                <p className="font-body text-4xl font-extrabold">Building on the Rock</p>
              </div>
            </div>
          </div>

          <div className="mt-10 text-center">
            <button className="rounded-md bg-wine-800 px-8 py-3 text-sm font-semibold text-cream-50 transition-colors hover:bg-wine-700">
              Load More
            </button>
          </div>
        </Container>
      </section>

      {/* Section 4 — Your Sermon. Your Moment. carousel */}
      <section className="py-16 lg:py-20" style={{ backgroundColor: "#F5F5F5" }}>
        <Container size="wide">
          <SermonCarousel sermons={carouselSermons} />
        </Container>
      </section>
    </>
  );
}

function CalIcon() {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="shrink-0"><rect x="3" y="4" width="18" height="17" rx="2" stroke="currentColor" strokeWidth="2"/><path d="M3 9h18M8 2v4M16 2v4" stroke="currentColor" strokeWidth="2"/></svg>;
}
function PinIcon() {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="shrink-0"><path d="M12 21s7-6.3 7-11a7 7 0 1 0-14 0c0 4.7 7 11 7 11z" stroke="currentColor" strokeWidth="2"/><circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="2"/></svg>;
}
function ClockIcon() {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="shrink-0"><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/><path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="2"/></svg>;
}
