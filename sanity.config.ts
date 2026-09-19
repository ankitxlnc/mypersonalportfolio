import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./src/sanity/schemaTypes";

export default defineConfig({
  name: "ankit-portfolio",
  title: "Ankit Aggarwal Portfolio",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "missing-project-id",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  basePath: "/admin",
  plugins: [structureTool(), visionTool()],
  schema: { types: schemaTypes },
});