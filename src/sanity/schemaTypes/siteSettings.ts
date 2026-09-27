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
    defineField({ name: "pointOfViewKicker", title: "About section label", type: "string", initialValue: "01 / About me" }),
    defineField({
      name: "resumeFile",
      title: "Resume PDF",
      type: "file",
      options: { accept: "application/pdf" },
    }),
    defineField({
      name: "about",
      title: "About me",
      type: "array",
      of: [{
        type: "block",
        styles: [
          { title: "Normal", value: "normal" },
          { title: "DM Sans", value: "body" },
          { title: "Space Grotesk", value: "display" },
          { title: "Heading 2", value: "h2" },
          { title: "Heading 3", value: "h3" },
          { title: "Quote", value: "blockquote" },
        ],
        lists: [
          { title: "Bullet", value: "bullet" },
          { title: "Numbered", value: "number" },
        ],
        marks: {
          decorators: [
            { title: "Bold", value: "strong" },
            { title: "Italic", value: "em" },
            { title: "Underline", value: "underline" },
            { title: "Strikethrough", value: "strike-through" },
          ],
          annotations: [{
            name: "link",
            title: "Link",
            type: "object",
            fields: [{ name: "href", title: "URL", type: "url" }],
          }],
        },
      }],
    }),
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