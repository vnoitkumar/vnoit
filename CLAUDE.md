# vnoit.com project guide for Claude

## Blog writing

Apply these rules whenever writing, editing, or refining any blog post content in this project (files in `_blog_posts/`).

### Voice and style

- Write like you're explaining something to a friend, not presenting at a conference.
- One idea per sentence. Short paragraphs.
- Story arc: what happened → what you noticed → what it means.
- Concrete beats abstract. A specific example is worth three general statements.
- Use "you" and "I" freely. First person is fine.
- No em dashes (—). They read as AI-written and the author dislikes them. Use a period, comma, colon, or parentheses instead.

### Titles and subtitles

The title earns the click. The subtitle (the `excerpt`) earns the read. Spend real effort on both.

- Create a curiosity gap so the reader *needs* the rest. An open loop or a small surprise beats a flat summary.
- Lean on genuine tension when it's there: "I expected X. I got Y." Reversals pull people in.
- Be specific. Numbers and concrete nouns ("25 sessions", "10,000 documents", "two days") beat vague abstractions ("key learnings", "my insights").
- Stay honest. The title must pay off in the post. Curiosity, not bait. Never promise what the writing doesn't deliver.
- The subtitle adds the next beat or raises the stakes. Don't just restate the title.
- Banned phrases apply to titles too.
- Always offer the author 3 to 4 title and subtitle pairs to choose from rather than committing to one.

### Buzz words

Avoid them unless the term is genuinely the right word. When you do use one:
1. Explain it in plain English in the same sentence or the one immediately after.
2. On its **first use only**, link it to the glossary: `[term](/glossary#slug)`.
3. Every subsequent mention: plain text, no repeat link.

**Banned phrases** (flag these and rewrite): "leverage", "seamless", "revolutionary", "game-changer", "cutting-edge", "robust", "scalable", "paradigm shift", "unlock", "empower", "transformative", "holistic", "synergy", "ecosystem" (unless literally referring to a software ecosystem).

### Glossary slug reference

When adding or editing a glossary entry (`src/app/glossary/page.tsx`), the definition must come from the official source (vendor docs, official product pages, the standard's own spec). Verify it before writing. You may rephrase it in plain English so it reads simply, but never invent a definition or guess at the meaning. If you can't confirm the official meaning, say so and ask rather than making one up.

| Term | Slug | Link |
|---|---|---|
| MCP / Model Context Protocol | `mcp` | `/glossary#mcp` |
| LLM / Large Language Model | `llm` | `/glossary#llm` |
| RAG / Retrieval-Augmented Generation | `rag` | `/glossary#rag` |
| Vector database | `vector-database` | `/glossary#vector-database` |
| Context window | `context-window` | `/glossary#context-window` |
| Rovo | `rovo` | `/glossary#rovo` |
| Rovo MCP / Atlassian Rovo MCP Server | `rovo-mcp` | `/glossary#rovo-mcp` |
| Forge | `forge` | `/glossary#forge` |
| Rovo Skills | `rovo-skills` | `/glossary#rovo-skills` |
| Spec-to-Code | `spec-to-code` | `/glossary#spec-to-code` |
| Orchestration (AI) | `orchestration` | `/glossary#orchestration` |
| Claude | `claude` | `/glossary#claude` |
| OpenAI | `openai` | `/glossary#openai` |

### Blog post frontmatter

Every post in `_blog_posts/` must have this frontmatter:

```yaml
---
title: ""
excerpt: ""
coverImage: "/assets/images/blogs/SLUG/cover.jpg"
date: "YYYY-MM-DD"
readTime: "X min read"
author:
  name: Vinoth (Vnoit)
  picture: "/assets/images/authors/vinoth-200x200-v2.jpg"
ogImage:
  url: "/assets/images/blogs/SLUG/og-image.jpg"
twitterHandle: "@vnoitkumar"
coverImageBlurHash: "data:image/jpeg;base64,..."
---
```

- `coverImageBlurHash` must always have a value (even a placeholder copied from an existing post). Next.js `Image` errors on an empty string.
- File name = URL slug. Use kebab-case.

## Project structure

- Blog posts: `_blog_posts/*.md`
- Pages: `src/app/[route]/page.tsx` (Next.js App Router)
- Markdown rendered with `markdown-it` + `gray-matter`
- Internal links (e.g. `/glossary#mcp`) stay in the same tab. The markdown renderer only applies `target="_blank"` to `http://` and `https://` links
