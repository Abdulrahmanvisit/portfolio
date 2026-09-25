import { ArrowRight } from "lucide-react";
import type { Project } from "../data/projects";
import ProjectImage from "./ProjectImage";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-[var(--radius)] border border-[var(--color-border)] bg-[var(--color-bg-raised)] transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.01] hover:shadow-xl hover:shadow-black/20 animate-fade-in-up">
      <div className="relative aspect-[16/9] w-full overflow-hidden">
        <ProjectImage project={project} />
      </div>
      <div className="p-6">
        <h3 className="font-heading text-xl font-semibold text-[var(--color-text)] group-hover:text-[var(--color-accent)] transition-colors">
          {project.title}
        </h3>
        <p className="mt-2 text-sm text-[var(--color-muted)] line-clamp-3">
          {project.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-5 flex items-center gap-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm font-medium text-[var(--color-accent)] group-hover:underline"
          >
            View on GitHub <ArrowRight size={14} />
          </a>
          {project.demo ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-[var(--color-accent-2)] group-hover:underline"
            >
              Live demo
            </a>
          ) : (
            <span className="text-sm text-[var(--color-text-muted)]">Demo coming soon</span>
          )}
        </div>
      </div>
    </article>
  );
}