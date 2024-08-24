import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/api";
import markdownToHtml from "@/lib/markdownToHtml";
import { PostBody } from "@/components/post-body";
import { PostHeader } from "@/components/post-header";

export default async function Post({ params }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const content = await markdownToHtml(post.content || "");

  return (
    <main>
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
    </main>
  );
}

export function generateMetadata({ params }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "website",
      siteName: "Vnoit",
      url: `https://vnoit.com/posts/${params.slug}`,
      description: post.excerpt,
      images: [post.ogImage.url],
      authors: [post.author.name],
    },
    twitter: {
      title: post.title,
      description: post.excerpt,
      card: "summary_large_image",
      creator: post.twitterHandel,
      images: [post.ogImage.url],
    },
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
