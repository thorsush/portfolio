import { getTopRepositories } from "../lib/github";
import MotionSection from "./MotionSection";

export default async function ProjectSection() {
  const { repos, error } = await getTopRepositories(4);
  if (error) {
    return <></>;
  }
  return (
    <MotionSection id="projects" className="mb-20 md:mb-28" delay={0.15}>
      <div className="mb-8 flex items-end justify-between gap-4">
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
          Projects
        </h2>
        <span className="text-sm text-white/50">Top repositories</span>
      </div>

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
    </MotionSection>
  );
}
