import { notFound } from "next/navigation";
import { getAllBlogPosts, getBlogPostBySlug } from "@/lib/api";
import markdownToHtml from "@/lib/markdownToHtml";
import { PostBody } from "@/components/post-body";
import { PostHeader } from "@/components/post-header";

export default async function Post({ params }) {
  const post = getBlogPostBySlug(params.slug);

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
      <PostBody
        content={content}
        coverImage={post.coverImage}
        title={post.title}
      />
    </article>
  );
}

export function generateMetadata({ params }) {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  return {
    title: `${post.title} | Vnoit`,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | Vnoit`,
      description: post.excerpt,
      type: "website",
      siteName: "Vnoit",
      url: `https://www.vnoit.com/blogs/${params.slug}`,
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

export async function generateStaticParams() {
  const posts = getAllBlogPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
