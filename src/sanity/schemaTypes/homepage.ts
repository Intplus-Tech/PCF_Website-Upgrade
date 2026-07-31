import { defineField, defineType } from "sanity";

export const homepage = defineType({
  name: "homepage",
  title: "Homepage",
  type: "document",
  fields: [
    // ---- Hero ----
    defineField({
      name: "heroPill",
      title: "Hero — Pill Text",
      type: "string",
    }),
    defineField({
      name: "heroVideo",
      title: "Hero — Background Video (mp4)",
      type: "file",
      options: { accept: "video/mp4" },
    }),
    // ---- God's Mission ----
    defineField({
      name: "missionHeading",
      title: "Mission — Heading",
      type: "string",
    }),
    defineField({
      name: "missionText",
      title: "Mission — Paragraph",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "missionImage",
      title: "Mission — Image",
      type: "image",
      options: { hotspot: true },
    }),
    // ---- Meet the Pastors ----
    defineField({
      name: "pastorsHeading",
      title: "Pastors — Heading",
      type: "string",
    }),
    defineField({
      name: "pastorsText",
      title: "Pastors — Paragraph",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "pastorsButtonLabel",
      title: "Pastors — Button Label",
      type: "string",
    }),
    defineField({
      name: "pastorsImage",
      title: "Pastors — Image",
      type: "image",
      options: { hotspot: true },
    }),
     
    defineField({
      name: "heroPrefix",
      title: "Hero — Static Prefix (e.g. 'A Place Where')",
      type: "string",
    }),
    defineField({
      name: "heroPhrases",
      title: "Hero — Rotating Phrases",
      type: "array",
      of: [{ type: "string" }],
      description: "The phrases that rotate after the prefix",
    }),

    // ---- Closing CTA ----
    defineField({
      name: "ctaHeading",
      title: "Closing CTA — Heading",
      type: "string",
    }),
    defineField({
      name: "ctaImage",
      title: "Closing CTA — Background Image",
      type: "image",
      options: { hotspot: true },
    }),
  ],
  preview: {
    prepare: () => ({ title: "Homepage" }),
  },
  


});



