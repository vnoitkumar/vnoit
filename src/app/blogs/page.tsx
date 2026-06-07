import type { Metadata } from "next";
import { getAllBlogPosts } from "@/lib/api";
import PostPreview from "@/components/post-preview";

const blogsDescription =
  "Articles by Vinoth (Vnoit) on software craft, backend and frontend engineering, and lessons from building real-world applications.";

export const metadata: Metadata = {
  title: "Vinoth (Vnoit) - Blogs",
  description: blogsDescription,
  alternates: { canonical: "/blogs" },
  openGraph: {
    title: "Vinoth (Vnoit) - Blogs",
    description: blogsDescription,
    type: "website",
    siteName: "Vnoit",
    url: "https://vnoit.com/blogs",
    images: [
      {
        url: "/assets/images/og-image-3600x1890.jpg",
        width: 3600,
        height: 1890,
        alt: "Vinoth (Vnoit)",
      },
      {
        url: "/assets/images/og-image-1800x945.jpg",
        width: 1800,
        height: 945,
        alt: "Vinoth (Vnoit)",
      },
      {
        url: "/assets/images/og-image-1200x630.jpg",
        width: 1200,
        height: 630,
        alt: "Vinoth (Vnoit)",
      },
    ],
  },
  twitter: {
    title: "Vinoth (Vnoit) - Blogs",
    description: blogsDescription,
    card: "summary_large_image",
    creator: "@vnoitkumar",
    images: {
      url: "/assets/images/og-image-3600x1890.jpg",
      alt: "Vinoth (Vnoit)",
    },
  },
};

function Blogs() {
  const allPosts = getAllBlogPosts();
  return (
    <section className="mb-12 mx-auto mt-3 max-w-7xl p-6 lg:px-8">
      <h1 className=" text-xl font-semibold leading-snug mb-3">
        All Blogs
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
        {allPosts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
            tag={post.tag}
            readTime={post.readTime}
            coverImageBlurHash={post.coverImageBlurHash}
          />
        ))}
      </div>
    </section>
  );
}

export default Blogs;
