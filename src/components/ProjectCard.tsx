import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import type { Project } from "../data/projects";
import { projectPlaceholder } from "../data/projects";
import { fadeInUp } from "../lib/animations";

export default function ProjectCard({ project }: { project: Project }) {
  const reduced = useReducedMotion();
  const [imgError, setImgError] = useState(false);

  const image = imgError || !project.image ? projectPlaceholder : project.image;

  return (
    <motion.article
      variants={fadeInUp}
      whileHover={reduced ? undefined : { y: -6, scale: 1.02 }}
      className="group relative flex flex-col overflow-hidden rounded-[var(--radius)] border border-[var(--color-border)] bg-[var(--color-bg-raised)]"
    >
      <div className="relative aspect-[16/9] w-full overflow-hidden">
        <motion.img
          src={image}
          alt=""
          loading="lazy"
          whileHover={reduced ? undefined : { scale: 1.05 }}
          transition={{ duration: 0.4 }}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="font-heading text-xl font-semibold text-[var(--color-text)]">
          {project.title}
        </h3>
        <p className="mt-2 text-sm text-[var(--color-muted)]">
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
            className="inline-flex items-center gap-1 text-sm font-medium text-[var(--color-accent)]"
          >
            View on GitHub <ArrowRight size={14} />
          </a>
          {project.demo ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-[var(--color-accent-2)]"
            >
              Live demo
            </a>
          ) : (
            <span className="text-sm text-[var(--color-text-muted)]">Demo coming soon</span>
          )}
        </div>
      </div>
    </motion.article>
  );
}
