import Link from "next/link";

import { ModeToggle } from "@/components/mode-toggle";

export default function MainHeader() {
  return (
    <header className="pt-8 md:pt-16 pb-16 flex justify-between items-center">
      <Link href="/" className="font-semibold">
        dbc
      </Link>

      <nav className="flex gap-4 items-center">
        <Link href="/info" className="font-semibold">
          Information
        </Link>
        <Link href="/contact" className="font-semibold">
          Contact
        </Link>
        <ModeToggle />
      </nav>
    </header>
  );
}
