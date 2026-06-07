/**
 * Convert markdown source into plain text. Used to expose a clean `articleBody`
 * in JSON-LD structured data so AI crawlers and search engines can index the
 * full article text without markdown syntax noise.
 */
export function stripMarkdown(markdown: string): string {
  return markdown
    .replace(/```[\s\S]*?```/g, " ") // fenced code blocks
    .replace(/`[^`]*`/g, " ") // inline code
    .replace(/!\[[^\]]*\]\([^)]*\)/g, " ") // images
    .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1") // links -> link text
    .replace(/^#{1,6}\s+/gm, "") // headings
    .replace(/^>\s?/gm, "") // blockquotes
    .replace(/(\*\*|__|\*|_|~~)/g, "") // bold / italic / strikethrough
    .replace(/^\s*[-*+]\s+/gm, "") // unordered list bullets
    .replace(/^\s*\d+\.\s+/gm, "") // ordered list markers
    .replace(/\|/g, " ") // table pipes
    .replace(/\s+/g, " ") // collapse whitespace
    .trim();
}
