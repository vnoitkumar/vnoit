"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface MenuItemProps {
  path: string;
  name: string;
}

function MenuItem({ path, name }: MenuItemProps) {
  const pathname = usePathname();
  const isActive = path === pathname;
  return (
    <Link
      aria-label={`${name} page`}
      href={path}
      className={`text-base font-semibold leading-6  dark:decoration-violet-300 decoration-violet-700 decoration-2 underline-offset-2 ${
        isActive ? "underline" : ""
      }`}
    >
      {name}
    </Link>
  );
}

export default MenuItem;
