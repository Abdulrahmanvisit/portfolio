import { Moon, Sun } from "lucide-react";
import { useTheme } from "../contexts/ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();

  return (
    <button
      onClick={toggle}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      className="relative flex h-9 w-16 items-center rounded-full border border-[var(--color-border)] bg-[var(--color-bg-raised)] p-1 outline-none active:scale-95 transition-transform"
    >
      <span
        className="absolute inset-0 flex items-center justify-between px-2 text-[var(--color-muted)] pointer-events-none"
        aria-hidden="true"
      >
        <Sun className={`size-4 transition-opacity duration-300 ${theme === "dark" ? "opacity-0" : "opacity-100"}`} />
        <Moon className={`size-4 transition-opacity duration-300 ${theme === "light" ? "opacity-0" : "opacity-100"}`} />
      </span>
      <span
        className="absolute top-0.5 h-8 w-8 rounded-full bg-[var(--color-accent)] shadow ring-2 ring-[var(--color-bg)] transition-transform duration-300"
        style={{ transform: `translateX(${theme === "dark" ? "36px" : "4px"})` }}
        aria-hidden="true"
      />
    </button>
  );
}