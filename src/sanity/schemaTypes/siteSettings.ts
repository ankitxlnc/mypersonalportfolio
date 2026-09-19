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
    defineField({ name: "about", title: "About", type: "array", of: [{ type: "block" }] }),
    defineField({ name: "email", title: "Email", type: "string", initialValue: "aggarwal.ankit5@gmail.com" }),
    defineField({ name: "linkedin", title: "LinkedIn URL", type: "url", initialValue: "https://www.linkedin.com/in/ankitaggarwal05" }),
    defineField({ name: "substack", title: "Substack URL", type: "url", initialValue: "https://substack.com/@ankitxlnc5" }),
  ],
});