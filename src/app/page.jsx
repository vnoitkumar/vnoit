import { getRecentPosts } from "@/lib/api";
import PostPreview from "@/components/post-preview";
import Link from "next/link";

const projects = [
  {
    title: "Code Snap",
    description: "Share your source code in image formate",
    demoLink: "https://code-snap.vnoit.com",
    gitHubLink: "https://github.com/vnoitkumar/code-snap",
  },
  {
    title: "Tab Sync",
    description:
      "Changing the theme in one tab will also change in all the other open tabs of the same website using a service worker",
    demoLink: "https://tab-sync.vnoit.com",
    gitHubLink: "https://github.com/vnoitkumar/tab-sync",
  },
  {
    title: "Case Converter",
    description: "A simple case converter",
    demoLink: "https://case-converter.vnoit.com",
    gitHubLink: "https://github.com/vnoitkumar/case-converter",
  },
  {
    title: "JS executer",
    description: "Online JavaScript Editor",
    demoLink: "https://jsexecuter.vnoit.com",
    gitHubLink: "https://github.com/vnoitkumar/js-executer",
  },
  {
    title: "Show Password",
    description:
      "A Google Chrome extension, Show password when clicking the extension icon",
    demoLink:
      "https://chromewebstore.google.com/detail/show-password/gjelmlndokgfcnodogpcijjpoggcdnak",
    gitHubLink: "https://github.com/vnoitkumar/show-password",
  },
];

export default function Home() {
  const recentPosts = getRecentPosts();

  return (
    <section className="mx-auto mt-3 max-w-7xl p-6 lg:px-8">
      <section className="mb-12">
        <h2 className="text-3xl font-bold leading-snug">
          Hey 👋 y&apos;all, I&apos;m Vinoth (Vnoit)!
        </h2>
        <div>
          <p className="text-jet-black/80 dark:text-baby-powder/80 font-medium mt-3">
            I&apos;m a Senior Consultant at&nbsp;
            <a
              href="https://www.thoughtworks.com/en-in"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
              aria-label="Thoughtworks"
            >
              Thoughtworks
            </a>
            &nbsp;in Bengaluru, India, capable of crafting applications with
            Golang, Node.js, React, React Native, etc.
          </p>

          <p className="text-jet-black/80 dark:text-baby-powder/80 font-medium mt-3">
            I love dropping knowledge and sharing my thoughts over at&nbsp;
            <a
              href="https://vnoit.com/blogs"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
              aria-label="Vinoth's blogs"
            >
              vnoit.com/blogs
            </a>
            . I also make time to teach and mentor people online. If you&apos;re
            curious, check out my profile on&nbsp;
            <a
              className="link"
              href="https://www.teacheron.com/tutor/1OZp"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Vinoth's TeacherOn profile"
            >
              TeacherOn
            </a>
            .
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className=" text-xl font-semibold leading-snug mb-3">
          Recent Blogs
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
          {recentPosts.map((post) => (
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
        <h2 className=" text-xl font-semibold leading-snug mb-3">
          My Projects
        </h2>
        <div className="grid grid-cols-12 gap-5">
          {projects.map((project, index) => {
            return (
              <div
                key={index}
                className="col-span-12 sm:col-span-6 lg:col-span-4 border dark:border-baby-powder/20 border-jet-black/20 rounded-xl shadow-sm p-5"
              >
                <h3 className="font-semibold my-2 link">
                  {project.demoLink ? (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={project.title}
                    >
                      {project.title}
                    </a>
                  ) : (
                    <span>{project.title}</span>
                  )}
                </h3>
                <div className="line-clamp-2  mb-4 min-h-[50px]">
                  <p>{project.description}</p>
                </div>
                <div className="flex justify-end gap-4">
                  {project.demoLink && (
                    <a
                      className="flex items-center gap-1 "
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={project.title}
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
                      >
                        <path d="M15 3h6v6" />
                        <path d="M10 14 21 3" />
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      </svg>
                    </a>
                  )}

                  {project.gitHubLink && (
                    <a
                      className="flex items-center gap-1 "
                      href={project.gitHubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={project.title}
                    >
                      GitHub
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
                      >
                        <path d="M15 3h6v6" />
                        <path d="M10 14 21 3" />
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </section>
  );
}
