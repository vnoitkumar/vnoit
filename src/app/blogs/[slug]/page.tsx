import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllBlogPosts, getBlogPostBySlug } from "@/lib/api";
import markdownToHtml from "@/lib/markdownToHtml";
import { stripMarkdown } from "@/lib/stripMarkdown";
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

  const articleBody = stripMarkdown(post.content || "");
  const wordCount = articleBody.split(/\s+/).filter(Boolean).length;
  const postUrl = `https://vnoit.com/blogs/${slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: `https://vnoit.com${post.ogImage.url}`,
    url: postUrl,
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: "en",
    isAccessibleForFree: true,
    wordCount,
    articleBody,
    keywords: post.tag ? [post.tag] : undefined,
    articleSection: post.tag,
    author: {
      "@type": "Person",
      name: post.author.name,
      url: "https://vnoit.com",
      sameAs: [
        "https://www.linkedin.com/in/vnoit",
        "https://x.com/vnoitkumar",
        "https://github.com/vnoitkumar",
        "https://www.instagram.com/vnoitkumar",
      ],
    },
    publisher: {
      "@type": "Person",
      name: "Vinoth (Vnoit)",
      url: "https://vnoit.com",
      logo: {
        "@type": "ImageObject",
        url: "https://vnoit.com/assets/images/og-image-1200x630.jpg",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": postUrl,
    },
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://vnoit.com" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://vnoit.com/blogs" },
      { "@type": "ListItem", position: 3, name: post.title, item: postUrl },
    ],
  };

  return (
    <article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
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
