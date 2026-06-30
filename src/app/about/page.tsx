import type { Metadata } from "next";
import Image from "next/image";
import Intro from "@/components/intro";
import Career from "@/components/career";

// The experience timeline computes "Present · N mos" from the current date, so
// regenerate the statically rendered page daily to keep those durations fresh.
export const revalidate = 86400;

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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    name: "About Vinoth (Vnoit)",
    description: aboutDescription,
    url: "https://vnoit.com/about",
    inLanguage: "en",
    mainEntity: { "@id": "https://vnoit.com/#person" },
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://vnoit.com" },
      { "@type": "ListItem", position: 2, name: "About", item: "https://vnoit.com/about" },
    ],
  };

  return (
    <>
    <section className="mx-auto mt-3 max-w-7xl p-6 lg:px-8 block xl:flex gap-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <div className="mb-10 xl:mb-0">
        <Intro />
        <div>
          <p className="text-jet-black/80 dark:text-baby-powder/80 font-medium mt-3">
            My career&apos;s taken me across a few industries. I started in
            Chennai, working on EdTech products before jumping into FinTech with
            a peer-to-peer lending app, then back to EdTech for a UAE client
            alongside a white-label OTT product. I joined Thoughtworks while
            still in Chennai and spent four years on a major Indian bank&apos;s
            web, mobile, and backend systems, relocating to Bengaluru mid-2022
            partway through. From there I moved to a cross-border payments
            platform for a Dubai client, and these days I&apos;m working in
            energy commerce.
          </p>

          <p className="text-jet-black/80 dark:text-baby-powder/80 font-medium mt-3">
            Yep, that&apos;s me
            <span className="inline xl:hidden">&nbsp;at the bottom-</span>
            <span className="hidden xl:inline">&nbsp;on the right-</span>
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

          <p className="text-jet-black/80 dark:text-baby-powder/80 font-medium mt-3">
            Want to reach me directly? Give me a call on{" "}
            <a
              href="tel:+917708521528"
              className="link"
              aria-label="Call Vinoth"
            >
              +91&nbsp;77085&nbsp;21528
            </a>
            , drop a line at{" "}
            <a
              href="mailto:vnoitkumar@gmail.com"
              className="link"
              aria-label="Email Vinoth"
            >
              vnoitkumar@gmail.com
            </a>
            , or message me on{" "}
            <a
              href="https://wa.me/917708521528"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
              aria-label="Message Vinoth on WhatsApp"
            >
              WhatsApp
            </a>
            .
          </p>

          <p className="text-jet-black/80 dark:text-baby-powder/80 font-normal text-xs mt-3">
            Last updated at: 30th June 2026
          </p>
        </div>
      </div>
      <Image
        className="rounded-xl xl:mx-0 mx-auto xl:h-96 h-auto xl:w-96 w-auto"
        quality={100}
        src="/assets/images/authors/vinoth-2000x2000-v2.jpg"
        height={500}
        width={500}
        alt="Picture of Vinoth (vnoit)"
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAf/CABEIAA8ADwMBEQACEQEDEQH/xAArAAEBAQAAAAAAAAAAAAAAAAAJBQcBAQEBAQAAAAAAAAAAAAAAAAQFBgf/2gAMAwEAAhADEAAAAGRynQZDxJ1cja1HR//EAB8QAAIDAAMBAAMAAAAAAAAAAAUGAwQHAQIIFRQWF//aAAgBAQABPwD0/wCh7Cv4x3HWsUd8+XWJOMIa7/Tm5OmdReeDHDRUNRa3aqE7QyVmIippTKbak+hboFlkkyUw0ZykWBzkKcnnPZXml5/V230tpeZtpBmZGmbOH1WSK2Xn3fOKHxR9InoKNQKlhIZ1haYmqKWmBjDVY1f9amMqyc4StCoGp4Flx3HGXzfZw/I2tvLAgb/dz5o4hQkqzDdKL/fme4eWEDSh4u6mkBVuiNjrLLTAeuKoj82GEKV7WKHpHzaoOeUjhucZyGldc+hW6CPVq1QFTtGJGQDFb4du+fs1YbFMcnTSdqHecpFbr8DYate/zHYtjSf/xAAgEQADAQEAAQQDAAAAAAAAAAACAwQBBRMGBxEhFBUk/9oACAECAQE/APcJ8z/V/MbqC6M/6Rn8iXMm26qcus1MuOX8GvHOydWuz7EGbub8D9e2HVhSXeoZI/keRXJ1kNDWW5M/G9TGKkpxQson8JSMxhYeaRloOoRqXs6PDl6MIHcjHi02JOgTOatL9cxxKnsmauxAarAwymYkGhrFO8nkdrXeneOcypvwFsCedMwgb6BxqFBOtQ1t+WMs1ISz4pteUNHVjuGO6Zb/AP/EAB8RAAMBAQEAAwADAAAAAAAAAAIDBAEFEwcREgYhQf/aAAgBAwEBPwD46lef8drly9fKMu+C33UB7J50rM5K6q2I+vtmTTk93l+h09X9foP9+VeS6d3JhT1pu4CXdLx6agCDLEeHJIWvkN7RRSDzpQQYeMwFDj0S0Y+ZUHbs5fROzlmmRpb6+AySMiaOh5YT4HTnA/63SJYOlIUHiynFXknE53+sVTLW1/p76aK9LZ5TFVFbKHUlJP5BPGDW1P1iZAnRvp/StwAwP//Z"
        priority
      />
    </section>
    <Career />
    </>
  );
}

export default About;
