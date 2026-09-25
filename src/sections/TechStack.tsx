import { motion, useReducedMotion } from "framer-motion";
import { fadeInUp } from "../lib/animations";
import { techStack } from "../data/tech";
import Section from "../components/Section";

export default function TechStack() {
  const reduced = useReducedMotion();

  return (
    <Section
      id="skills"
      label="Toolkit"
      title="Technology stack"
      className="grid gap-5 sm:grid-cols-2 md:grid-cols-3"
    >
      {techStack.map((tech) => (
        <motion.div
          key={tech.name}
          variants={fadeInUp}
          whileHover={reduced ? undefined : { y: -6 }}
          className="group card p-6"
        >
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center text-[var(--color-accent)]">
              <tech.icon className="h-5 w-5" />
            </span>
            <span className="font-medium text-[var(--color-text)]">{tech.name}</span>
          </div>
          <p className="mt-2 text-sm text-[var(--color-text-muted)]">{tech.description}</p>
        </motion.div>
      ))}
    </Section>
  );
}
