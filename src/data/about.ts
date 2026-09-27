import type { ComponentType } from "react";
import { Brain, Code, Globe, Sparkles, Users, BookOpen, RefreshCw } from "lucide-react";

type Icon = ComponentType<{ className?: string }>;

interface Capability {
  title: string;
  description: string;
  icon: Icon;
}

export const about = {
  intro: `Final-year Computer Science student specializing in frontend development with React, Next.js, TypeScript, and Tailwind CSS. Comfortable with Git/GitHub and REST API integration, and currently deepening my backend and system-design fundamentals. I write code that's clean, accessible, and easy for the next person to maintain. Based in Abuja, Nigeria.`,
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
      title: "Collaboration & Communication",
      description: "Clear written and verbal communication. Comfortable working in teams, giving and receiving feedback, and aligning with shared goals.",
      icon: Users,
    },
    {
      title: "Adaptability & Continuous Learning",
      description: "Quick to pick up new tools, frameworks, and workflows. Comfortable navigating unfamiliar codebases and following existing patterns and standards.",
      icon: BookOpen,
    },
    {
      title: "Reliable Code Practices",
      description: "Writes maintainable code, follows existing conventions, respects existing architecture, and improves incrementally without unnecessary rewrites.",
      icon: RefreshCw,
    },
    {
      title: "Problem Solving",
      description: "Breaks down complex challenges into clear, maintainable solutions. Learns from mistakes and iterates toward better outcomes.",
      icon: Brain,
    },
  ] as Capability[],
};