import { defineField, defineType } from "sanity";

export const capability = defineType({
  name: "capability",
  title: "Capability",
  type: "document",
  fields: [
    defineField({ name: "number", title: "Number", type: "string" }),
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({ name: "description", title: "Description", type: "text" }),
    defineField({ name: "order", title: "Order", type: "number" }),
  ],
  orderings: [{ title: "Display order", name: "displayOrder", by: [{ field: "order", direction: "asc" }] }],
});