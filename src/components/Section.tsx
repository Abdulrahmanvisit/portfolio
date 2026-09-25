import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { fadeInUp, staggerSm } from "../lib/animations";

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
  const reduced = useReducedMotion();

  const reveal = reduced
    ? {}
    : {
        initial: "hidden" as const,
        whileInView: "visible" as const,
        viewport: { once: true, amount: 0.2 },
      };

  return (
    <section id={id} className="border-t border-[var(--color-border)] py-16 md:py-24">
      <div className="wrap">
        {label && title ? (
          <motion.div
            variants={fadeInUp}
            {...reveal}
            className="mb-12"
          >
            <p className="section-label">{label}</p>
            <h2 className="font-heading text-3xl font-bold tracking-tight text-[var(--color-text)] md:text-4xl">
              {title}
            </h2>
          </motion.div>
        ) : null}
        <motion.div
          variants={reduced ? undefined : staggerSm}
          {...reveal}
          className={className}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}
