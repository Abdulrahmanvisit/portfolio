import { Moon, Sun } from "lucide-react";
import { useTheme } from "../contexts/ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="relative flex h-9 w-16 items-center rounded-full border border-[var(--color-border)] bg-[var(--color-bg-raised)] p-1 outline-none active:scale-95 transition-transform"
    >
      <span aria-hidden="true" className="absolute inset-0 flex items-center justify-between px-2 text-[var(--color-muted)]">
        <Sun size={15} />
        <Moon size={15} />
      </span>
      <span
        className="absolute top-0.5 h-8 w-8 rounded-full bg-[var(--color-accent)] shadow ring-2 ring-[var(--color-bg)] transition-transform duration-300"
        style={{ transform: `translateX(${theme === "dark" ? "24px" : "-24px"})` }}
      />
    </button>
  );
}