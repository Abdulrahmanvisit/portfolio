import { journey } from "../data/journey";
import Section from "../components/Section";

export default function Journey() {
  return (
    <Section
      id="journey"
      label="Where I've been"
      title="Experience & journey"
      className="relative"
    >
      <div className="relative border-l border-[var(--color-border)] pl-10">
        {journey.map((item, index) => (
          <div key={item.id} className="relative mb-10 last:mb-0 animate-fade-in-up" style={{ animationDelay: `${index * 80}ms` }}>
            <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
              <h3 className="font-medium text-[var(--color-text)]">{item.title}</h3>
              <time className="text-sm text-[var(--color-muted)]">{item.date}</time>
            </div>
            <p className="mt-1 text-sm text-[var(--color-accent-2)]">{item.organization}</p>
            {item.description ? (
              <p className="mt-2 text-sm text-[var(--color-text-muted)]">{item.description}</p>
            ) : null}
            {item.bullets ? (
              <ul className="mt-2 list-disc list-outside text-sm text-[var(--color-muted)] marker:text-[var(--color-accent-2)]">
                {item.bullets.map((bullet, i) => (
                  <li key={i} className="animate-fade-in-up" style={{ animationDelay: `${i * 40}ms` }}>{bullet}</li>
                ))}
              </ul>
            ) : null}
          </div>
        ))}
      </div>
    </Section>
  );
}