import Link from "next/link";
import FullLogo from "@/components/full-logo";

export function Footer() {
  return (
    <footer className="mx-auto mt-48 flex max-w-7xl items-center justify-between p-6 lg:px-8">
      <div className="flex lg:flex-1">
        <Link href="/" className="-m-1.5 p-1.5" aria-label="Home page">
          <span className="sr-only">Vnoit</span>
          <FullLogo />
        </Link>
      </div>
      <div className="flex gap-1">
        <a
          href="mailto:vnoitkumar@gmail.com"
          className="p-2"
          aria-label="Email address"
        >
          <svg
            viewBox="0 0 24 24"
            className="fill-custom-black/80 hover:fill-custom-black dark:fill-baby-powder/80 dark:hover:fill-baby-powder h-5 w-5"
          >
            <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
            <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
          </svg>
        </a>

        <a
          href="https://github.com/vnoitkumar"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2"
          aria-label="GitHub"
        >
          <svg
            viewBox="0 0 24 24"
            className="fill-custom-black/80 hover:fill-custom-black dark:fill-baby-powder/80 dark:hover:fill-baby-powder h-5 w-5"
          >
            <title>GitHub</title>
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
          </svg>
        </a>

        <a
          href="https://stackoverflow.com/users/5154807/vnoitkumar"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2"
          aria-label="Stack Overflow"
        >
          <svg
            className="fill-custom-black/80 hover:fill-custom-black dark:fill-baby-powder/80 dark:hover:fill-baby-powder h-5 w-5"
            viewBox="0 0 512 512"
          >
            <title>Stack Overflow</title>
            <path d="M392 440V320h40v160H64V320h40v120z"></path>
            <path d="M149.1 308.77l198.57 40.87 8.4-39.32-198.57-40.87zm26.27-93.12L359.22 300 376 263.76l-183.82-84.84zm50.95-89l156 127.78 25.74-30.52-156-127.78zM328 32l-33.39 23.8 120.82 160.37L448 192zM144 400h204v-40H144z"></path>
          </svg>
        </a>

        <a
          href="https://x.com/vnoitkumar"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2"
          aria-label="X"
        >
          <svg
            viewBox="0 0 24 24"
            className="fill-custom-black/80 hover:fill-custom-black dark:fill-baby-powder/80 dark:hover:fill-baby-powder h-5 w-5"
          >
            <title>X</title>
            <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
          </svg>
        </a>

        <a
          href="https://www.linkedin.com/in/vnoitkumar"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2"
          aria-label="LinkedIn"
        >
          <svg
            viewBox="0 0 24 24"
            className="fill-custom-black/80 hover:fill-custom-black dark:fill-baby-powder/80 dark:hover:fill-baby-powder h-5 w-5"
          >
            <title>LinkedIn</title>
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
