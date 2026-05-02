"use client";

import Link from "next/link";

import Image from "next/image";

const navLinks = [
  // { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
  { href: "/resume.pdf", label: "Resume", external: true },
];

export default function NavBar() {
  return (
    <header className="sticky top-0 z-20 -mx-2 mb-16 bg-black/85 px-2 py-4 backdrop-blur-md md:mb-24">
      <nav className="mx-auto flex max-w-6xl items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 text-base font-medium tracking-tight text-white/95"
        >
          <Image
            src="/favicon.svg"
            alt="Favicon"
            width={20}
            height={20}
            className="w-5 h-5 object-contain"
          />
          Sushil Thorat
        </Link>
        <ul className="flex items-center gap-5 text-sm text-white/80">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="transition-colors duration-200 hover:text-white"
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
