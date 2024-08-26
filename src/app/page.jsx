import { getAllPosts } from "@/lib/api";
import PostPreview from "@/components/post-preview";
import Link from "next/link";

export default function Home() {
  const allPosts = getAllPosts();

  return (
    <main className="mx-auto mt-1 max-w-7xl p-6 lg:px-8">
      <section className="mb-12">
        <h2 className="text-custom-black dark:text-baby-powder text-3xl font-bold leading-snug">
          Hi There 👋, Vinoth (Vnoit) Here!
        </h2>
        <div>
          <p className="text-custom-black/80 dark:text-baby-powder/80 font-medium mt-3">
            I am a Front-end Engineer from Indonesia. I love sharing what i know
            on devaradise.com, and sometime i also share freebies like this. I'm
            also active on dev.to and twitter.
          </p>

          <p className="text-custom-black/80 dark:text-baby-powder/80 font-medium mt-3">
            I made Devolio to help you easily set up your own blog and portfolio
            website. It's a static site built with Astro and Tailwind CSS, and
            you can deploy it on platforms like Netlify, Vercel, or Cloudflare
            Pages.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-custom-black dark:text-baby-powder text-xl font-semibold leading-snug mb-3">
          Recent Posts
        </h2>
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

      <section className="mb-12">
        <h2 className="text-custom-black dark:text-baby-powder text-xl font-semibold leading-snug mb-3">
          My Projects
        </h2>
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-12 sm:col-span-6 lg:col-span-4 border dark:border-zinc-700 rounded-xl shadow-sm p-5">
            <div className="flex justify-between items-center">
              <div className="flex gap-2">
                <span className="border border-zinc-300 dark:border-zinc-700 rounded-2xl text-sm text-zinc-700 dark:text-zinc-300 no-underline px-2 py-0.5 transition-all duration-700 hover:border-zinc-700 dark:hover:border-zinc-300">
                  Blog
                </span>
              </div>
            </div>
            <h3 className="font-semibold my-2">
              <a
                className="underline"
                href="https://devaradise.com"
                target="_blank"
              >
                Devaradise.com
              </a>
            </h3>
            <div className="line-clamp-2 text-zinc-600 dark:text-zinc-300 mb-4 min-h-[50px]">
              <p>A blog that sharing web development resources and tutorials</p>
            </div>
            <div className="flex justify-end gap-3">
              <a
                className="underline flex items-center gap-2"
                href="https://devaradise.com"
                target="_blank"
              >
                Demo
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={14}
                  height={14}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-external-link"
                >
                  <path d="M15 3h6v6" />
                  <path d="M10 14 21 3" />
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                </svg>
              </a>
            </div>
          </div>
          <div className="col-span-12 sm:col-span-6 lg:col-span-4 border dark:border-zinc-700 rounded-xl shadow-sm p-5">
            <div className="flex justify-between items-center">
              <div className="flex gap-2">
                <span className="border border-zinc-300 dark:border-zinc-700 rounded-2xl text-sm text-zinc-700 dark:text-zinc-300 no-underline px-2 py-0.5 transition-all duration-700 hover:border-zinc-700 dark:hover:border-zinc-300">
                  ECommerce{" "}
                </span>
                <span className="border border-zinc-300 dark:border-zinc-700 rounded-2xl text-sm text-zinc-700 dark:text-zinc-300 no-underline px-2 py-0.5 transition-all duration-700 hover:border-zinc-700 dark:hover:border-zinc-300">
                  Saas
                </span>
              </div>
            </div>
            <h3 className="font-semibold my-2">
              <a
                className="underline"
                href="https://sellercraft.co"
                target="_blank"
                rel="nofollow noopener noreferrer"
              >
                Sellercraft App
              </a>
            </h3>
            <div className="line-clamp-2 text-zinc-600 dark:text-zinc-300 mb-4 min-h-[50px]">
              <p>An Ecommerce omnichannel platform in Southeast Asia</p>
            </div>
            <div className="flex justify-end gap-3">
              <a
                className="underline flex items-center gap-2"
                href="https://sellercraft.co"
                target="_blank"
                rel="nofollow noopener noreferrer"
              >
                Demo
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={14}
                  height={14}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-external-link"
                >
                  <path d="M15 3h6v6" />
                  <path d="M10 14 21 3" />
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                </svg>
              </a>
            </div>
          </div>
          <div className="col-span-12 sm:col-span-6 lg:col-span-4 border dark:border-zinc-700 rounded-xl shadow-sm p-5">
            <div className="flex justify-between items-center">
              <div className="flex gap-2">
                <span className="border border-zinc-300 dark:border-zinc-700 rounded-2xl text-sm text-zinc-700 dark:text-zinc-300 no-underline px-2 py-0.5 transition-all duration-700 hover:border-zinc-700 dark:hover:border-zinc-300">
                  HRIS{" "}
                </span>
                <span className="border border-zinc-300 dark:border-zinc-700 rounded-2xl text-sm text-zinc-700 dark:text-zinc-300 no-underline px-2 py-0.5 transition-all duration-700 hover:border-zinc-700 dark:hover:border-zinc-300">
                  Saas
                </span>
              </div>
            </div>
            <h3 className="font-semibold my-2">
              <a
                className="underline"
                href="https://sellercraft.co"
                target="_blank"
                rel="nofollow noopener noreferrer"
              >
                Gaji.id App
              </a>
            </h3>
            <div className="line-clamp-2 text-zinc-600 dark:text-zinc-300 mb-4 min-h-[50px]">
              <p>Payroll and HR Management Information System</p>
            </div>
            <div className="flex justify-end gap-3">
              <a
                className="underline flex items-center gap-2"
                href="https://sellercraft.co"
                target="_blank"
                rel="nofollow noopener noreferrer"
              >
                Demo
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={14}
                  height={14}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-external-link"
                >
                  <path d="M15 3h6v6" />
                  <path d="M10 14 21 3" />
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                </svg>
              </a>
            </div>
          </div>
          <div className="col-span-12 sm:col-span-6 lg:col-span-4 border dark:border-zinc-700 rounded-xl shadow-sm p-5">
            <div className="flex justify-between items-center">
              <div className="flex gap-2">
                <span className="border border-zinc-300 dark:border-zinc-700 rounded-2xl text-sm text-zinc-700 dark:text-zinc-300 no-underline px-2 py-0.5 transition-all duration-700 hover:border-zinc-700 dark:hover:border-zinc-300">
                  React{" "}
                </span>
                <span className="border border-zinc-300 dark:border-zinc-700 rounded-2xl text-sm text-zinc-700 dark:text-zinc-300 no-underline px-2 py-0.5 transition-all duration-700 hover:border-zinc-700 dark:hover:border-zinc-300">
                  UI Library
                </span>
              </div>
              <div className="shrink-0">
                <a
                  href="https://github.com/devaradise/paradise-ui"
                  target="_blank"
                  className="border border-zinc-300 dark:border-zinc-700 rounded-2xl text-xs text-zinc-700 dark:text-zinc-300 no-underline px-2 py-0.5 transition-all duration-700 hover:border-zinc-700 dark:hover:border-zinc-300 flex items-center gap-1"
                >
                  <img
                    src="/_astro/github-mark.BwyJR_2w_ZVmsMd.svg"
                    className="dark:hidden"
                    alt="Github stars"
                    width={12}
                    height={12}
                    loading="lazy"
                    decoding="async"
                  />
                  <img
                    src="/_astro/github-mark-white.S2fJVXLq_Z1dVRq4.svg"
                    className="hidden dark:block"
                    alt="Github stars"
                    width={12}
                    height={12}
                    loading="lazy"
                    decoding="async"
                  />
                  13 stars
                </a>
              </div>
            </div>
            <h3 className="font-semibold my-2">
              <a
                className="underline"
                href="https://paradise-ui.com"
                target="_blank"
              >
                Paradise UI
              </a>
            </h3>
            <div className="line-clamp-2 text-zinc-600 dark:text-zinc-300 mb-4 min-h-[50px]">
              <p>
                A Headless, Simple, Modular and Highly customizable React UI
                component Library
              </p>
            </div>
            <div className="flex justify-end gap-3">
              <a
                className="underline flex items-center gap-2"
                href="https://devaradise.com/how-i-build-paradise-ui-react-component-library/"
              >
                Article
              </a>
              <a
                className="underline flex items-center gap-2"
                href="https://paradise-ui.com"
                target="_blank"
              >
                Demo
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={14}
                  height={14}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-external-link"
                >
                  <path d="M15 3h6v6" />
                  <path d="M10 14 21 3" />
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                </svg>
              </a>
            </div>
          </div>
          <div className="col-span-12 sm:col-span-6 lg:col-span-4 border dark:border-zinc-700 rounded-xl shadow-sm p-5">
            <div className="flex justify-between items-center">
              <div className="flex gap-2">
                <span className="border border-zinc-300 dark:border-zinc-700 rounded-2xl text-sm text-zinc-700 dark:text-zinc-300 no-underline px-2 py-0.5 transition-all duration-700 hover:border-zinc-700 dark:hover:border-zinc-300">
                  React
                </span>
              </div>
              <div className="shrink-0">
                <a
                  href="https://github.com/syakirurahman/react-lab"
                  target="_blank"
                  className="border border-zinc-300 dark:border-zinc-700 rounded-2xl text-xs text-zinc-700 dark:text-zinc-300 no-underline px-2 py-0.5 transition-all duration-700 hover:border-zinc-700 dark:hover:border-zinc-300 flex items-center gap-1"
                >
                  <img
                    src="/_astro/github-mark.BwyJR_2w_ZVmsMd.svg"
                    className="dark:hidden"
                    alt="Github stars"
                    width={12}
                    height={12}
                    loading="lazy"
                    decoding="async"
                  />
                  <img
                    src="/_astro/github-mark-white.S2fJVXLq_Z1dVRq4.svg"
                    className="hidden dark:block"
                    alt="Github stars"
                    width={12}
                    height={12}
                    loading="lazy"
                    decoding="async"
                  />
                  19 stars
                </a>
              </div>
            </div>
            <h3 className="font-semibold my-2">
              <a
                className="underline"
                href="https://devaradise.com/lab/react/"
                target="_blank"
              >
                React Lab
              </a>
            </h3>
            <div className="line-clamp-2 text-zinc-600 dark:text-zinc-300 mb-4 min-h-[50px]">
              <p>React Lab - React UI Component Experiments</p>
            </div>
            <div className="flex justify-end gap-3">
              <a
                className="underline flex items-center gap-2"
                href="https://devaradise.com/lab/react/"
                target="_blank"
              >
                Demo
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={14}
                  height={14}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-external-link"
                >
                  <path d="M15 3h6v6" />
                  <path d="M10 14 21 3" />
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                </svg>
              </a>
            </div>
          </div>
          <div className="col-span-12 sm:col-span-6 lg:col-span-4 border dark:border-zinc-700 rounded-xl shadow-sm p-5">
            <div className="flex justify-between items-center">
              <div className="flex gap-2">
                <span className="border border-zinc-300 dark:border-zinc-700 rounded-2xl text-sm text-zinc-700 dark:text-zinc-300 no-underline px-2 py-0.5 transition-all duration-700 hover:border-zinc-700 dark:hover:border-zinc-300">
                  Hobby
                </span>
              </div>
              <div className="shrink-0">
                <a
                  href="https://github.com/syakirurahman/pokemon-catcher"
                  target="_blank"
                  className="border border-zinc-300 dark:border-zinc-700 rounded-2xl text-xs text-zinc-700 dark:text-zinc-300 no-underline px-2 py-0.5 transition-all duration-700 hover:border-zinc-700 dark:hover:border-zinc-300 flex items-center gap-1"
                >
                  <img
                    src="/_astro/github-mark.BwyJR_2w_ZVmsMd.svg"
                    className="dark:hidden"
                    alt="Github stars"
                    width={12}
                    height={12}
                    loading="lazy"
                    decoding="async"
                  />
                  <img
                    src="/_astro/github-mark-white.S2fJVXLq_Z1dVRq4.svg"
                    className="hidden dark:block"
                    alt="Github stars"
                    width={12}
                    height={12}
                    loading="lazy"
                    decoding="async"
                  />
                  0 stars
                </a>
              </div>
            </div>
            <h3 className="font-semibold my-2">
              <a
                className="underline"
                href="https://pokemon-catcher-18636.web.app/"
                target="_blank"
              >
                Pokemon Catcher
              </a>
            </h3>
            <div className="line-clamp-2 text-zinc-600 dark:text-zinc-300 mb-4 min-h-[50px]">
              <p>
                A simple web app to search and catch a pokemon using React,
                Redux Toolkit, and MaterialUI
              </p>
            </div>
            <div className="flex justify-end gap-3">
              <a
                className="underline flex items-center gap-2"
                href="https://pokemon-catcher-18636.web.app/"
                target="_blank"
              >
                Demo
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={14}
                  height={14}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-external-link"
                >
                  <path d="M15 3h6v6" />
                  <path d="M10 14 21 3" />
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
