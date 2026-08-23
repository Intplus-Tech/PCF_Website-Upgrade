import type { NavItem } from "@/types";

/**
 * Central place for the church's identity and site-wide details.
 * TODO: confirm the exact address / contact details from the real records.
 */
export const site = {
  name: "Peoples Church Falkirk",
  shortName: "Peoples Church",
  tagline: "A Place Where Worship Inspires",
  heroPill: "People. Family. Community. Faith.",
  description:
    "A welcoming family of faith in the heart of Falkirk. Join us for worship, community, and purpose.",
  address: "West Bridge Street, Falkirk FK1 5RS",
  phone: "+44 1324 000000",
  email: "hello@peopleschurchfalkirk.org",
  // Link for the Donate button — point this at your giving page/provider.
 giveUrl: "https://www.paypal.com/donate?token=caB5eUIOKXc6FD5hDqJyXHNGFGv_U8IpRZO61Yx8XBFRbESjYBgVILX8zDOkVboLsSxJMqs_RNdtrEc1",
  // Coordinates used by the map embed (Falkirk town centre — adjust as needed).
  map: {
    query: "West Bridge Street, Falkirk",
    lat: 56.0019,
    lng: -3.7839,
  },
  socials: {
    facebook: "#",
    instagram: "#",
    youtube: "#",
      telegram: "https://t.me/yourchannel", 
  },
} as const;

export const serviceTimes = [
  { day: "Sunday", name: "Morning Worship", time: "9:00 AM" },
  { day: "Sunday", name: "Second Service", time: "11:30 AM" },
  { day: "Wednesday", name: "Bible Study", time: "6:30 PM" },
  { day: "Friday", name: "Prayer Night", time: "7:00 PM" },
];

   /** The tabs that appear inside the hero nav (matches the Figma). */
export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    label: "Ministries",
    href: "/ministries",
    children: [
      { label: "Crèche", href: "/ministries/creche" },
      { label: "Sunday School", href: "/ministries/sunday-school" },
      { label: "Men's Ministry", href: "/ministries/mens-ministry" },
      { label: "Women's Ministry", href: "/ministries/womens-ministry" },
      { label: "Seniors Ministry", href: "/ministries/seniors-ministry" },
    ],
  },
  { label: "Events", href: "/events" },
  { label: "Media", href: "/media" },
  { label: "Give", href: "/give" },
  { label: "Contact Us", href: "/contact" }
];

