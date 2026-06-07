import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllBlogPosts, getBlogPostBySlug } from "@/lib/api";
import markdownToHtml from "@/lib/markdownToHtml";
import { PostBody } from "@/components/post-body";
import { PostHeader } from "@/components/post-header";

type Params = Promise<{ slug: string }>;

export default async function Post({ params }: { params: Params }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return notFound();
  }

  const content = await markdownToHtml(post.content || "");

  return (
    <article>
      <PostHeader
        title={post.title}
        date={post.date}
        author={post.author}
        excerpt={post.excerpt}
        coverImage={post.coverImage}
        readTime={post.readTime}
        coverImageBlurHash={post.coverImageBlurHash}
      />
      <PostBody content={content} />
    </article>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return notFound();
  }

  return {
    title: `${post.title} | Vnoit`,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | Vnoit`,
      description: post.excerpt,
      type: "article",
      siteName: "Vnoit",
      url: `https://vnoit.com/blogs/${slug}`,
      images: [post.ogImage.url],
      authors: [post.author.name],
    },
    twitter: {
      title: `${post.title} | Vnoit`,
      description: post.excerpt,
      card: "summary_large_image",
      creator: post.twitterHandel,
      images: [post.ogImage.url],
    },
  };
}

export function generateStaticParams() {
  const posts = getAllBlogPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
