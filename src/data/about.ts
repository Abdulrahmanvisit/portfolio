import type { ComponentType } from "react";
import { Brain, Code, Globe, Sparkles } from "lucide-react";

type Icon = ComponentType<{ className?: string }>;

interface Capability {
  title: string;
  description: string;
  icon: Icon;
}

export const about = {
  intro: `Final-year Computer Science student specializing in frontend development with React, Next.js, TypeScript, and Tailwind CSS. Comfortable with Git/GitHub and REST API integration, and currently deepening my backend and system-design fundamentals. I care about clean component architecture, accessible UI, and code that's easy for the next person to pick up. Based in Abuja, Nigeria.`,
  list: [
    {
      title: "Frontend Development",
      description: "React, Next.js, TypeScript, Tailwind CSS, and accessible markup.",
      icon: Code,
    },
    {
      title: "Full-stack Development",
      description: "Building end-to-end experiences with REST APIs and server-side logic.",
      icon: Globe,
    },
    {
      title: "Developer Experience & Tooling",
      description: "Modern workflows, developer tools, and productivity practices that ship quality code faster.",
      icon: Sparkles,
    },
    {
      title: "Problem Solving",
      description: "Decomposing complex challenges into clean, maintainable solutions.",
      icon: Brain,
    },
  ] as Capability[],
};
