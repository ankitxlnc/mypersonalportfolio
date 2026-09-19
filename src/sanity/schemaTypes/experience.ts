import { defineField, defineType } from "sanity";

export const experience = defineType({
  name: "experience",
  title: "Experience",
  type: "document",
  fields: [
    defineField({ name: "years", title: "Dates", type: "string" }),
    defineField({ name: "company", title: "Company", type: "string" }),
    defineField({ name: "role", title: "Role", type: "string" }),
    defineField({ name: "note", title: "Description", type: "string" }),
    defineField({ name: "order", title: "Order", type: "number" }),
  ],
  orderings: [{ title: "Display order", name: "displayOrder", by: [{ field: "order", direction: "asc" }] }],
});