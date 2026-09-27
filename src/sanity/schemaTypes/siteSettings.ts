import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site settings",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Name", type: "string", initialValue: "Ankit Aggarwal" }),
    defineField({ name: "headline", title: "Headline", type: "string", initialValue: "Product-minded data leader with 15+ years of experience" }),
    defineField({ name: "heroStatement", title: "Hero statement", type: "string", initialValue: "Building the context for trusted data." }),
    defineField({ name: "heroDescription", title: "Hero description", type: "text" }),
    defineField({ name: "pointOfViewKicker", title: "Point of view label", type: "string", initialValue: "01 / The point of view" }),
    defineField({ name: "pointOfViewTitle", title: "Point of view heading", type: "string", initialValue: "Data is only useful when it has meaning." }),
    defineField({ name: "pointOfViewParagraphs", title: "Point of view paragraphs", type: "array", of: [{ type: "text" }] }),
    defineField({ name: "pointOfViewLinkText", title: "Point of view link text", type: "string", initialValue: "More about me" }),
    defineField({ name: "pointOfViewLinkUrl", title: "Point of view link URL", type: "string", initialValue: "mailto:aggarwal.ankit5@gmail.com" }),
    defineField({ name: "about", title: "About", type: "array", of: [{ type: "block" }] }),
    defineField({ name: "email", title: "Email", type: "string", initialValue: "aggarwal.ankit5@gmail.com" }),
    defineField({ name: "linkedin", title: "LinkedIn URL", type: "url", initialValue: "https://www.linkedin.com/in/ankitaggarwal05" }),
    defineField({ name: "substack", title: "Substack URL", type: "url", initialValue: "https://substack.com/@ankitxlnc5" }),
    defineField({
      name: "education",
      title: "Education",
      type: "array",
      of: [{ type: "object", fields: [
        { name: "institution", title: "Institution", type: "string" },
        { name: "credential", title: "Degree or program", type: "string" },
      ] }],
    }),
    defineField({
      name: "ventures",
      title: "Investments and interests",
      type: "array",
      of: [{ type: "object", fields: [
        { name: "company", title: "Company", type: "string" },
        { name: "description", title: "Description", type: "text" },
      ] }],
    }),
    defineField({ name: "personalFinanceTitle", title: "Personal finance heading", type: "string" }),
    defineField({ name: "personalFinanceSummary", title: "Personal finance introduction", type: "text" }),
  ],
});