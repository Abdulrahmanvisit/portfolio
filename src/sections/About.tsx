import { motion } from "framer-motion";
import { about } from "../data/about";
import { fadeInUp, staggerSm } from "../lib/animations";
import Section from "../components/Section";

export default function About() {
  return (
    <Section
      id="about"
      label="About"
      title="Frontend-focused, backend-curious"
      className="grid gap-10 md:grid-cols-2 md:items-start"
    >
      <motion.p variants={fadeInUp} className="text-[var(--color-muted)] max-w-prose">
        {about.intro}
      </motion.p>

      <motion.ul variants={staggerSm} className="grid gap-4">
        {about.list.map((item) => (
          <motion.li
            key={item.title}
            variants={fadeInUp}
            className="flex items-start gap-3"
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
          </motion.li>
        ))}
      </motion.ul>
    </Section>
  );
}
