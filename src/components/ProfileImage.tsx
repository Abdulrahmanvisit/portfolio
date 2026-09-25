import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

export default function ProfileImage() {
  const reduced = useReducedMotion();
  const [errored, setErrored] = useState(false);

  const src = "/images/profile.jpg";
  const fallback = "/images/profile-placeholder.svg";

  return (
    <motion.div
      className="relative flex h-56 w-56 shrink-0 justify-center md:h-72 md:w-72"
      initial={reduced ? undefined : { opacity: 0, scale: 0.92 }}
      animate={reduced ? undefined : { opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: [0.21, 1, 0.3, 1] }}
    >
      <motion.img
        src={errored ? fallback : src}
        onError={() => setErrored(true)}
        alt="Abdurrahman Muhammad Bello"
        whileHover={reduced ? undefined : { scale: 1.03 }}
        className="relative h-full w-full rounded-full border-8 border-[var(--color-bg-raised)] object-cover shadow-xl shadow-black/40"
      />
      <span className="absolute -inset-1 -z-10 rounded-full bg-[var(--color-accent)]/10 blur-2xl" aria-hidden="true" />
    </motion.div>
  );
}
