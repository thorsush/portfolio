"use client";

import Link from "next/link";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  // { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
  { href: "/resume.pdf", label: "Resume", external: true },
];

export default function NavBar() {
  return (
    <header className="sticky top-0 z-20 -mx-2 mb-16 bg-white/85 dark:bg-black/85 px-2 py-4 backdrop-blur-md md:mb-24 transition-colors">
      <nav className="mx-auto flex max-w-6xl items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 text-base font-medium tracking-tight text-black/90 dark:text-white/95"
        >
          <Image
            src="/favicon.svg"
            alt="Favicon"
            width={20}
            height={20}
            className="w-5 h-5 object-contain"
          />
          <span className="hidden sm:inline">Sushil Thorat</span>
        </Link>
        <div className="flex items-center gap-6">
          <ul className="flex items-center gap-5 text-sm text-black/60 dark:text-white/80">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="transition-colors duration-200 hover:text-black dark:hover:text-white"
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
