"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

interface MobileMenuItemProps {
  path: string;
  name: string;
  icon: ReactNode;
}

function MobileMenuItem({ path, name, icon }: MobileMenuItemProps) {
  const pathname = usePathname();
  const isActive = path === pathname;
  return (
    <Link
      aria-label={`${name} page`}
      href={path}
      className={`inline-flex flex-col items-center justify-center font-medium px-3 mb-1 ${
        isActive ? "border-t-4 dark:border-violet-300 border-violet-700" : "border-none pt-[4px]"
      }`}
    >
      {icon}
      <span className={`text-xs leading-none `}>{name}</span>
    </Link>
  );
}

export default MobileMenuItem;
