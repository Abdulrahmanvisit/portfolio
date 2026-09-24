/**
 * script.js
 *
 * This site is intentionally static — the content doesn't change,
 * so it doesn't need a framework. The two small behaviors below
 * are the only places JavaScript earns its keep:
 *
 *   1. Auto-updating the copyright year, so this file never goes
 *      stale.
 *   2. Highlighting the current section in the nav bar as you
 *      scroll, so visitors always know where they are on the page.
 */

// --- 1. Footer year -------------------------------------------------
// Runs once, on page load. No need to re-run it on scroll or resize.
function setCurrentYear() {
  const yearEl = document.getElementById("current-year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

// --- 2. Active nav link on scroll -----------------------------------
// Uses IntersectionObserver instead of a scroll event listener —
// it's cheaper on performance because the browser only notifies us
// when a section actually enters or leaves the viewport, rather than
// firing on every single scroll pixel.
function highlightActiveNavLink() {
  const sections = document.querySelectorAll("main .section, .hero");
  const navLinks = document.querySelectorAll(".nav__links a");

  if (!sections.length || !navLinks.length) return;

  const linksBySectionId = new Map();
  navLinks.forEach((link) => {
    const id = link.getAttribute("href")?.replace("#", "");
    if (id) linksBySectionId.set(id, link);
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const link = linksBySectionId.get(entry.target.id);
        if (!link) return;

        if (entry.isIntersecting) {
          navLinks.forEach((l) => l.style.color = "");
          link.style.color = "var(--color-text)";
        }
      });
    },
    {
      // Triggers when a section is roughly centered in the viewport,
      // which feels more natural than the moment it first appears.
      rootMargin: "-40% 0px -50% 0px",
    }
  );

  sections.forEach((section) => {
    if (section.id) observer.observe(section);
  });
}

// Wait for the DOM so we're not querying elements before they exist.
document.addEventListener("DOMContentLoaded", () => {
  setCurrentYear();
  highlightActiveNavLink();
});
