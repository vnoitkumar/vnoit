import { getAllBlogPosts } from "@/lib/api";

const baseUrl = "https://vnoit.com";

export const dynamic = "force-static";

/**
 * Serves /llms.txt — an emerging standard (https://llmstxt.org) that gives
 * large language models a concise, structured map of the site so they can
 * discover and cite its content accurately. Blog entries are generated from
 * the same source as the sitemap, so the file stays in sync automatically.
 */
export function GET() {
  const posts = getAllBlogPosts();

  const blogLines = posts
    .map((post) => `- [${post.title}](${baseUrl}/blogs/${post.slug}): ${post.excerpt}`)
    .join("\n");

  const body = `# Vinoth (Vnoit)

> Personal website of Vinoth Kumar (also known as Vnoit), a Lead Consultant at Thoughtworks based in Bengaluru, India. The site shares articles on software craftsmanship, full-stack engineering, and building products that last, alongside mentorship offerings and open-source side projects.

## About
- [About Vinoth](${baseUrl}/about): Career background, interests, and links to social profiles (LinkedIn, X/Twitter, GitHub).

## Blog
${blogLines}
- [All blog posts](${baseUrl}/blogs): Full archive of articles on software engineering and development.

## Code with Vinoth
- [Code with Vinoth](${baseUrl}/code-with-vinoth): One-on-one mentoring and teaching offerings for software engineers, including student reviews.

## Projects
- [Code Snap](https://code-snap.vnoit.com): Share your source code as images.
- [Tab Sync](https://tab-sync.vnoit.com): Sync the active theme across all open browser tabs of a site via a service worker.
- [Case Converter](https://case-converter.vnoit.com): A simple text case converter.
- [JS Executer](https://jsexecuter.vnoit.com): An online JavaScript editor.

## Reference
- [Glossary](${baseUrl}/glossary): Plain-English definitions of technical terms used in the blog — MCP, LLM, RAG, Rovo, Forge, and more.

## Contact
- Email: vnoitkumar@gmail.com
- Phone: +91 77085 21528
- WhatsApp: https://wa.me/917708521528
- LinkedIn: https://www.linkedin.com/in/vnoit
- X/Twitter: https://x.com/vnoitkumar
- GitHub: https://github.com/vnoitkumar
- Instagram: https://www.instagram.com/vnoitkumar
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
