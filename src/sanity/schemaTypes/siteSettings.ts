import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings (misc images)",
  type: "document",
  fields: [
    defineField({
      name: "eventsSideImage",
      title: "Events — Side Image (beside calendar)",
      type: "image",
      options: { hotspot: true },
    }),
  ],
  preview: {
    prepare: () => ({ title: "Site Settings" }),
  },
});