import { defineField, defineType } from "sanity";

export const getInvolvedCard = defineType({
  name: "getInvolvedCard",
  title: "Get Involved Card",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "order",
      title: "Display order",
      type: "number",
      description: "Controls card order (1 = first).",
    }),
    defineField({
      name: "recurrence",
      title: "Recurrence",
      type: "string",
      description: "How often this happens. The date shows automatically based on this.",
      options: {
        list: [
          { title: "Every week", value: "weekly" },
          { title: "2nd & 4th Sunday only", value: "secondFourthSunday" },
          { title: "One-time (use the date below)", value: "oneTime" },
        ],
        layout: "radio",
      },
      initialValue: "weekly",
    }),
    defineField({
      name: "weekday",
      title: "Day of Week",
      type: "string",
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
      title: "Date (one-time only)",
      type: "date",
      options: { dateFormat: "YYYY-MM-DD" },
      hidden: ({ parent }) => parent?.recurrence !== "oneTime",
    }),
    defineField({
      name: "time",
      title: "Time",
      type: "string",
      description: "e.g. 11:00 AM",
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
    }),
   defineField({
  name: "image",
  title: "Card Image (homepage)",
  type: "image",
  options: { hotspot: true },
}),
defineField({
  name: "eventsImage",
  title: "Events Page Image (optional — falls back to Card Image)",
  type: "image",
  options: { hotspot: true },
  description: "Shown on the Events page. Leave blank to use the same image as the homepage card.",
}),

  ],
  orderings: [
    { title: "Display order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] },
  ],
  preview: {
    select: { title: "title", subtitle: "recurrence", media: "image" },
  },
});
