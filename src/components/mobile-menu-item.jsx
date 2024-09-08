"use client";

import Link from "next/link";

import { usePathname } from "next/navigation";

function MobileMenuItem(props) {
  const pathname = usePathname();

  const { path, name, icon } = props;
  const isActive = path === pathname;
  return (
    <Link
      aria-label={`${name} page`}
      href={path}
      className="inline-flex flex-col items-center justify-center font-medium px-5 group"
    >
      {icon}
      <span
        className={`text-sm group-hover:text-light-sea-green dark:group-hover:text-light-sea-green ${
          isActive
            ? "text-light-sea-green"
            : "text-custom-black/80 dark:text-baby-powder/80"
        }`}
      >
        {name}
      </span>
    </Link>
  );
}

export default MobileMenuItem;
