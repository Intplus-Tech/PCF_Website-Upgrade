import { defineField, defineType } from "sanity";

export const pageHeader = defineType({
  name: "pageHeader",
  title: "Page Header",
  type: "document",
  fields: [
    defineField({
      name: "page",
      title: "Page",
      type: "string",
      description: "Which page this header belongs to",
      options: {
        list: [
          { title: "About", value: "about" },
          { title: "Ministries", value: "ministries" },
          { title: "Events", value: "events" },
          { title: "Media", value: "media" },
          { title: "Giving", value: "give" },
          { title: "Contact", value: "contact" },
        ],
      },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({ name: "eyebrow", title: "Eyebrow (small text above title)", type: "string" }),
    defineField({ name: "subtitle", title: "Subtitle", type: "text", rows: 2 }),
    defineField({
      name: "image",
      title: "Banner Image",
      type: "image",
      description:
        "Use a bright, well-lit photo. Dark images make the white heading hard to read.",
      options: { hotspot: true },
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "page", media: "image" },
  },
});
