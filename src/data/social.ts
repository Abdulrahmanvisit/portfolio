import type { ComponentType } from "react";
import { Github, Linkedin, Mail } from "lucide-react";

export type NavIcon = ComponentType<{ className?: string }>;

export interface SocialLink {
  label: string;
  href: string;
  icon: NavIcon;
}

export const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/Abdulrahmanvisit",
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/abdurrahmanbello",
    icon: Linkedin,
  },
  {
    label: "Email",
    href: "mailto:abdurrahmanbello99@gmail.com",
    icon: Mail,
  },
];
