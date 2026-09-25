import { Github } from "lucide-react";
import type { Project } from "../data/projects";

export default function ProjectImage({ project }: { project: Project }) {
  return (
    <div
      className="relative aspect-[16/9] w-full flex items-center justify-center bg-[var(--color-bg)] border border-[var(--color-border)]"
    >
      <Github className="h-16 w-16 text-[var(--color-text-muted)]/30" aria-hidden="true" />
    </div>
  );
}