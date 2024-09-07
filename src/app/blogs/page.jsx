import { getAllPosts } from "@/lib/api";
import PostPreview from "@/components/post-preview";

export const metadata = {
  title: "Vinoth (Vnoit) - Blogs",
  description: "Exploring tech trends, coding tips, and innovation insights.",
  openGraph: {
    title: "Vinoth (Vnoit) - Blogs",
    description: "Exploring tech trends, coding tips, and innovation insights.",
    type: "website",
    siteName: "Vnoit",
    url: "https://vnoit.com",
    images: [
      {
        url: "/assets/images/og-image-3000x1500.jpg",
        width: 3000,
        height: 1500,
        alt: "Vinoth (Vnoit) - Blogs",
      },
      {
        url: "/assets/images/og-image-1000x500.jpg",
        width: 1000,
        height: 500,
        alt: "Vinoth (Vnoit) - Blogs",
      },
    ],
  },
  twitter: {
    title: "Vinoth (Vnoit) - Blogs",
    description: "Exploring tech trends, coding tips, and innovation insights.",
    card: "summary_large_image",
    creator: "@vnoitkumar",
    url: "/assets/images/og-image-3000x1500.jpg",
  },
};


function Blogs() {
  const allPosts = getAllPosts();
  return (
    <section className="mb-12 mx-auto mt-1 max-w-7xl p-6 lg:px-8">
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
