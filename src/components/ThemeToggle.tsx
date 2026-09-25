import { motion, useReducedMotion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "../contexts/ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const reduced = useReducedMotion();

  return (
    <motion.button
      layout
      onClick={toggle}
      aria-label="Toggle theme"
      whileTap={reduced ? undefined : { scale: 0.9 }}
      className="relative flex h-9 w-16 items-center rounded-full border border-[var(--color-border)] bg-[var(--color-bg-raised)] p-1 outline-none"
    >
      <motion.span
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-between px-2 text-[var(--color-muted)]"
      >
        <Sun size={15} />
        <Moon size={15} />
      </motion.span>
      <motion.span
        layout
        className="absolute top-0.5 h-8 w-8 rounded-full bg-[var(--color-accent)] shadow ring-2 ring-[var(--color-bg)]"
        style={{ x: theme === "dark" ? 24 : -24 }}
      />
    </motion.button>
  );
}
