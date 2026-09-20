import fs from "node:fs";
import { createClient } from "@sanity/client";

function loadEnvFile() {
  try {
    const lines = fs.readFileSync(".env.local", "utf8").split(/\r?\n/);
    for (const line of lines) {
      const match = line.match(/^([^#=]+)=(.*)$/);
      if (match && !process.env[match[1]]) process.env[match[1]] = match[2].trim();
    }
  } catch {
    // Environment variables may already be supplied by the shell or deployment platform.
  }
}

loadEnvFile();

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const token = process.env.SANITY_API_TOKEN;

if (!projectId || projectId === "your-real-sanity-project-id") throw new Error("Missing NEXT_PUBLIC_SANITY_PROJECT_ID in .env.local");
if (!token) throw new Error("Missing SANITY_API_TOKEN. Create a write token in Sanity Manage and run: SANITY_API_TOKEN=your-token npm run content:import");

const content = JSON.parse(fs.readFileSync("content/portfolio.json", "utf8"));
const client = createClient({ projectId, dataset, apiVersion: "2026-09-19", token, useCdn: false });
const documents = [content.settings, ...content.capabilities, ...content.projects, ...content.experience];

console.log(`Importing ${documents.length} documents into ${projectId}/${dataset}...`);
const transaction = client.transaction();
for (const document of documents) transaction.createOrReplace(document);
await transaction.commit();
console.log("Import complete. Refresh the website to see the content.");