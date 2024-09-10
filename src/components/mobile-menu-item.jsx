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
      className={`inline-flex flex-col items-center justify-center font-medium px-5 pb-2 ${
        isActive ? "border-t-4 dark:border-violet-300 border-violet-700 pt-[4px]" : "border-none pt-2"
      }`}
    >
      {icon}
      <span
        className={`text-sm`}
      >
        {name}
      </span>
    </Link>
  );
}

export default MobileMenuItem;
