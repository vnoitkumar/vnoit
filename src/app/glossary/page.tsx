import type { Metadata } from "next";

const glossaryDescription =
  "Plain-English definitions of technical terms used across the blog: MCP, LLM, RAG, Rovo, Forge, and more.";

export const metadata: Metadata = {
  title: "Glossary - Vnoit",
  description: glossaryDescription,
  alternates: { canonical: "/glossary" },
  openGraph: {
    title: "Glossary - Vnoit",
    description: glossaryDescription,
    type: "website",
    siteName: "Vnoit",
    url: "https://vnoit.com/glossary",
    images: [
      {
        url: "/assets/images/og-image-3600x1890.jpg",
        width: 3600,
        height: 1890,
        alt: "Vinoth (Vnoit)",
      },
    ],
  },
  twitter: {
    title: "Glossary - Vnoit",
    description: glossaryDescription,
    card: "summary_large_image",
    creator: "@vnoitkumar",
    images: {
      url: "/assets/images/og-image-3600x1890.jpg",
      alt: "Vinoth (Vnoit)",
    },
  },
};

type GlossaryTerm = {
  slug: string;
  term: string;
  fullName: string;
  definition: string;
};

const terms: GlossaryTerm[] = [
  {
    slug: "claude",
    term: "Claude",
    fullName: "Claude (by Anthropic)",
    definition:
      "Anthropic describes Claude as a conversational assistant based on a large language model, tuned with human feedback to be helpful, honest, and harmless. People use it for writing, coding, analysis, and reasoning through complex problems. It's available through the web, mobile apps, and an API.",
  },
  {
    slug: "context-window",
    term: "Context window",
    fullName: "Context window",
    definition:
      "Anthropic defines the context window as the amount of text a model can look back on and reference when generating a response. Think of it as the model's working memory, which is separate from the much larger dataset it was trained on. A larger window lets the model handle longer documents and conversations; the harder part is filling it with the right information.",
  },
  {
    slug: "forge",
    term: "Forge",
    fullName: "Atlassian Forge",
    definition:
      "Atlassian's cloud platform for building and hosting apps that extend products like Jira and Confluence. Atlassian provisions, manages, and scales the underlying infrastructure for you, so you focus on the app instead of servers. Apps run inside a built-in security layer that controls where data can go.",
  },
  {
    slug: "llm",
    term: "LLM",
    fullName: "Large Language Model",
    definition:
      "An AI model trained on vast amounts of text so it can understand and produce human-like language. It can answer questions, write and summarise text, generate code, and handle many other language tasks. Under the hood it works by predicting likely next words from patterns it learned during training.",
  },
  {
    slug: "mcp",
    term: "MCP",
    fullName: "Model Context Protocol",
    definition:
      "An open standard, created by Anthropic, that gives AI applications a single consistent way to connect to external systems: data sources, tools, and workflows. Instead of building a custom integration for every tool, you build to MCP once. Anthropic describes it as a USB-C port for AI applications.",
  },
  {
    slug: "openai",
    term: "OpenAI",
    fullName: "OpenAI",
    definition:
      "OpenAI describes itself as an AI research and deployment company, whose mission is to ensure that artificial general intelligence (AGI) benefits all of humanity. It's best known for ChatGPT and the GPT family of models. Like Anthropic, it provides AI that other products can build on.",
  },
  {
    slug: "orchestration",
    term: "Orchestration",
    fullName: "AI Orchestration",
    definition:
      "IBM defines AI orchestration as the coordination and management of the parts of an AI system: models, agents, data, and integrations, so they work together as one workflow. A common, more specific case is agent orchestration, where several specialised AI agents are coordinated toward a shared goal. The aim is to get the right component doing the right job at the right time.",
  },
  {
    slug: "rag",
    term: "RAG",
    fullName: "Retrieval-Augmented Generation",
    definition:
      "A technique where, before the model answers, it first retrieves relevant information from an outside knowledge source and feeds that into the prompt. This grounds the response in real, current documents instead of relying only on what the model memorised during training. It's a common way to give AI accurate, domain-specific answers and cite sources.",
  },
  {
    slug: "rovo",
    term: "Rovo",
    fullName: "Atlassian Rovo",
    definition:
      "Atlassian's AI app that helps teams find, understand, and act on information across their Atlassian and connected third-party tools. It combines enterprise search, an AI chat assistant, and AI agents that work alongside your team. Atlassian frames it around three things: find, learn, and act.",
  },
  {
    slug: "rovo-mcp",
    term: "Rovo MCP",
    fullName: "Atlassian Rovo MCP Server",
    definition:
      "Atlassian's cloud-hosted MCP server. It gives external AI tools secure, real-time access to your data across Jira, Confluence, Bitbucket, and other Atlassian apps, so an AI client can search, create, and update that content using plain-language prompts. Every action respects each user's existing access permissions.",
  },
  {
    slug: "rovo-skills",
    term: "Rovo Skills",
    fullName: "Rovo Skills",
    definition:
      "Atlassian defines skills as capabilities, packaged as reusable instructions, that let Rovo's chat and agents carry out specific work tasks. They are the concrete things Rovo can actually do, like creating a Jira work item, drafting a status update, or analysing incident data. Skills encode the steps so the agent doesn't have to work a task out from scratch each time.",
  },
  {
    slug: "spec-to-code",
    term: "Spec-to-Code",
    fullName: "Spec-to-Code",
    definition:
      "Going from a written specification directly to working code, with the spec as the source of truth rather than something you discard once coding starts. The broader, more established name for this is spec-driven development, formalised by tools like GitHub's Spec Kit. Spec-to-Code isn't a standardised industry term, but it points at the same family of practices, usually with AI generating the implementation from the spec.",
  },
  {
    slug: "vector-database",
    term: "Vector database",
    fullName: "Vector database",
    definition:
      "A database that stores data as embeddings: numerical representations that capture the meaning of text, images, or audio. It's built to quickly find the items whose numbers are closest to a given one, which is how semantic or similarity search works. This makes it a common backbone for RAG and other AI features.",
  },
];

