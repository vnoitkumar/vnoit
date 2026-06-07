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

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: `https://vnoit.com${post.ogImage.url}`,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Person",
      name: post.author.name,
      url: "https://vnoit.com",
    },
    publisher: {
      "@type": "Person",
      name: "Vinoth (Vnoit)",
      url: "https://vnoit.com",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://vnoit.com/blogs/${slug}`,
    },
  };

  return (
    <article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
    alternates: { canonical: `/blogs/${slug}` },
    openGraph: {
      title: `${post.title} | Vnoit`,
      description: post.excerpt,
      type: "article",
      siteName: "Vnoit",
      url: `https://vnoit.com/blogs/${slug}`,
      publishedTime: post.date,
      modifiedTime: post.date,
      authors: [post.author.name],
      tags: post.tag ? [post.tag] : undefined,
      images: [post.ogImage.url],
    },
    twitter: {
      title: `${post.title} | Vnoit`,
      description: post.excerpt,
      card: "summary_large_image",
      creator: post.twitterHandle,
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
