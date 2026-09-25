import { motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "../lib/utils";
import { useActiveSection } from "../hooks/useActiveSection";
import { navLinks } from "../data/nav";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const active = useActiveSection(navLinks.map((n) => n.id));
  const reduced = useReducedMotion();

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="sticky top-0 z-40 border-b border-[var(--color-border)] bg-[var(--color-bg)]/70 backdrop-blur"
    >
      <div className="wrap flex h-16 items-center justify-between">
        <a href="#home" className="font-heading text-lg font-bold tracking-tight">
          Abdurrahman<span className="text-[var(--color-accent)]">.</span>
        </a>

        <nav className="hidden md:block">
          <ul className="flex items-center gap-8">
            {navLinks.map((n) => (
              <li key={n.id}>
                <a
                  href={n.href}
                  className={cn(
                    "relative py-2 text-sm font-medium text-[var(--color-muted)] transition-colors hover:text-[var(--color-text)]",
                    active === n.id && "text-[var(--color-accent)]"
                  )}
                >
                  {n.label}
                  <span
                    className={cn(
                      "nav-indicator",
                      active === n.id ? "block" : "hidden"
                    )}
                  />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-4 md:gap-6">
          <ThemeToggle />
          <motion.button
            whileTap={reduced ? undefined : { scale: 0.9 }}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="md:hidden rounded-md p-2 text-[var(--color-text)] hover:bg-[var(--color-border)]/60"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </motion.button>
        </div>
      </div>

      <motion.nav
        aria-label="Mobile navigation"
        initial={{ maxHeight: 0, opacity: 0 }}
        animate={{ maxHeight: open ? 320 : 0, opacity: open ? 1 : 0 }}
        className="md:hidden overflow-hidden"
      >
        <ul className="flex flex-col gap-2 py-3">
          {navLinks.map((n) => (
            <li key={n.id}>
              <a
                href={n.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "block px-4 py-2 text-base font-medium text-[var(--color-muted)] hover:text-[var(--color-accent)]",
                  active === n.id && "text-[var(--color-accent)]"
                )}
              >
                {n.label}
              </a>
            </li>
          ))}
        </ul>
      </motion.nav>
    </motion.header>
  );
}
