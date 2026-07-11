import { defineField, defineType } from "sanity";

export const ministry = defineType({
  name: "ministry",
  title: "Ministry",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug (URL)",
      type: "slug",
      options: { source: "name", maxLength: 96 },
      validation: (r) => r.required(),
      description: "The URL path, e.g. 'creche'. Click Generate.",
    }),
    defineField({
      name: "order",
      title: "Display order",
      type: "number",
      description: "Controls the order in the sidebar (1 = first).",
    }),
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 5,
    }),
    defineField({
      name: "image",
      title: "Main image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "meetingTime",
      title: "Meeting time",
      type: "string",
    }),
    defineField({
      name: "leader",
      title: "Leader",
      type: "string",
    }),
    defineField({
      name: "layout",
      title: "Layout style",
      type: "string",
      options: {
        list: [
          { title: "Checklist (Crèche)", value: "checklist" },
          { title: "What to Expect (Sunday School)", value: "expect" },
          { title: "Feature Cards (Men's/Women's/Seniors)", value: "cards" },
        ],
      },
    }),
    defineField({
      name: "infoPills",
      title: "Info pills",
      type: "array",
      of: [{ type: "string" }],
      description: "Short pills like 'Ages 5–11', '11:45 AM · Sunday'.",
    }),
    defineField({
      name: "highlights",
      title: "Highlights (checklist items)",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "expect",
      title: "What to Expect items",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", title: "Title", type: "string" },
            { name: "text", title: "Text", type: "text", rows: 2 },
          ],
        },
      ],
    }),
    defineField({
      name: "features",
      title: "Feature cards",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", title: "Title", type: "string" },
            { name: "text", title: "Text", type: "text", rows: 2 },
          ],
        },
      ],
    }),
    defineField({
      name: "quote",
      title: "Scripture quote",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "team",
      title: "Team member photos",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
    }),
    defineField({
      name: "gallery",
      title: "Gallery images",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
    }),
  ],
  orderings: [
    {
      title: "Display order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
});