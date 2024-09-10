import Image from "next/image";

export const metadata = {
  title: "Vinoth (Vnoit) - About",
  description: "Exploring tech trends, coding tips, and innovation insights.",
  openGraph: {
    title: "Vinoth (Vnoit) - About",
    description: "Exploring tech trends, coding tips, and innovation insights.",
    type: "website",
    siteName: "Vnoit",
    url: "https://vnoit.com",
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
    title: "Vinoth (Vnoit) - About",
    description: "Exploring tech trends, coding tips, and innovation insights.",
    card: "summary_large_image",
    creator: "@vnoitkumar",
    images: {
      url: "/assets/images/og-image-3600x1890.jpg",
      alt: "Vinoth (Vnoit)",
    },
  },
};

function About() {
  return (
    <section className="mx-auto mt-1 max-w-7xl p-6 lg:px-8 block xl:flex gap-20">
      <div className="mb-10 xl:mb-0">
        <h2 className=" text-3xl font-bold leading-snug">
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

          <p className="text-jet-black/80 dark:text-baby-powder/80 font-medium mt-3">
            I&apos;ve primarily focused on the EdTech and FinTech sectors,
            working on projects aimed at enhancing and optimizing educational
            tools and financial applications.
          </p>

          <p className="text-jet-black/80 dark:text-baby-powder/80 font-medium mt-3">
            I have a strong appreciation for color theory and use&nbsp;
            <a
              href="https://coolors.co/"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              Coolors
            </a>
            &nbsp;to select color palettes for my projects. I enjoy designing
            posters in Figma and sharing them on X and LinkedIn; you can check
            them all out at&nbsp;
            <a
              href="https://vnoit.com/posters"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
              aria-label="Vinoth's posters created using Figma"
            >
              vnoit.com/posters
            </a>
            .
          </p>

          <p className="text-jet-black/80 dark:text-baby-powder/80 font-medium mt-3">
            Yep, that&apos;s me&nbsp;
            <span className="inline xl:hidden">at the bottom-</span>
            <span className="hidden xl:inline">on the right-</span>
            it&apos;s my best solo shot yet. Also, peep my profile on&nbsp;
            <a
              href="https://www.linkedin.com/in/vnoitkumar"
              aria-label="Vinoth's LinkedIn profile"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              LinkedIn
            </a>
            ,&nbsp;
            <a
              href="https://x.com/vnoitkumar"
              aria-label="Vinoth's X (formerly Twitter) profile"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              X
            </a>
            ,&nbsp;
            <a
              href="https://github.com/vnoitkumar"
              aria-label="Vinoth's GitHub profile"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              GitHub
            </a>
            , and&nbsp;
            <a
              href="https://stackoverflow.com/users/5154807/vnoitkumar"
              aria-label="Vinoth's Stack Overflow profile"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              Stack Overflow
            </a>
          </p>

          <p className="text-jet-black/80 dark:text-baby-powder/80 font-normal text-xs mt-3">
            Last updated at: 8th Sep 2024
          </p>
        </div>
      </div>
      <Image
        className="rounded-xl xl:mx-0 mx-auto xl:h-96 h-auto xl:w-96 w-auto"
        quality={100}
        src="/assets/images/authors/vinoth-2000x2000.jpg"
        height={500}
        width={500}
        alt="Picture of Vinoth (vnoit)"
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAgICAgJCAkKCgkNDgwODRMREBARExwUFhQWFBwrGx8bGx8bKyYuJSMlLiZENS8vNUROQj5CTl9VVV93cXecnNEBCAgICAkICQoKCQ0ODA4NExEQEBETHBQWFBYUHCsbHxsbHxsrJi4lIyUuJkQ1Ly81RE5CPkJOX1VVX3dxd5yc0f/CABEIAA8ADwMBIgACEQEDEQH/xAAqAAADAQAAAAAAAAAAAAAAAAADBQYHAQEBAAAAAAAAAAAAAAAAAAAEBf/aAAwDAQACEAMQAAAAvCZs+RP/AP/EAB8QAAICAQUBAQAAAAAAAAAAAAIDAQQFAAYREjIUUf/aAAgBAQABPwDcjCVimlFw6sdh7ND1A628b24em51wrMsDuLSGBIgLzzxpjRz2Vy7SZZ6JsklcAURxAj+FrZZMC9k6wGfyqAIUBT541//EABcRAAMBAAAAAAAAAAAAAAAAAAAxQUP/2gAIAQIBAT8A0cP/xAAcEQABBAMBAAAAAAAAAAAAAAABAhESIQADBHH/2gAIAQMBAT8AXpCeVqkFSJa/M//Z"
        priority
      />
    </section>
  );
}

export default About;
