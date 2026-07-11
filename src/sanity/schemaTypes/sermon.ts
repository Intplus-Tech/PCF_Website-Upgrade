import { defineField, defineType } from "sanity";

export const sermon = defineType({
  name: "sermon",
  title: "Sermon / Media",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({ name: "speaker", title: "Speaker", type: "string" }),
    defineField({ name: "series", title: "Series name", type: "string" }),
    defineField({
      name: "date",
      title: "Date",
      type: "date",
      options: { dateFormat: "YYYY-MM-DD" },
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "ago",
      title: "Time label (e.g. '2 Days Ago')",
      type: "string",
      description: "Shown on the carousel card.",
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "videoUrl",
      title: "Video URL (YouTube/Vimeo link)",
      type: "url",
      description: "Where 'Watch' buttons should link.",
    }),
    defineField({
      name: "featured",
      title: "Featured series?",
      type: "boolean",
      description: "ON = shows as a big featured series block. OFF = shows in the carousel.",
      initialValue: false,
    }),
    defineField({
      name: "order",
      title: "Display order",
      type: "number",
    }),
  ],
  orderings: [
    { title: "Order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] },
  ],
  preview: {
    select: { title: "title", subtitle: "speaker", media: "image" },
  },
});