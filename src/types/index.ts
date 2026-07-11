export type NavItem = {
  label: string;
  href: string;
  children?: NavItem[];
};

export type Ministry = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  meetingTime: string;
  leader: string;
  image: string;
  highlights: string[];
  layout?: "checklist" | "expect" | "cards";
  infoPills?: string[];
  expect?: { title: string; text: string }[];
  features?: { title: string; text: string }[];
  quote?: string;
  gallery?: string[];
  team?: string[];
};

export type ChurchEvent = {
  id: string;
  title: string;
  date: string; // ISO date
  time: string;
  location: string;
  description: string;
  image: string;
};

export type Sermon = {
  id: string;
  title: string;
  speaker: string;
  series: string;
  ago?: string;
  text?: string;
  date: string;
  description?: string;
  image: string;
  videoUrl?: string;
  featured?: boolean;
  // keep any existing fields your Media page already uses (e.g. duration, ago)
};

export type StaffMember = {
  name: string;
  role: string;
  bio: string;
  image: string;
};

export type ContactPayload = {
  name: string;
  email: string;
  message: string;
};
