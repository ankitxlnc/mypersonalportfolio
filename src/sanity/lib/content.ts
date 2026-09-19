import { createClient } from "next-sanity";

export type PortfolioContent = {
  settings: {
    heroStatement: string;
    heroDescription: string;
    email: string;
    linkedin: string;
    substack: string;
  };
  capabilities: { number: string; title: string; text: string }[];
  projects: { index: string; type: string; title: string; description: string; tags: string[]; accent: string }[];
  experience: { years: string; company: string; role: string; note: string }[];
};

const fallback: PortfolioContent = {
  settings: {
    heroStatement: "Building the context for trusted data.",
    heroDescription: "I turn complex data and regulatory challenges into products people can understand, trust, and use.",
    email: "aggarwal.ankit5@gmail.com",
    linkedin: "https://www.linkedin.com/in/ankitaggarwal05",
    substack: "https://substack.com/@ankitxlnc5",
  },
  capabilities: [
    { number: "01", title: "Context layer", text: "Graph-powered context, ontologies, and semantic models that make data intelligible." },
    { number: "02", title: "Data products", text: "Self-serve platforms and reusable patterns that move data from strategy to adoption." },
    { number: "03", title: "Regulatory trust", text: "Lineage, quality, contracts, and controls built for decision-critical environments." },
  ],
  projects: [
    { index: "01", type: "Enterprise platform", title: "Fusion: making enterprise data usable", description: "Owned the vision and roadmap for a platform launched from zero to external clients, now growing monthly active users by roughly 100% year over year.", tags: ["Product strategy", "Data platforms", "Adoption"], accent: "amber" },
    { index: "02", type: "Regulatory data", title: "Controls by design for BCBS 239", description: "Led lineage, quality monitoring, remediation, data contracts, and glossary capabilities across lines of business and control functions, cutting audit findings by 50%.", tags: ["Lineage", "Data quality", "Risk"], accent: "mint" },
    { index: "03", type: "Startup platform", title: "A no-code data lifecycle", description: "Built Mezocliq's low-code data platform and its metadata, profiling, quality, and lineage layer so citizen developers could move from ingest to insight.", tags: ["0 to 1", "No-code", "Data products"], accent: "sky" },
  ],
  experience: [
    { years: "2021 - now", company: "JPMorganChase", role: "Executive Director, Technical Product Management", note: "Enterprise data platforms, governance, and data quality" },
    { years: "2014 - 2021", company: "meZocliq", role: "Director, Technical Product Management", note: "Self-serve and no-code data management platform" },
    { years: "2006 - 2013", company: "iQor", role: "Product Manager, Data & Reporting Products", note: "Data integrations and internal reporting platform" },
  ],
};

const client = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
  ? createClient({ projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production", apiVersion: "2026-09-19", useCdn: true })
  : null;

export async function getPortfolioContent(): Promise<PortfolioContent> {
  if (!client) return fallback;

  try {
    const [settings, capabilities, projects, experience] = await Promise.all([
      client.fetch(`*[_type == "siteSettings"][0]{heroStatement, heroDescription, email, linkedin, substack}`),
      client.fetch(`*[_type == "capability"] | order(order asc){number, title, "text": description}`),
      client.fetch(`*[_type == "project"] | order(order asc){index, type, title, description, tags, accent}`),
      client.fetch(`*[_type == "experience"] | order(order asc){years, company, role, note}`),
    ]);

    return {
      settings: { ...fallback.settings, ...settings },
      capabilities: capabilities?.length ? capabilities : fallback.capabilities,
      projects: projects?.length ? projects : fallback.projects,
      experience: experience?.length ? experience : fallback.experience,
    };
  } catch {
    return fallback;
  }
}