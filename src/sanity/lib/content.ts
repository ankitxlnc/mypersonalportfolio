import { createClient } from "next-sanity";

export type PortfolioContent = {
  settings: {
    headline: string;
    heroStatement: string;
    heroDescription: string;
    email: string;
    linkedin: string;
    substack: string;
    education: { institution: string; credential: string }[];
    ventures: { company: string; description: string }[];
    personalFinanceTitle: string;
    personalFinanceSummary: string;
  };
  capabilities: { number: string; title: string; text: string }[];
  projects: { index: string; type: string; title: string; description: string; tags: string[]; accent: string; url?: string }[];
  experience: { years: string; company: string; role: string; note: string }[];
};

const fallback: PortfolioContent = {
  settings: {
    headline: "Product-minded data leader with 15+ years of experience",
    heroStatement: "Building the context for trusted data.",
    heroDescription: "I turn complex data and regulatory challenges into products people can understand, trust, and use.",
    email: "aggarwal.ankit5@gmail.com",
    linkedin: "https://www.linkedin.com/in/ankitaggarwal05",
    substack: "https://substack.com/@ankitxlnc5",
    education: [
      { institution: "MIT", credential: "Product" },
      { institution: "IMT", credential: "MBA" },
      { institution: "Thiruvalluver University", credential: "Bachelors in Computer Science" },
    ],
    ventures: [
      { company: "Livanto Green Pvt Ltd", description: "I’m an investor in Livanto Green Pvt Ltd and enthusiastic about EV charging infrastructure." },
    ],
    personalFinanceTitle: "My personal finance strategy and journey",
    personalFinanceSummary: "I’m documenting the principles, decisions, and lessons shaping my personal finance journey. More to come.",
  },
  capabilities: [
    { number: "01", title: "Data Product Management", text: "Self-serve platforms and reusable patterns that move data from strategy to adoption." },
    { number: "02", title: "Build & Ship Large Enterprise Softwares", text: "Building scalable enterprise software from product strategy through launch and adoption." },
    { number: "03", title: "Forward Deployed Product Manager", text: "Partnering with customers and engineering teams to turn complex needs into shipped product capabilities." },
  ],
  projects: [
    { index: "01", type: "Data products", title: "Data Product Builder", description: "Owned the vision and roadmap for a platform launched from zero to external clients, now growing monthly active users by roughly 100% year over year.", tags: ["Product strategy", "Data platforms", "Adoption"], accent: "amber" },
    { index: "02", type: "Enterprise SaaS", title: "No code SaaS Enterprise Platform", description: "Built Mezocliq's low-code data platform and its metadata, profiling, quality, and lineage layer so citizen developers could move from ingest to insight.", tags: ["0 to 1", "No-code", "Data products"], accent: "sky" },
    { index: "03", type: "JPMorganChase", title: "Data Management Platform JPMorgan", description: "Building firmwide data capabilities across governance, lineage, quality, semantics, and platforms.", tags: ["Data management", "Governance", "Enterprise"], accent: "mint" },
    { index: "04", type: "Regulatory data", title: "BCBS239", description: "Led lineage, quality monitoring, remediation, data contracts, and glossary capabilities across lines of business and control functions, cutting audit findings by 50%.", tags: ["Lineage", "Data quality", "Risk"], accent: "amber" },
    { index: "05", type: "Graph & semantics", title: "Graph Context Layer", description: "Graph-powered context, ontologies, and semantic models that make data intelligible.", tags: ["Knowledge graphs", "Ontologies", "Context"], accent: "sky" },
  ],
  experience: [
    { years: "2021 - now", company: "JPMorganChase", role: "Executive Director, Technical Product Management", note: "Enterprise data platforms, governance, and data quality" },
    { years: "2014 - 2021", company: "meZocliq", role: "Director, Technical Product Management", note: "Self-serve and no-code data management platform" },
    { years: "2006 - 2013", company: "iQor", role: "Product Manager, Data & Reporting Products", note: "Data integrations and internal reporting platform" },
  ],
};

const client = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
  ? createClient({ projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production", apiVersion: "2026-09-19", useCdn: false })
  : null;

export async function getPortfolioContent(): Promise<PortfolioContent> {
  if (!client) return fallback;

  try {
    const [settings, capabilities, projects, experience] = await Promise.all([
      client.fetch(`*[_type == "siteSettings"][0]{headline, heroStatement, heroDescription, email, linkedin, substack, education, ventures, personalFinanceTitle, personalFinanceSummary}`),
      client.fetch(`*[_type == "capability"] | order(order asc){number, title, "text": description}`),
      client.fetch(`*[_type == "project"] | order(order asc){index, type, title, description, tags, accent, url}`),
      client.fetch(`*[_type == "experience"] | order(order asc){years, company, role, note}`),
    ]);

    return {
      settings: {
        ...fallback.settings,
        ...settings,
        education: settings?.education ?? fallback.settings.education,
        ventures: settings?.ventures ?? fallback.settings.ventures,
        personalFinanceTitle: settings?.personalFinanceTitle ?? fallback.settings.personalFinanceTitle,
        personalFinanceSummary: settings?.personalFinanceSummary ?? fallback.settings.personalFinanceSummary,
      },
      capabilities: capabilities?.length ? capabilities : fallback.capabilities,
      projects: projects?.length ? projects : fallback.projects,
      experience: experience?.length ? experience : fallback.experience,
    };
  } catch {
    return fallback;
  }
}