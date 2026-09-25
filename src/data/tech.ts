import type { ComponentType } from "react";
import {
  SiCss,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

type TechIcon = ComponentType<{ className?: string }>;

export interface TechItem {
  name: string;
  icon: TechIcon;
  category: string;
  description: string;
}

export const techStack: TechItem[] = [
  {
    name: "React",
    icon: SiReact,
    category: "Frontend",
    description: "Component-driven UI development and state management.",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    category: "Language",
    description: "Type-safe JavaScript for robust, maintainable codebases.",
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    category: "Language",
    description: "Modern ES6+ scripting for the web and beyond.",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    category: "Styling",
    description: "Utility-first CSS for fast, consistent design systems.",
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    category: "Frontend",
    description: "Full-stack React framework for production-grade apps.",
  },
  {
    name: "HTML",
    icon: SiHtml5,
    category: "Markup",
    description: "Semantic, accessible markup as the foundation of every page.",
  },
  {
    name: "CSS",
    icon: SiCss,
    category: "Styling",
    description: "Modern layouts with flexbox, grid, and custom properties.",
  },
  {
    name: "Git",
    icon: SiGit,
    category: "Tool",
    description: "Distributed version control and branching strategy.",
  },
  {
    name: "GitHub",
    icon: SiGithub,
    category: "Tool",
    description: "Collaboration, code review, and CI/CD workflows.",
  },
  {
    name: "REST APIs",
    icon: SiNodedotjs,
    category: "Integration",
    description: "Designing and consuming HTTP APIs end to end.",
  },
];
