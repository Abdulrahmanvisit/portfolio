import { useState } from "react";

export default function ProfileImage() {
  const [errored, setErrored] = useState(false);

  const src = "/images/profile.jpg";
  const fallback = "/images/profile-placeholder.svg";

  return (
    <div className="relative flex h-56 w-56 shrink-0 justify-center md:h-72 md:w-72 animate-fade-in">
      <img
        src={errored ? fallback : src}
        onError={() => setErrored(true)}
        alt="Abdurrahman Muhammad Bello"
        className="relative h-full w-full rounded-full border-8 border-[var(--color-bg-raised)] object-cover shadow-xl shadow-black/40 transition-transform duration-300 hover:scale-[1.03]"
      />
      <span className="absolute -inset-1 -z-10 rounded-full bg-[var(--color-accent)]/10 blur-2xl" aria-hidden="true" />
    </div>
  );
}