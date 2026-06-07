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

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Vinoth (Vnoit) — Blog",
    description: blogsDescription,
    url: "https://vnoit.com/blogs",
    inLanguage: "en",
    author: { "@id": "https://vnoit.com/#person" },
    publisher: { "@id": "https://vnoit.com/#person" },
    blogPost: allPosts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.excerpt,
      url: `https://vnoit.com/blogs/${post.slug}`,
      image: `https://vnoit.com${post.ogImage.url}`,
      datePublished: new Date(post.date).toISOString(),
      author: { "@id": "https://vnoit.com/#person" },
    })),
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://vnoit.com" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://vnoit.com/blogs" },
    ],
  };

  return (
    <section className="mb-12 mx-auto mt-3 max-w-7xl p-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
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
