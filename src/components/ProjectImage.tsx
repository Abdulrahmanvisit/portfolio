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
          alt={`${project.title} project preview`}
          loading="lazy"
          className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-102"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).style.display = "none";
          }}
        />
      ) : (
        <Github className="h-16 w-16 text-[var(--color-text-muted)]/30" aria-hidden="true" />
      )}
      {hasImage && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />
      )}
    </div>
  );
}