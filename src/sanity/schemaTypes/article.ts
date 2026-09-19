import { defineField, defineType } from "sanity";

export const article = defineType({
  name: "article",
  title: "Writing",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({ name: "url", title: "URL", type: "url" }),
    defineField({ name: "excerpt", title: "Excerpt", type: "text" }),
    defineField({ name: "publishedAt", title: "Published at", type: "datetime" }),
  ],
});