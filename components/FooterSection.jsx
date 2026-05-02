"use client";

import { motion } from "framer-motion";

const links = [
  { name: "About", href: "#" },
  { name: "Projects", href: "#" }, // Removed #projects to match user's commented out section, but keeping standard
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
  { name: "Resume", href: "/resume.pdf" },
];

const socials = [
  { name: "GitHub", href: "https://github.com/thorsush" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/sushil-thorat-1999-" },
  { name: "Email", href: "mailto:thoratsushil703@gmail.com" },
];

export default function FooterSection() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative mt-20 md:mt-32 border-t border-black/10 dark:border-white/10 pt-16 pb-8 overflow-hidden"
    >
      {/* Subtle top gradient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[1px] w-3/4 bg-gradient-to-r from-transparent via-black/20 dark:via-white/30 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[100px] w-1/2 bg-black/5 dark:bg-white/5 blur-[100px] pointer-events-none" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-16 relative z-10">
        {/* Left Side: Brand */}
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-medium tracking-tight text-black/95 dark:text-white/95">
            Sushil Thorat
          </h3>
          <p className="text-sm text-black/50 dark:text-white/50 leading-relaxed max-w-xs">
            Senior Full Stack Developer building secure systems.
          </p>
        </div>

        {/* Center: Navigation */}
        <div className="flex flex-col gap-4 md:items-center">
          <h4 className="text-xs font-semibold uppercase tracking-widest text-black/30 dark:text-white/30 mb-2">
            Navigation
          </h4>
          <ul className="flex flex-col gap-3 text-sm">
            {links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="group relative text-black/60 dark:text-white/60 transition-colors duration-300 hover:text-black dark:hover:text-white inline-block"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-black dark:bg-white transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side: Socials */}
        <div className="flex flex-col gap-4 md:items-end">
          <h4 className="text-xs font-semibold uppercase tracking-widest text-black/30 dark:text-white/30 mb-2">
            Connect
          </h4>
          <ul className="flex flex-col gap-3 text-sm md:items-end">
            {socials.map((social) => (
              <li key={social.name}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black/60 dark:text-white/60 transition-all duration-300 hover:text-black dark:hover:text-white hover:-translate-y-0.5 inline-block"
                >
                  {social.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-6 border-t border-black/10 dark:border-white/10 pt-8 text-xs text-black/40 dark:text-white/40 relative z-10">
        <p>
          &copy; {currentYear} Sushil Thorat. Built with Next.js, TailwindCSS &
          Framer Motion.
        </p>

        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-black/60 dark:text-white/60 font-medium">
            Open to opportunities
          </span>
        </div>
      </div>
    </motion.footer>
  );
}
