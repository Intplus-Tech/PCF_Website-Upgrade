import { defineField, defineType } from "sanity";

export const memory = defineType({
  name: "memory",
  title: "Recent Memory (photo)",
  type: "document",
  fields: [
    defineField({
      name: "order",
      title: "Display order",
      type: "number",
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "caption",
      title: "Caption (optional, for accessibility)",
      type: "string",
    }),
  ],
  preview: { select: { title: "caption", media: "image" } },
});