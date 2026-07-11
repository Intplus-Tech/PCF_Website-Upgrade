import type { ChurchEvent, Ministry, Sermon, StaffMember } from "@/types";
import { staff } from "@/lib/data/sermons";
import { client } from "@/sanity/client";
import { urlFor } from "@/sanity/image";

/**
 * ============================================================
 *  DATA-ACCESS LAYER
 * ============================================================
 * Ministries, Events, and Sermons are served from Sanity CMS.
 * Only staff remains on dummy data (to be migrated next).
 * ============================================================
 */

const DELAY = 0; // set >0 to simulate network latency while testing loading states

async function simulate<T>(data: T): Promise<T> {
  if (DELAY) await new Promise((r) => setTimeout(r, DELAY));
  return data;
}

/* ----------------------------------------------------------------
 *  MINISTRIES — from Sanity
 * ---------------------------------------------------------------- */

// Converts a Sanity ministry document into the shape the pages expect.
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
  const docs = await client.fetch(`*[_type == "ministry"] | order(order asc)`);
  return docs.map(mapMinistry);
}

export async function getMinistry(slug: string): Promise<Ministry | null> {
  const doc = await client.fetch(
    `*[_type == "ministry" && slug.current == $slug][0]`,
    { slug },
  );
  return doc ? mapMinistry(doc) : null;
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
  const docs = await client.fetch(`*[_type == "event"] | order(date asc)`);
  return docs.map(mapEvent);
}

export async function getMemories(): Promise<string[]> {
  const docs = await client.fetch(
    `*[_type == "memory"] | order(order asc){ image }`,
  );
  return docs.map((d: any) => urlFor(d.image).width(1000).url());
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
  const docs = await client.fetch(`*[_type == "sermon"] | order(order asc)`);
  return docs.map(mapSermon);
}

/* ----------------------------------------------------------------
 *  STAFF — still dummy data (migrate next)
 * ---------------------------------------------------------------- */

export async function getStaff(): Promise<StaffMember[]> {
  return simulate(staff);
}