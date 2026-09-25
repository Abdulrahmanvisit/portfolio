export interface NavLink {
  id: string;
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { id: "home", label: "Home", href: "#home" },
  { id: "about", label: "About", href: "#about" },
  { id: "skills", label: "Skills", href: "#skills" },
  { id: "projects", label: "Projects", href: "#projects" },
  { id: "journey", label: "Journey", href: "#journey" },
  { id: "contact", label: "Contact", href: "#contact" },
];
