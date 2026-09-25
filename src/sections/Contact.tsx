import { motion, useReducedMotion } from "framer-motion";
import { Send } from "lucide-react";
import { socialLinks } from "../data/social";
import { fadeInUp, staggerSm } from "../lib/animations";

export default function Contact() {
  const reduced = useReducedMotion();

  return (
    <section
      id="contact"
      className="border-t border-[var(--color-border)] py-16 md:py-24"
    >
      <div className="wrap">
        <motion.div
          variants={staggerSm}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto max-w-2xl"
        >
          <motion.p variants={fadeInUp} className="section-label">
            Let's talk
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="font-heading text-3xl font-bold tracking-tight text-[var(--color-text)] md:text-4xl"
          >
            Have a project in mind?
          </motion.h2>
          <motion.p variants={fadeInUp} className="mt-4 text-[var(--color-muted)]">
            I'm open to frontend roles, internships and collaborations. Let's build something useful.
          </motion.p>
        </motion.div>

        <motion.form
          action="mailto:abdurrahmanbello99@gmail.com?subject=Portfolio%20contact"
          method="POST"
          encType="text/plain"
          variants={staggerSm}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto mt-10 grid max-w-2xl gap-4"
        >
          <motion.input
            variants={fadeInUp}
            type="text"
            name="name"
            required
            placeholder="Your name"
            className="input"
          />
          <motion.input
            variants={fadeInUp}
            type="email"
            name="email"
            required
            placeholder="you@example.com"
            className="input"
          />
          <motion.textarea
            variants={fadeInUp}
            name="message"
            required
            rows={4}
            placeholder="What can I help with?"
            className="input resize-y"
          />
          <motion.button
            variants={fadeInUp}
            whileHover={reduced ? undefined : { scale: 1.02 }}
            whileTap={reduced ? undefined : { scale: 0.97 }}
            type="submit"
            className="btn btn--primary self-start"
          >
            Send message <Send size={16} className="ml-2" />
          </motion.button>
        </motion.form>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-12 flex justify-center gap-6"
        >
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-muted)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
            >
              <link.icon className="h-5 w-5" />
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
