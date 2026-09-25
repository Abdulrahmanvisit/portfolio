import { ArrowRight } from "lucide-react";
import ProfileImage from "../components/ProfileImage";
import { socialLinks } from "../data/social";

export default function Hero() {
  const hover = { scale: 1.03 };
  const tap = { scale: 0.97 };

  return (
    <section id="home" className="relative isolate pt-6 md:pt-8">
      <div className="wrap py-10 md:py-14">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="animate-fade-in-up">
            <p className="text-sm font-semibold text-[var(--color-accent-2)]">
              Frontend Developer · Final-year Computer Science Student
            </p>

            <h1 className="font-heading mt-4 text-4xl font-bold tracking-tight text-balance text-[var(--color-text)] sm:text-5xl">
              Abdurrahman Muhammad Bello
            </h1>

            <p className="mt-5 max-w-xl text-lg text-[var(--color-muted)]">
              Frontend developer building thoughtful, scalable, and modern web experiences.
              Final-year Computer Science student interested in frontend engineering, full-stack
              development, and AI-assisted software development.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4 animate-fade-in-up" style={{ animationDelay: "100ms" }}>
              <a
                href="#projects"
                className="btn btn--primary group"
              >
                View my work <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="btn btn--ghost"
              >
                Let's connect
              </a>
            </div>

            <div className="mt-8 flex items-center gap-5 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
              {socialLinks.slice(0, 2).map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-muted)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] hover:scale-105 active:scale-95"
                >
                  <link.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: "150ms" }}>
            <ProfileImage />
          </div>
        </div>
      </div>
    </section>
  );
}