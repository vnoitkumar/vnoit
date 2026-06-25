#!/usr/bin/env node
/**
 * Generate a `coverImageBlurHash` from a blog post's cover image.
 *
 * The blur hash here is a tiny base64-encoded JPEG used as the Next.js
 * `blurDataURL` (placeholder="blur"). It is produced by shrinking the cover
 * image to ~20px wide and re-encoding it as a low-quality JPEG.
 *
 * Usage:
 *   node scripts/generate-blurhash.mjs <slug>            Print the data URL for a post
 *   node scripts/generate-blurhash.mjs <slug> --write    Update the post's frontmatter
 *   node scripts/generate-blurhash.mjs <path/to.jpg>     Print the data URL for any image
 *   node scripts/generate-blurhash.mjs --all             Print the data URL for every post
 *   node scripts/generate-blurhash.mjs --all --write     Update every post's frontmatter
 *
 * Options:
 *   --write          Write the value back into the matching post's frontmatter
 *   --width <n>      Width of the placeholder in px (default 20)
 *   --quality <n>    JPEG quality 1-100 (default 40)
 *   -h, --help       Show this help
 */

import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";
import matter from "gray-matter";

const ROOT = path.resolve(fileURLToPath(import.meta.url), "../..");
const POSTS_DIR = path.join(ROOT, "_blog_posts");
const PUBLIC_DIR = path.join(ROOT, "public");

const DEFAULT_WIDTH = 20;
const DEFAULT_QUALITY = 40;

function printHelp() {
  console.log(
    `Generate a coverImageBlurHash from a cover image.\n\n` +
      `Usage:\n` +
      `  node scripts/generate-blurhash.mjs <slug>          Print the data URL for a post\n` +
      `  node scripts/generate-blurhash.mjs <slug> --write  Update the post's frontmatter\n` +
      `  node scripts/generate-blurhash.mjs <path/to.jpg>   Print the data URL for any image\n` +
      `  node scripts/generate-blurhash.mjs --all [--write] Process every post\n\n` +
      `Options:\n` +
      `  --write          Write the value back into the post's frontmatter\n` +
      `  --width <n>      Placeholder width in px (default ${DEFAULT_WIDTH})\n` +
      `  --quality <n>    JPEG quality 1-100 (default ${DEFAULT_QUALITY})\n` +
      `  -h, --help       Show this help`,
  );
}

function parseArgs(argv) {
  const flags = {
    write: false,
    all: false,
    width: DEFAULT_WIDTH,
    quality: DEFAULT_QUALITY,
  };
  const positionals = [];

  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    switch (arg) {
      case "--write":
        flags.write = true;
        break;
      case "--all":
        flags.all = true;
        break;
      case "--width":
        flags.width = Number(argv[++i]);
        break;
      case "--quality":
        flags.quality = Number(argv[++i]);
        break;
      case "-h":
      case "--help":
        printHelp();
        process.exit(0);
        break;
      default:
        positionals.push(arg);
    }
  }

  return { flags, positionals };
}

async function fileExists(p) {
  try {
    await fs.access(p);
    return true;
  } catch {
    return false;
  }
}

async function generateBlurHash(imagePath, { width, quality }) {
  const buffer = await sharp(imagePath)
    .resize(width, null, { fit: "inside" })
    .jpeg({ quality })
    .toBuffer();
  return `data:image/jpeg;base64,${buffer.toString("base64")}`;
}

/** Replace (or insert) the coverImageBlurHash line in raw frontmatter text. */
function setBlurHashLine(raw, blurHash) {
  const line = `coverImageBlurHash: "${blurHash}"`;
  // Use a function replacement so `$` in the value is never treated specially.
  if (/^coverImageBlurHash:.*$/m.test(raw)) {
    return raw.replace(/^coverImageBlurHash:.*$/m, () => line);
  }
  // No existing key: insert it just before the closing `---` of the frontmatter.
  const match = raw.match(/^---\n[\s\S]*?\n(---\n)/);
  if (!match) {
    throw new Error("Could not locate frontmatter to insert coverImageBlurHash");
  }
  const closingIndex = raw.indexOf(match[1], 4);
  return raw.slice(0, closingIndex) + line + "\n" + raw.slice(closingIndex);
}

async function processPost(slug, flags) {
  const postPath = path.join(POSTS_DIR, `${slug}.md`);
  const raw = await fs.readFile(postPath, "utf8");
  const { data } = matter(raw);

  if (!data.coverImage) {
    console.warn(`! ${slug}: no coverImage in frontmatter, skipping`);
    return;
  }

  const imagePath = path.join(PUBLIC_DIR, data.coverImage);
  if (!(await fileExists(imagePath))) {
    console.warn(`! ${slug}: cover image not found at ${imagePath}, skipping`);
    return;
  }

  const blurHash = await generateBlurHash(imagePath, flags);

  if (flags.write) {
    await fs.writeFile(postPath, setBlurHashLine(raw, blurHash));
    console.log(`✓ ${slug}: frontmatter updated`);
  } else {
    console.log(blurHash);
  }
}

async function main() {
  const { flags, positionals } = parseArgs(process.argv.slice(2));

  if (flags.all) {
    const files = (await fs.readdir(POSTS_DIR)).filter((f) => f.endsWith(".md"));
    for (const file of files.sort()) {
      await processPost(file.replace(/\.md$/, ""), flags);
    }
    return;
  }

  if (positionals.length !== 1) {
    printHelp();
    process.exit(1);
  }

  const arg = positionals[0];
  const slug = arg.replace(/\.md$/, "");
  const postPath = path.join(POSTS_DIR, `${slug}.md`);

  // A matching post means we can resolve the cover image (and optionally write).
  if (await fileExists(postPath)) {
    await processPost(slug, flags);
    return;
  }

  // Otherwise treat the argument as a direct path to an image file.
  if (await fileExists(arg)) {
    const blurHash = await generateBlurHash(path.resolve(arg), flags);
    if (flags.write) {
      console.warn(
        "! --write needs a post slug to know which frontmatter to update; printing instead",
      );
    }
    console.log(blurHash);
    return;
  }

  console.error(
    `Could not find post "_blog_posts/${slug}.md" or image file "${arg}".`,
  );
  process.exit(1);
}

main().catch((err) => {
  console.error(err.message ?? err);
  process.exit(1);
});
