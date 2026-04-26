import MotionSection from "../components/MotionSection";
import { getTopRepositories } from "../lib/github";

const navLinks = [
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
  { href: "/resume.pdf", label: "Resume", external: true },
];

export default async function HomePage() {
  const { repos, error } = await getTopRepositories(4);

  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-6xl px-6 pb-12 pt-6 md:px-10 md:pb-20 md:pt-8">
        <header className="sticky top-0 z-20 -mx-2 mb-16 bg-black/85 px-2 py-4 backdrop-blur-md md:mb-24">
          <nav className="mx-auto flex max-w-6xl items-center justify-between">
            <a
              href="#"
              className="text-base font-medium tracking-tight text-white/95"
            >
              Sushil Thorat
            </a>
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

        <MotionSection className="mb-20 md:mb-32" delay={0.1}>
          <p className="mb-6 text-sm uppercase tracking-[0.2em] text-white/50">
            Developer Portfolio
          </p>
          <h1 className="max-w-4xl text-5xl font-semibold leading-tight tracking-tight text-white md:text-7xl">
            Building scalable backend systems & seamless web experiences.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/70 md:text-xl">
            Full Stack Developer specializing in high-performance APIs, secure
            payment systems, and cloud-native applications.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:border-white/40 hover:bg-white hover:text-black"
            >
              View Projects
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:border-white/40 hover:bg-white/10"
            >
              Download Resume
            </a>
          </div>
        </MotionSection>

        <MotionSection id="projects" className="mb-20 md:mb-28" delay={0.15}>
          <div className="mb-8 flex items-end justify-between gap-4">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Projects
            </h2>
            <span className="text-sm text-white/50">Top repositories</span>
          </div>

          {error ? (
            <div className="rounded-3xl border border-red-500/20 bg-red-950/20 p-6 text-sm text-red-200">
              {error}
            </div>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2">
              {repos.map((repo) => (
                <article
                  key={repo.id}
                  className="group rounded-3xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-zinc-900"
                >
                  <h3 className="text-xl font-medium tracking-tight text-white">
                    {repo.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/65">
                    {repo.description}
                  </p>
                  <a
                    href={repo.htmlUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex text-sm font-medium text-white/80 transition-colors duration-200 group-hover:text-white"
                  >
                    View on GitHub
                  </a>
                </article>
              ))}
            </div>
          )}
        </MotionSection>

        <MotionSection id="contact" className="mb-16" delay={0.2}>
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Contact
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <a
              href="mailto:thoratsushil703@gmail.com"
              className="rounded-2xl border border-border bg-surface px-5 py-4 text-sm text-white/80 transition-colors duration-200 hover:text-white"
            >
              Email
            </a>
            <a
              href="https://github.com/thorsush"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-border bg-surface px-5 py-4 text-sm text-white/80 transition-colors duration-200 hover:text-white"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/sushil-thorat-1999-"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-border bg-surface px-5 py-4 text-sm text-white/80 transition-colors duration-200 hover:text-white"
            >
              LinkedIn
            </a>
          </div>
        </MotionSection>

        <footer className="border-t border-border pt-8 text-sm text-white/45">
          <p>
            © {new Date().getFullYear()} Sushil Thorat. Crafted with Next.js,
            Tailwind CSS, and Framer Motion.
          </p>
        </footer>
      </div>
    </main>
  );
}
