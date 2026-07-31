import type { ChurchEvent, Ministry, Sermon, StaffMember } from "@/types";
import { staff } from "@/lib/data/sermons";
import { client } from "@/sanity/client";
import { urlFor } from "@/sanity/image";



const DELAY = 0; // set >0 to simulate network latency while testing loading states

async function simulate<T>(data: T): Promise<T> {
  if (DELAY) await new Promise((r) => setTimeout(r, DELAY));
  return data;
}

function mapMinistry(doc: any): Ministry {
  return {
    slug: doc.slug?.current ?? "",
    name: doc.name ?? "",
    tagline: doc.tagline ?? "",
    description: doc.description ?? "",
    meetingTime: doc.meetingTime ?? "",
    leader: doc.leader ?? "",
    image: doc.image ? urlFor(doc.image).width(1200).url() : "",
    highlights: doc.highlights ?? [],
    layout: doc.layout,
    infoPills: doc.infoPills,
    expect: doc.expect,
    features: doc.features,
    quote: doc.quote,
    team: doc.team
      ? doc.team.map((t: any) => urlFor(t).width(300).url())
      : undefined,
    gallery: doc.gallery
      ? doc.gallery.map((g: any) => urlFor(g).width(1000).url())
      : undefined,
  };
}



export async function getMinistries(): Promise<Ministry[]> {
  try {
    const docs = await client.fetch(`*[_type == "ministry"] | order(order asc)`);
    return docs.map(mapMinistry);
  } catch (err) {
    console.error("getMinistries failed:", err);
    return [];
  }
}

// export async function getMinistry(slug: string): Promise<Ministry | null> {
//   const doc = await client.fetch(
//     `*[_type == "ministry" && slug.current == $slug][0]`,
//     { slug },
//   );
//   return doc ? mapMinistry(doc) : null;
// }

export async function getMinistry(slug: string): Promise<Ministry | null> {
  try {
    const doc = await client.fetch(
      `*[_type == "ministry" && slug.current == $slug][0]`,
      { slug },
    );
    return doc ? mapMinistry(doc) : null;
  } catch (err) {
    console.error("getMinistry failed:", err);
    return null;
  }
}

/* ----------------------------------------------------------------
 *  EVENTS & MEMORIES — from Sanity
 * ---------------------------------------------------------------- */

function mapEvent(doc: any): ChurchEvent {
  return {
    id: doc._id,
    title: doc.title ?? "",
    date: doc.date ?? "",
    time: doc.time ?? "",
    location: doc.location ?? "",
    description: doc.description ?? "",
    image: doc.image ? urlFor(doc.image).width(1200).url() : "",
  };
}


export async function getEvents(): Promise<ChurchEvent[]> {
  try {
    const docs = await client.fetch(`*[_type == "event"] | order(date asc)`);
    return docs.map(mapEvent);
  } catch (err) {
    console.error("getEvents failed:", err);
    return []; // fail gracefully — header just shows no events instead of crashing
  }
}


export async function getMemories(): Promise<string[]> {
  try {
    const docs = await client.fetch(
      `*[_type == "memory"] | order(order asc){ image }`,
    );
    return docs.map((d: any) => urlFor(d.image).width(1000).url());
  } catch (err) {
    console.error("getMemories failed:", err);
    return [];
  }
}



/* ----------------------------------------------------------------
 *  SERMONS — from Sanity
 * ---------------------------------------------------------------- */

function mapSermon(doc: any): Sermon {
  return {
    id: doc._id,
    title: doc.title ?? "",
    speaker: doc.speaker ?? "",
    series: doc.series ?? "",
    date: doc.date ?? "",
    ago: doc.ago ?? "",
    text: doc.description ?? "",
    description: doc.description ?? "",
    image: doc.image ? urlFor(doc.image).width(1200).url() : "",
    videoUrl: doc.videoUrl ?? "",
    featured: doc.featured ?? false,
  };
}



export async function getSermons(): Promise<Sermon[]> {
  try {
    const docs = await client.fetch(`*[_type == "sermon"] | order(order asc)`);
    return docs.map(mapSermon);
  } catch (err) {
    console.error("getSermons failed:", err);
    return [];
  }
}

/* ----------------------------------------------------------------
 *  PAGE HEADERS — from Sanity (with fallback)
 * ---------------------------------------------------------------- */

export type PageHeaderData = {
  title?: string;
  eyebrow?: string;
  subtitle?: string;
  image?: string;
};

export async function getPageHeader(page: string): Promise<PageHeaderData | null> {
  try {
    const doc = await client.fetch(
      `*[_type == "pageHeader" && page == $page][0]`,
      { page },
    );
    if (!doc) return null;
    return {
      title: doc.title ?? undefined,
      eyebrow: doc.eyebrow ?? undefined,
      subtitle: doc.subtitle ?? undefined,
      image: doc.image ? urlFor(doc.image).width(1600).url() : undefined,
    };
  } catch (err) {
    console.error("getPageHeader failed:", err);
    return null;
  }
}

/* ----------------------------------------------------------------
 *  SITE SETTINGS — misc editable images
 * ---------------------------------------------------------------- */

export type SiteSettings = {
  eventsSideImage?: string;
};

export async function getSiteSettings(): Promise<SiteSettings | null> {
  try {
    const doc = await client.fetch(`*[_type == "siteSettings"][0]`);
    if (!doc) return null;
    return {
      eventsSideImage: doc.eventsSideImage
        ? urlFor(doc.eventsSideImage).width(800).url()
        : undefined,
    };
  } catch (err) {
    console.error("getSiteSettings failed:", err);
    return null;
  }
}

export type HomepageData = {
  heroPill?: string;
  heroVideoUrl?: string;
  missionHeading?: string;
  missionText?: string;
  missionImage?: string;
  pastorsHeading?: string;
  pastorsText?: string;
  pastorsButtonLabel?: string;
  pastorsImage?: string;
  ctaHeading?: string;
  ctaImage?: string;
  heroPrefix?: string;
  heroPhrases?: string[];
 
};

export async function getHomepage(): Promise<HomepageData | null> {
  try {
    const doc = await client.fetch(`*[_type == "homepage"][0]{
      ...,
      "heroVideoUrl": heroVideo.asset->url
    }`);
    if (!doc) return null;
    return {
      heroPill: doc.heroPill ?? undefined,
      heroVideoUrl: doc.heroVideoUrl ?? undefined,
      missionHeading: doc.missionHeading ?? undefined,
      missionText: doc.missionText ?? undefined,
      missionImage: doc.missionImage ? urlFor(doc.missionImage).width(1200).url() : undefined,
      pastorsHeading: doc.pastorsHeading ?? undefined,
      pastorsText: doc.pastorsText ?? undefined,
      pastorsButtonLabel: doc.pastorsButtonLabel ?? undefined,
      pastorsImage: doc.pastorsImage ? urlFor(doc.pastorsImage).width(1200).url() : undefined,
      ctaHeading: doc.ctaHeading ?? undefined,
      ctaImage: doc.ctaImage ? urlFor(doc.ctaImage).width(1600).url() : undefined,
       heroPrefix: doc.heroPrefix ?? undefined,
      heroPhrases: doc.heroPhrases ?? undefined,
    
    };
  } catch (err) {
    console.error("getHomepage failed:", err);
    return null;
  }
}
/* ----------------------------------------------------------------
 *  STAFF — still dummy data (migrate next)
 * ---------------------------------------------------------------- */

export async function getStaff(): Promise<StaffMember[]> {
  return simulate(staff);
}