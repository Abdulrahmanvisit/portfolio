import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  label?: string;
  title?: string;
  children: ReactNode;
  className?: string;
}

export default function Section({
  id,
  label,
  title,
  children,
  className,
}: SectionProps) {
  return (
    <section id={id} className="border-t border-[var(--color-border)] py-16 md:py-24">
      <div className="wrap">
        {label && title ? (
          <div className="mb-12 animate-fade-in-up">
            <p className="section-label">{label}</p>
            <h2 className="font-heading text-3xl font-bold tracking-tight text-[var(--color-text)] md:text-4xl">
              {title}
            </h2>
          </div>
        ) : null}
        <div className={className}>{children}</div>
      </div>
    </section>
  );
}