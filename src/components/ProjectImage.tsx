import { Github } from "lucide-react";
import type { Project } from "../data/projects";

export default function ProjectImage({ project }: { project: Project }) {
  const hasImage = project.image && project.image.trim() !== "";

  return (
    <div
      className="relative aspect-[16/9] w-full overflow-hidden bg-[var(--color-bg)] border border-[var(--color-border)]"
    >
      {hasImage ? (
        <img
          src={project.image}
          alt=""
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      ) : (
        <Github className="h-16 w-16 text-[var(--color-text-muted)]/30" aria-hidden="true" />
      )}
    </div>
  );
}