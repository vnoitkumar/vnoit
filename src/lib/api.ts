import fs from "fs";
import matter from "gray-matter";
import { join } from "path";
import type { BlogPost } from "@/types/blog";

const blogPostsDirectory = join(process.cwd(), "_blog_posts");

export function getBlogPostSlugs(): string[] {
  return fs.readdirSync(blogPostsDirectory);
}

export function getBlogPostBySlug(slug: string): BlogPost {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(blogPostsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { ...(data as Omit<BlogPost, "slug" | "content">), slug: realSlug, content };
}

export function getAllBlogPosts(): BlogPost[] {
  const slugs = getBlogPostSlugs();
  const blogPosts = slugs
    .map((slug) => getBlogPostBySlug(slug))
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return blogPosts;
}

export function getRecentPosts(): BlogPost[] {
  const slugs = getBlogPostSlugs();
  const blogPosts = slugs
    .slice(0, 3)
    .map((slug) => getBlogPostBySlug(slug))
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return blogPosts;
}
