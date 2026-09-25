import type { ComponentType } from "react";
import { Brain, Code2, Database, Server, Sparkles } from "lucide-react";

type Icon = ComponentType<{ className?: string }>;

export interface LearningItem {
  title: string;
  description: string;
  icon: Icon | null;
}

export const learning: LearningItem[] = [
  {
    title: "Backend development",
    description: "Building REST APIs and server-side logic with Node.js and a database.",
    icon: Server,
  },
  {
    title: "TypeScript",
    description: "Deepening type-safety, generics, and scalable architecture in real codebases.",
    icon: Code2,
  },
  {
    title: "Full-stack engineering",
    description: "Connecting React experiences to persisted data and CI/CD deployments.",
    icon: Database,
  },
  {
    title: "AI-assisted development",
    description: "Integrating prompting workflows and tooling into my development process.",
    icon: Sparkles,
  },
  {
    title: "System design",
    description: "Studying scalable architecture patterns and performance optimization.",
    icon: Brain,
  },
];
