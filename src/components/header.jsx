import Link from "next/link";

import FullLogo from "@/components/full-logo";
import ThemeMenu from "@/components/theme-menu";
import MenuItem from "@/components/menu-item";

export function Header() {
  return (
    <header className="bg-baby-powder dark:bg-custom-black">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5" aria-label="Home page">
            <span className="sr-only">Vnoit</span>
            <FullLogo />
          </Link>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <MenuItem name="Home" path="/" />
          <MenuItem name="Blogs" path="/blogs" />
          <MenuItem name="Posts" path="/posts" />
          <MenuItem name="Projects" path="/projects" />
          <MenuItem name="About" path="/about" />
        </div>
        {/* <div className="flex flex-1 justify-end">
          <ThemeMenu />
        </div> */}
      </nav>
    </header>
  );
}

export default Header;
