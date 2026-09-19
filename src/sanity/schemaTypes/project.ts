import { defineField, defineType } from "sanity";

export const project = defineType({
  name: "project",
  title: "Selected work",
  type: "document",
  fields: [
    defineField({ name: "index", title: "Index", type: "string" }),
    defineField({ name: "type", title: "Type", type: "string" }),
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({ name: "description", title: "Description", type: "text" }),
    defineField({ name: "tags", title: "Tags", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "accent", title: "Accent", type: "string", options: { list: ["amber", "mint", "sky"] } }),
    defineField({ name: "order", title: "Order", type: "number" }),
  ],
  orderings: [{ title: "Display order", name: "displayOrder", by: [{ field: "order", direction: "asc" }] }],
});