function Glossary() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    name: "Glossary - Vnoit",
    description: glossaryDescription,
    url: "https://vnoit.com/glossary",
    inLanguage: "en",
    hasDefinedTerm: terms.map((t) => ({
      "@type": "DefinedTerm",
      name: t.term,
      description: t.definition,
      url: `https://vnoit.com/glossary#${t.slug}`,
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://vnoit.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Glossary",
        item: "https://vnoit.com/glossary",
      },
    ],
  };

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  const sortedTerms = [...terms].sort((a, b) => a.term.localeCompare(b.term));

  const groups = alphabet
    .map((letter) => ({
      letter,
      items: sortedTerms.filter((t) => t.term[0].toUpperCase() === letter),
    }))
    .filter((group) => group.items.length > 0);

  const presentLetters = new Set(groups.map((group) => group.letter));

  return (
    <section className="mx-auto mt-3 max-w-7xl p-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <h1 className="text-xl font-semibold leading-snug mb-2">Glossary</h1>
      <p className="text-jet-black/60 dark:text-baby-powder/60 text-base mb-12">
        Plain-English definitions of technical terms that come up in the blog.
      </p>
      <nav
        aria-label="Jump to a letter"
        className="flex flex-wrap gap-x-3 gap-y-2 border-b border-jet-black/10 dark:border-baby-powder/10 pb-6 mb-12"
      >
        {alphabet.map((letter) =>
          presentLetters.has(letter) ? (
            <a
              key={letter}
              href={`#letter-${letter}`}
              className="text-lg font-semibold text-violet-700 dark:text-violet-300 hover:underline underline-offset-2"
            >
              {letter}
            </a>
          ) : (
            <span
              key={letter}
              aria-hidden="true"
              className="text-lg font-semibold text-jet-black/25 dark:text-baby-powder/25"
            >
              {letter}
            </span>
          )
        )}
      </nav>
      <div className="space-y-12">
        {groups.map((group) => (
          <div key={group.letter}>
            <h2
              id={`letter-${group.letter}`}
              className="text-2xl font-bold scroll-mt-20 mb-6 pb-2 border-b border-jet-black/10 dark:border-baby-powder/10"
            >
              {group.letter}
            </h2>
            <dl className="space-y-8">
              {group.items.map((t) => (
                <section key={t.slug} id={t.slug} className="scroll-mt-20">
                  <dt className="text-xl font-semibold leading-snug">
                    {t.term}
                    {t.fullName !== t.term && (
                      <span className="text-base font-normal text-jet-black/50 dark:text-baby-powder/50 ml-2">
                        ({t.fullName})
                      </span>
                    )}
                  </dt>
                  <dd className="mt-2 text-lg leading-relaxed text-jet-black/80 dark:text-baby-powder/80">
                    {t.definition}
                  </dd>
                </section>
              ))}
            </dl>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Glossary;
