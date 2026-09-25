import { useEffect, useState } from "react";

export const useActiveSection = (ids: string[]) => {
  const [active, setActive] = useState<string>(ids[0] ?? "");

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (!("IntersectionObserver" in window) || elements.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        }
      },
      { threshold: 0.15, rootMargin: "-20% 0px -60% 0px" }
    );

    elements.forEach((el) => observer.observe(el));

    // Fallback: check on scroll
    const onScroll = () => {
      const scrollY = window.scrollY + window.innerHeight * 0.3;
      for (const el of elements) {
        const rect = el.getBoundingClientRect();
        const top = rect.top + window.scrollY;
        const bottom = top + rect.height;
        if (scrollY >= top && scrollY <= bottom) {
          setActive(el.id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [ids]);

  return active;
};