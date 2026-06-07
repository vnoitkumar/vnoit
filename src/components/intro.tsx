import Link from "next/link";

export default function Intro() {
  return (
    <>
      <h1 className="text-3xl font-bold leading-snug">
        Hi, I&apos;m Vinoth (Vnoit)
      </h1>
      <div>
        <p className="text-jet-black/80 dark:text-baby-powder/80 font-medium mt-3">
          I&apos;m a Lead Consultant at&nbsp;
          <a
            href="https://www.thoughtworks.com/en-in"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
            aria-label="Thoughtworks"
          >
            Thoughtworks
          </a>
          &nbsp;in Bengaluru, where I help teams design and ship software
          that&apos;s built to last — from the services underneath to the
          products people actually use.
        </p>

        <p className="text-jet-black/80 dark:text-baby-powder/80 font-medium mt-3">
          Outside of work, I write about what I learn over on my&nbsp;
          <a
            href="https://vnoit.com/blogs"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
            aria-label="Vinoth's blogs"
          >
            blog
          </a>
          , and I teach and mentor people online — from school kids writing
          their first lines of code to working devs leveling up. If that sounds
          like you, come hang out on my&nbsp;
          <Link
            className="link"
            href="/code-with-vnoit"
            aria-label="Code with Vnoit page"
          >
            Code with Vnoit
          </Link>
          .
        </p>
      </div>
    </>
  );
}
