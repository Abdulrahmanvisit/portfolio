import { motion } from "framer-motion";
import { socialLinks } from "../data/social";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)]">
      <div className="wrap flex flex-col items-center justify-between gap-6 py-10 text-center text-sm text-[var(--color-text-muted)]">
        <p>© {new Date().getFullYear()} Abdurrahman Muhammad Bello. Built with React, TypeScript and Tailwind CSS.</p>
        <div className="flex items-center gap-5">
          {socialLinks.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-muted)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
            >
                  <s.icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
