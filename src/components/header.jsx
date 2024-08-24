import Link from "next/link";

import FullLogo from "@/components/full-logo";
import ThemeMenu from "@/components/theme-menu";

export function Header() {
  return (
    <header className="bg-baby-powder dark:bg-custom-black">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Vnoit</span>
            <FullLogo />
          </Link>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <Link
            href="/"
            className="text-base font-semibold leading-6 text-custom-black dark:text-baby-powder"
          >
            Blog
          </Link>

          <Link
            href="/about"
            className="text-base font-semibold leading-6 text-custom-black dark:text-baby-powder"
          >
            About
          </Link>
        </div>
        {/* <div className="flex flex-1 justify-end">
          <ThemeMenu />
        </div> */}
      </nav>
    </header>
  );
}

export default Header;
