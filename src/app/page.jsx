import { getAllPosts } from "@/lib/api";

import Footer from "@/components/footer";
import Header from "@/components/header";
import PostPreview from "@/components/post-preview";

export default function Home() {
  const allPosts = getAllPosts();

  return (
    <main className="mx-auto mt-1 max-w-7xl p-6 lg:px-8">
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
          />
        ))}
      </div>
    </main>
  );
}
