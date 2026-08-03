import { defineField, defineType } from "sanity";

export const event = defineType({
  name: "event",
  title: "Event",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "recurrence",
      title: "Recurrence",
      type: "string",
      description: "How often this event repeats. The date shows automatically based on this.",
      options: {
        list: [
          { title: "Every week", value: "weekly" },
          { title: "2nd & 4th Sunday only", value: "secondFourthSunday" },
          { title: "One-time (use the date below)", value: "oneTime" },
        ],
        layout: "radio",
      },
      initialValue: "weekly",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "weekday",
      title: "Day of Week",
      type: "string",
      description: "Which day this event falls on (for weekly events). Ignored for one-time events.",
      options: {
        list: [
          { title: "Sunday", value: "0" },
          { title: "Monday", value: "1" },
          { title: "Tuesday", value: "2" },
          { title: "Wednesday", value: "3" },
          { title: "Thursday", value: "4" },
          { title: "Friday", value: "5" },
          { title: "Saturday", value: "6" },
        ],
      },
      hidden: ({ parent }) => parent?.recurrence === "oneTime",
    }),
    defineField({
      name: "date",
      title: "Date (for one-time events only)",
      type: "date",
      options: { dateFormat: "YYYY-MM-DD" },
      description: "Only needed for one-time events. Recurring events calculate their date automatically.",
      hidden: ({ parent }) => parent?.recurrence !== "oneTime",
    }),
    defineField({ name: "time", title: "Time", type: "string" }),
    defineField({ name: "speaker", title: "Speaker", type: "string" }),
    defineField({ name: "location", title: "Location", type: "string" }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "recurrence", media: "image" },
  },
});