import Link from "next/link";

import { ModeToggle } from "@/components/mode-toggle";

export default function MainHeader() {
  return (
    <header className="pt-8 md:pt-16 pb-16 flex justify-between items-center">
      <Link href="/">dbc</Link>

      <nav className="flex gap-4 items-center">
        <Link href="/info">Information</Link>
        <Link href="/contact">Contact</Link>
        <ModeToggle />
      </nav>
    </header>
  );
}
