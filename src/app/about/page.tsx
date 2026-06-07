import type { Metadata } from "next";
import Image from "next/image";
import Intro from "@/components/intro";

const aboutDescription =
  "About Vinoth (Vnoit) — Lead Consultant at Thoughtworks in Bengaluru, crafting software across the stack. Career, interests, and how to get in touch.";

export const metadata: Metadata = {
  title: "Vinoth (Vnoit) - About",
  description: aboutDescription,
  alternates: { canonical: "/about" },
  openGraph: {
    title: "Vinoth (Vnoit) - About",
    description: aboutDescription,
    type: "website",
    siteName: "Vnoit",
    url: "https://vnoit.com/about",
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
    description: aboutDescription,
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
    <section className="mx-auto mt-3 max-w-7xl p-6 lg:px-8 block xl:flex gap-20">
      <div className="mb-10 xl:mb-0">
        <Intro />
        <div>
          <p className="text-jet-black/80 dark:text-baby-powder/80 font-medium mt-3">
            My career has spanned a few industries. I started in Chennai,
            working on EdTech products before moving into FinTech with a
            peer-to-peer lending app, and later returning to EdTech for a UAE
            client alongside a white-label OTT product. I joined Thoughtworks
            while still in Chennai and spent four years on a major Indian
            bank&apos;s web, mobile, and backend systems, relocating to
            Bengaluru mid-2022 partway through. From there I moved to a
            cross-border payments platform for a Dubai client, and I&apos;m
            currently working in energy commerce.
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
            posters in Figma and sharing them on{" "}
            <a
              href="https://x.com/vnoitkumar"
              aria-label="Vinoth's X (formerly Twitter) profile"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              X
            </a>{" "}
            and{" "}
            <a
              href="https://www.linkedin.com/in/vnoit"
              aria-label="Vinoth's LinkedIn profile"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              LinkedIn
            </a>
            .
          </p>

          <p className="text-jet-black/80 dark:text-baby-powder/80 font-medium mt-3">
            Yep, that&apos;s me&nbsp;
            <span className="inline xl:hidden">at the bottom-</span>
            <span className="hidden xl:inline">on the right-</span>
            it&apos;s my best solo shot yet. Also, peep my profile on&nbsp;
            <a
              href="https://www.linkedin.com/in/vnoit"
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
            , and&nbsp;
            <a
              href="https://github.com/vnoitkumar"
              aria-label="Vinoth's GitHub profile"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              GitHub
            </a>
          </p>

          <p className="text-jet-black/80 dark:text-baby-powder/80 font-normal text-xs mt-3">
            Last updated at: 29th May 2026
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
