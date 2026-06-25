import type { BlogPost } from "@/types/blog";

/**
 * Collects every image path a post references (cover first, then images used in
 * the body, in order). These feed the sitemap and the BlogPosting structured
 * data so the images can be discovered and surfaced in image search.
 */
export function getPostImagePaths(post: BlogPost): string[] {
  const paths: string[] = [];
  const seen = new Set<string>();

  const add = (path?: string) => {
    if (path && path.startsWith("/") && !seen.has(path)) {
      seen.add(path);
      paths.push(path);
    }
  };

  add(post.coverImage);

  const markdownImage = /!\[[^\]]*\]\((\/[^)\s]+)\)/g;
  const htmlImage = /<img[^>]+src="(\/[^"]+)"/g;

  let match: RegExpExecArray | null;
  while ((match = markdownImage.exec(post.content)) !== null) add(match[1]);
  while ((match = htmlImage.exec(post.content)) !== null) add(match[1]);

  return paths;
}
