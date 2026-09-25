import { techStack } from "../data/tech";
import Section from "../components/Section";

export default function TechStack() {
  return (
    <Section
      id="skills"
      label="Toolkit"
      title="Technology stack"
      className="grid gap-5 sm:grid-cols-2 md:grid-cols-3"
    >
      {techStack.map((tech, index) => (
        <div
          key={tech.name}
          className="group card p-6 transition-transform duration-300 hover:-translate-y-1.5 animate-fade-in-up"
          style={{ animationDelay: `${index * 60}ms` }}
        >
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center text-[var(--color-accent)]">
              <tech.icon className="h-5 w-5" />
            </span>
            <span className="font-medium text-[var(--color-text)] group-hover:text-[var(--color-accent)] transition-colors">
              {tech.name}
            </span>
          </div>
          <p className="mt-2 text-sm text-[var(--color-text-muted)]">{tech.description}</p>
        </div>
      ))}
    </Section>
  );
}