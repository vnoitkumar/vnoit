"use client";

import Link from "next/link";

import { usePathname } from "next/navigation";

function MenuItem(props) {
  const pathname = usePathname();

  const { path, name } = props;
  const isActive = path === pathname;
  return (
    <Link
      aria-label={`${name} page`}
      href={path}
      className={`text-base font-semibold leading-6 text-custom-black dark:text-baby-powder decoration-light-sea-green decoration-2 underline-offset-2 ${
        isActive ? "underline" : ""
      }`}
    >
      {name}
    </Link>
  );
}

export default MenuItem;
