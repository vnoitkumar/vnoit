import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

const blogPostsDirectory = join(process.cwd(), "_blog_posts");

export function getBlogPostSlugs() {
  return fs.readdirSync(blogPostsDirectory);
}

export function getBlogPostBySlug(slug) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(blogPostsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { ...data, slug: realSlug, content };
}

export function getAllBlogPosts() {
  const slugs = getBlogPostSlugs();
  const blogPosts = slugs
    .map((slug) => getBlogPostBySlug(slug))
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return blogPosts;
}

export function getRecentPosts() {
  const slugs = getBlogPostSlugs();
  const blogPosts = slugs
    .slice(0, 3)
    .map((slug) => getBlogPostBySlug(slug))
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return blogPosts;
}
