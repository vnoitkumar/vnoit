import fs from "fs";
import matter from "gray-matter";
import { join } from "path";
import type { BlogPost } from "@/types/blog";

const blogPostsDirectory = join(process.cwd(), "_blog_posts");

export function getBlogPostSlugs(): string[] {
  return fs.readdirSync(blogPostsDirectory).filter((file) => file.endsWith(".md"));
}

export function getBlogPostBySlug(slug: string): BlogPost | null {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(blogPostsDirectory, `${realSlug}.md`);

  let fileContents: string;
  try {
    fileContents = fs.readFileSync(fullPath, "utf8");
  } catch {
    return null;
  }

  const { data, content } = matter(fileContents);
  return { ...(data as Omit<BlogPost, "slug" | "content">), slug: realSlug, content };
}

export function getAllBlogPosts(): BlogPost[] {
  return getBlogPostSlugs()
    .map((slug) => getBlogPostBySlug(slug))
    .filter((post): post is BlogPost => post !== null)
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
}

export function getRecentPosts(): BlogPost[] {
  return getAllBlogPosts().slice(0, 3);
}
