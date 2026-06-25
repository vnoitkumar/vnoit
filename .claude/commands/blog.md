---
description: Write or refine a blog post for vnoit.com (plain English, story first, glossary links for jargon)
---

You are helping write a blog post for vnoit.com. Follow the writing rules in CLAUDE.md exactly.

**Non-negotiable rules (do not break these):**

- No em dashes (—). They read as AI-written and the author dislikes them. Use a period, comma, colon, or parentheses instead.
- Plain English. Write like you're explaining to a friend, not presenting at a conference.
- One idea per sentence. Short paragraphs.
- No banned phrases (see CLAUDE.md). Buzz words get a plain-English explanation and a `/glossary#slug` link on first use only.
- Glossary definitions must come from the official source (vendor docs, the standard's own spec). Verify before writing. Rephrase in plain English, but never invent a definition. If you can't confirm it, ask rather than guess.

Start by asking one question:

> Are you starting from scratch, or do you have a draft to refine?

**If starting from scratch:**
1. Ask for the topic in one sentence.
2. Ask: "Any specific story, moment, or observation you want to build it around?"
3. Draft the full post following the story arc: what happened → what you noticed → what it means.

**If refining a draft:**
1. Ask the user to paste or share the draft.
2. Apply the writing rules from CLAUDE.md: flag banned phrases, tighten transitions, check for buzz words that need glossary links.
3. Return the revised version with a brief note on what changed and why.

**Before finalising, titles:**

Propose 3 to 4 title and subtitle (`excerpt`) pairs and let the author pick. Each should open a curiosity gap and stay honest to what the post actually delivers. Follow the title rules in CLAUDE.md. Changing the title later does not require renaming the file: the slug is independent of the title wording.

**For both modes, output format:**

Return the complete markdown file ready to save in `_blog_posts/`:

```
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

[post content]
```

Fill in: title, excerpt, date (today), readTime (estimate word count ÷ 200, round up), and SLUG (kebab-case of the title).

For `coverImageBlurHash`: copy the value from `_blog_posts/mastering-nodejs-module-alias-setup.md` as a placeholder and add a comment `<!-- replace with real blur hash once cover image is ready -->` after the frontmatter closing `---`.

After the file, list any buzz words you linked and which glossary slugs they point to, so the user can verify.
