import type { MetadataRoute } from "next";

// AI crawlers / answer engines we explicitly welcome so the site can be
// discovered, indexed, and cited by tools like ChatGPT, Claude, Perplexity,
// Gemini and others.
const aiCrawlers = [
  "GPTBot",
  "ChatGPT-User",
  "OAI-SearchBot",
  "ClaudeBot",
  "Claude-Web",
  "anthropic-ai",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot-Extended",
  "CCBot",
  "Amazonbot",
  "cohere-ai",
  "Meta-ExternalAgent",
  "DuckAssistBot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: aiCrawlers, allow: "/" },
    ],
    sitemap: "https://vnoit.com/sitemap.xml",
  };
}
