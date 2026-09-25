import { useState } from "react";
import { Send } from "lucide-react";
import { socialLinks } from "../data/social";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const { name, email, message } = formData;
    const subject = encodeURIComponent("Portfolio contact from " + name);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );
    const mailtoLink = `mailto:abdurrahmanbello99@gmail.com?subject=${subject}&body=${body}`;

    // Open mailto link
    window.location.href = mailtoLink;

    // Show success after a brief delay
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    }, 500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

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

        <form onSubmit={handleSubmit} className="mx-auto mt-10 grid max-w-2xl gap-4">
          <div className="animate-fade-in-up">
            <label htmlFor="name" className="sr-only">
              Your name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Your name"
              autoComplete="name"
              value={formData.name}
              onChange={handleChange}
              disabled={status === "submitting"}
              className="input animate-fade-in-up"
            />
          </div>
          <div className="animate-fade-in-up" style={{ animationDelay: "60ms" }}>
            <label htmlFor="email" className="sr-only">
              Email address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="you@example.com"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              disabled={status === "submitting"}
              className="input animate-fade-in-up"
            />
          </div>
          <div className="animate-fade-in-up" style={{ animationDelay: "120ms" }}>
            <label htmlFor="message" className="sr-only">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              placeholder="What can I help with?"
              autoComplete="off"
              value={formData.message}
              onChange={handleChange}
              disabled={status === "submitting"}
              className="input resize-y animate-fade-in-up"
            />
          </div>
          <button
            type="submit"
            disabled={status === "submitting"}
            className="btn btn--primary self-start group animate-fade-in-up"
            style={{ animationDelay: "180ms", opacity: status === "submitting" ? 0.7 : 1 }}
          >
            {status === "submitting" ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Sending…
              </>
            ) : (
              <>Send message <Send size={16} className="ml-2 group-hover:translate-x-1 transition-transform" /></>
            )}
          </button>
        </form>

        {status === "success" && (
          <p className="sr-only" id="mailto-success">
            Email client opened. If it didn't open, please email me directly at abdurrahmanbello99@gmail.com
          </p>
        )}

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