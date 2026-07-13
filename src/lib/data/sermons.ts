import type { Sermon, StaffMember } from "@/types";

/** DUMMY DATA — sermons for the Media page. */
export const sermons: Sermon[] = [
  {
    id: "srm-001",
    title: "The Dooley — Tuesday & Thursday Evenings",
    speaker: "David Morrison",
    date: "2026-06-28",
    series: "Foundations",
 
    image:
      "https://images.unsplash.com/photo-1507692049790-de58290a4334?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "srm-002",
    title: "The Book of Plan",
    speaker: "David Morrison",
    date: "2026-06-21",
    series: "Foundations",
  
    image:
      "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "srm-003",
    title: "Foundational Principles of Faith",
    speaker: "Elaine Morrison",
    date: "2026-06-14",
    series: "Foundations",
  
    image:
      "https://images.unsplash.com/photo-1490127252417-7c393f993ee4?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "srm-004",
    title: "Building on the Rock",
    speaker: "David Morrison",
    date: "2026-06-07",
    series: "The Sermon on the Mount",
  
    image:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80",
  },
];

/** DUMMY DATA — leadership shown on the Home and About pages. */
export const staff: StaffMember[] = [
  {
    name: "David & Elaine Morrison",
    role: "Lead Pastors",
    bio: "David and Elaine have shepherded our congregation for over two decades with warmth, wisdom, and a deep love for people. They believe the church is at its best when everyone belongs.",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1000&q=80",
  },
];
