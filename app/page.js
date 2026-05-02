// import ProjectSection from "@/components/PeojectSection";
import MotionSection from "../components/MotionSection";
import SkillsSection from "../components/SkillsSection";
import FooterSection from "../components/FooterSection";
import NavBar from "../components/NavBar";

export default async function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-6xl px-6 pb-12 pt-6 md:px-10 md:pb-20 md:pt-8">
        <NavBar />

        <MotionSection className="mb-20 md:mb-32" delay={0.1}>
          <p className="mb-6 text-sm uppercase tracking-[0.2em] text-white/50">
            Hi, I&apos;m Sushil
          </p>
          <h1 className="max-w-4xl text-5xl font-semibold leading-tight tracking-tight text-white md:text-7xl gradient-text">
            Building secure & scalable digital products.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/70 md:text-xl">
            Senior Full Stack Developer specializing in secure payment APIs,
            cloud-native infrastructure, and production-grade web applications.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            {/* <a
              href="#projects"
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:border-white/40 hover:bg-white hover:text-black"
            >
              View Projects
            </a> */}
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

        <SkillsSection />

        {/* <ProjectSection /> */}

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

        <FooterSection />
      </div>
    </main>
  );
}
