export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  github: string;
  demo: string | null;
  image: string;
}

const og = (repo: string) =>
  `https://opengraph.githubassets.com/${repo.replace(/\//g, "-")}/${repo}.png`;

export const projects: Project[] = [
  {
    id: "sociobook",
    title: "Sociobook",
    description:
      "A front-end clone replicating Facebook's interface — layout, feed, and interaction patterns rebuilt from scratch with HTML, CSS and JavaScript.",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Abdulrahmanvisit/Sociobook",
    demo: null,
    image: og("Abdulrahmanvisit/Sociobook"),
  },
  {
    id: "expense-tracker",
    title: "Expense Tracker",
    description:
      "A responsive app for recording daily income and expenses, with an instantly updating balance and local data persistence.",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Abdulrahmanvisit/expense-tracker",
    demo: null,
    image: og("Abdulrahmanvisit/expense-tracker"),
  },
  {
    id: "bookmark-saver",
    title: "Bookmark Saver",
    description:
      "A lightweight web app for saving, organizing and managing favorite links, with a clean, responsive interface.",
    tags: ["JavaScript"],
    github: "https://github.com/Abdulrahmanvisit/Bookmark-saver",
    demo: null,
    image: og("Abdulrahmanvisit/Bookmark-saver"),
  },
  {
    id: "currency-converter",
    title: "Currency Converter",
    description:
      "A real-time currency conversion tool with a focused, easy-to-use interface for quick lookups.",
    tags: ["JavaScript"],
    github: "https://github.com/Abdulrahmanvisit/currency-converter",
    demo: null,
    image: og("Abdulrahmanvisit/currency-converter"),
  },
  {
    id: "color-palette",
    title: "Color Palette Generator",
    description:
      "Generates and displays random color palettes for design inspiration — simple, responsive, and built for fast iteration.",
    tags: ["CSS", "JavaScript"],
    github: "https://github.com/Abdulrahmanvisit/Color-Pallete-generator",
    demo: null,
    image: og("Abdulrahmanvisit/Color-Pallete-generator"),
  },
  {
    id: "contact-form",
    title: "Contact Form",
    description:
      "A polished, responsive contact form with client-side validation and a clean, modern UI.",
    tags: ["CSS", "JavaScript"],
    github: "https://github.com/Abdulrahmanvisit/contact-form",
    demo: null,
    image: og("Abdulrahmanvisit/contact-form"),
  },
];

export const projectPlaceholder = "/images/project-placeholder.svg";
