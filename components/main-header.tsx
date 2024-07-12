"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { ModeToggle } from "@/components/mode-toggle";
import { cn } from "@/lib/utils";

export default function MainHeader() {
  const pathname = usePathname();

  return (
    <header className="py-14 flex justify-between items-center">
      <Link
        href="/"
        className={cn(pathname === "/" ? "font-semibold" : "font-normal")}
      >
        dbc
      </Link>

      <nav className="flex gap-4 items-center">
        <Link
          href="/info"
          className={cn(pathname === "/info" ? "font-semibold" : "font-normal")}
        >
          Information
        </Link>
        <Link
          href="/contact"
          className={cn(
            pathname === "/contact" ? "font-semibold" : "font-normal",
          )}
        >
          Contact
        </Link>
        <ModeToggle />
      </nav>
    </header>
  );
}
