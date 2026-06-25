# Vnoit — Personal Website & Blog

Personal website and blog of Vinoth Kumar, built with Next.js 16, TypeScript, and Tailwind CSS v4. Live at [vnoit.com](https://vnoit.com).

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Content:** Markdown files parsed with `gray-matter` and rendered with `markdown-it`
- **Syntax highlighting:** highlight.js
- **Font:** Work Sans (Google Fonts)

## Features

- Blog with markdown-based posts (`/_blog_posts/*.md`)
- About page
- Code with Vinoth section
- Dark mode support
- Google Analytics
- Structured data / Open Graph / Twitter card metadata
- Sitemap and robots.txt

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Other scripts:

```bash
npm run build      # production build
npm run start      # serve production build
npm run lint       # ESLint
npm run typecheck  # TypeScript check
```

## Adding a Blog Post

Create a new `.md` file in `/_blog_posts/` with the required frontmatter. To generate a blurred cover image placeholder:

1. Open [Squoosh](https://squoosh.app/editor), reduce the image width to **10px**, and save.
2. Convert the resized image to a Base64 Data URI using [Base64 Guru](https://base64.guru/converter/encode/image) (select **Data URI** as the output format).
3. Use the resulting string as the `coverImageBlur` field in the frontmatter.

## Useful References

- [Next.js Metadata Files API](https://nextjs.org/docs/app/api-reference/file-conventions/metadata)

## TODO

- [ ] Write short blog posts for events I hosted over the past year — one post per event
- [ ] Build a gallery page — images from events, profile shots, photos I took, and visuals I created for blog posts (diagrams, illustrations)
