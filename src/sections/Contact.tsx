import { Send } from "lucide-react";
import { socialLinks } from "../data/social";

export default function Contact() {
  return (
    <section id="contact" className="border-t border-[var(--color-border)] py-16 md:py-24">
      <div className="wrap">
        <div className="mx-auto max-w-2xl text-center animate-fade-in-up">
          <p className="section-label">Let's talk</p>
          <h2 className="font-heading mt-2 text-3xl font-bold tracking-tight text-[var(--color-text)] md:text-4xl">
            Have a project in mind?
          </h2>
          <p className="mt-4 text-[var(--color-muted)]">
            I'm open to frontend roles, internships and collaborations. Let's build something useful.
          </p>
        </div>

        <form
          action="mailto:abdurrahmanbello99@gmail.com?subject=Portfolio%20contact"
          method="POST"
          encType="text/plain"
          className="mx-auto mt-10 grid max-w-2xl gap-4"
        >
          <input type="text" name="name" required placeholder="Your name" className="input animate-fade-in-up" />
          <input type="email" name="email" required placeholder="you@example.com" className="input animate-fade-in-up" style={{ animationDelay: "60ms" }} />
          <textarea name="message" required rows={4} placeholder="What can I help with?" className="input resize-y animate-fade-in-up" style={{ animationDelay: "120ms" }} />
          <button type="submit" className="btn btn--primary self-start group animate-fade-in-up" style={{ animationDelay: "180ms" }}>
            Send message <Send size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </form>

        <div className="mt-12 flex justify-center gap-6 animate-fade-in-up" style={{ animationDelay: "240ms" }}>
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-muted)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] hover:scale-105 active:scale-95"
            >
              <link.icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}