import { about } from "../data/about";
import Section from "../components/Section";

export default function About() {
  return (
    <Section
      id="about"
      label="About"
      title="Frontend-focused, backend-curious"
      className="grid gap-10 md:grid-cols-2 md:items-start"
    >
      <p className="text-[var(--color-muted)] max-w-prose animate-fade-in-up">
        {about.intro}
      </p>

      <ul className="grid gap-4">
        {about.list.map((item, index) => (
          <li
            key={item.title}
            className="flex items-start gap-3 animate-fade-in-up"
            style={{ animationDelay: `${index * 80}ms` }}
          >
            <span className="mt-0.5 text-[var(--color-accent)]">
              <item.icon className="h-4 w-4" />
            </span>
            <span>
              <span className="block font-medium text-[var(--color-text)]">{item.title}</span>
              <span className="mt-0.5 block text-sm text-[var(--color-text-muted)]">
                {item.description}
              </span>
            </span>
          </li>
        ))}
      </ul>
    </Section>
  );
}