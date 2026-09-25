import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ProfileImage from "../components/ProfileImage";
import { socialLinks } from "../data/social";
import { fadeInUp, staggerContainer } from "../lib/animations";

export default function Hero() {
  const reduced = useReducedMotion();

  const hover = reduced ? undefined : { scale: 1.03 };
  const tap = reduced ? undefined : { scale: 0.97 };

  return (
    <section id="home" className="relative isolate pt-6 md:pt-8">
      <div className="wrap py-10 md:py-14">
        <motion.div
          className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16"
          variants={staggerContainer}
          initial={reduced ? undefined : "hidden"}
          animate={reduced ? undefined : "visible"}
        >
          <div>
            <motion.p
              variants={fadeInUp}
              className="text-sm font-semibold text-[var(--color-accent-2)]"
            >
              Frontend Developer · Final-year Computer Science Student
            </motion.p>

            <motion.h1
              variants={fadeInUp}
              className="font-heading mt-4 text-4xl font-bold tracking-tight text-balance text-[var(--color-text)] sm:text-5xl"
            >
              Abdurrahman Muhammad Bello
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="mt-5 max-w-xl text-lg text-[var(--color-muted)]"
            >
              Frontend developer building thoughtful, scalable, and modern web experiences.
              Final-year Computer Science student interested in frontend engineering, full-stack
              development, and AI-assisted software development.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <motion.a
                href="#projects"
                whileHover={hover}
                whileTap={tap}
                className="btn btn--primary"
              >
                View my work <ArrowRight size={16} className="ml-2" />
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={hover}
                whileTap={tap}
                className="btn btn--ghost"
              >
                Let's connect
              </motion.a>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="mt-8 flex items-center gap-5"
            >
              {socialLinks.slice(0, 2).map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-muted)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
                >
                  <link.icon className="h-5 w-5" />
                </a>
              ))}
            </motion.div>
          </div>

          <motion.div
            variants={fadeInUp}
            className="relative flex justify-center lg:justify-end"
          >
            <ProfileImage />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
