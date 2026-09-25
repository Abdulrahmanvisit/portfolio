import { learning } from "../data/learning";
import Section from "../components/Section";

export default function CurrentlyLearning() {
  return (
    <Section
      id="learning"
      label="Currently"
      title="What I'm building next"
      className="grid gap-5 sm:grid-cols-2 md:grid-cols-3"
    >
      {learning.map((item, index) => (
        <div
          key={item.title}
          className="card p-6 animate-fade-in-up"
          style={{ animationDelay: `${index * 80}ms` }}
        >
          <div className="flex items-start gap-3">
            <span className="mt-0.5 text-[var(--color-accent)]">
              {item.icon ? <item.icon className="h-4 w-4" /> : null}
            </span>
            <div>
              <h3 className="text-sm font-semibold text-[var(--color-text)]">{item.title}</h3>
              <p className="mt-1 text-sm text-[var(--color-text-muted)]">{item.description}</p>
            </div>
          </div>
        </div>
      ))}
    </Section>
  );
}