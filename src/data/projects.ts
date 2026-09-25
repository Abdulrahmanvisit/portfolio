export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  github: string;
  demo: string | null;
  image: string;
}

export const projects: Project[] = [
  {
    id: "sme-expense-tracker",
    title: "SME Expense Tracker",
    description:
      "A tracking-focused web app for small business owners to log daily expenses, monitor category spending, and keep financial records organized. Built with React, Vite, and Tailwind CSS.",
    tags: ["React", "Vite", "Tailwind CSS"],
    github: "https://github.com/Abdulrahmanvisit/SME-Expense-Tracker-project",
    demo: "https://sme-expense-tracker-project.vercel.app",
    image: "/images/projects/sme-expense-tracker.png",
  },
  {
    id: "movie-search-pro",
    title: "Movie Search Pro",
    description:
      "A movie discovery web application with React, Vite, React Router, and Tailwind CSS. Search movies via OMDb API, view detailed information, and save favorites to a personal watchlist stored in localStorage.",
    tags: ["React", "Vite", "React Router", "Tailwind CSS", "API"],
    github: "https://github.com/Abdulrahmanvisit/movie-search-pro",
    demo: "https://movie-search-pro-ivory.vercel.app",
    image: "/images/projects/movie-search-pro.png",
  },
  {
    id: "react-currency-converter",
    title: "Currency Converter (React)",
    description:
      "A responsive, dynamic currency converter built with React, Vite, and Tailwind CSS. Demonstrates custom hooks, state management with useState, and real-time API integration for exchange rates.",
    tags: ["React", "Vite", "Tailwind CSS", "API"],
    github: "https://github.com/Abdulrahmanvisit/react-vite-currency-converter",
    demo: "https://react-vite-currency-converter-1w7y.vercel.app/",
    image: "/images/projects/react-currency-converter.png",
  },
  {
    id: "polac-website",
    title: "Nigeria Police Academy Website",
    description:
      "A modern, responsive website for the Nigeria Police Academy providing comprehensive information about admissions, academic programs, campus life, and institutional updates. Built with TypeScript for enhanced accessibility and digital presence.",
    tags: ["TypeScript", "React", "Responsive Design"],
    github: "https://github.com/Abdulrahmanvisit/polacWebsite",
    demo: null,
    image: "/images/projects/polac-website.png",
  },
  {
    id: "sociobook",
    title: "Sociobook",
    description:
      "A front-end clone replicating Facebook's interface — layout, feed, and interaction patterns rebuilt from scratch with HTML, CSS, and JavaScript.",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Abdulrahmanvisit/Sociobook",
    demo: "https://sociobook-black.vercel.app/",
    image: "/images/projects/sociobook.png",
  },
  {
    id: "bookmark-saver",
    title: "Bookmark Saver",
    description:
      "A responsive, lightweight web app to save, organize, and manage favorite links. Access bookmarks anytime, quickly and easily. Built with HTML, CSS, and JavaScript.",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Abdulrahmanvisit/Bookmark-saver",
    demo: "https://bookmark-saver-virid.vercel.app/",
    image: "/images/projects/bookmark-saver.png",
  },
  {
    id: "expense-tracker",
    title: "Expense Tracker",
    description:
      "A simple, responsive web app to record and manage daily income and expenses. Updates balance instantly and saves data locally for easy financial tracking. Built with HTML, CSS, and JavaScript.",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Abdulrahmanvisit/expense-tracker",
    demo: "https://expense-tracker-nine-lilac-51.vercel.app/",
    image: "/images/projects/expense-tracker.png",
  },
  {
    id: "color-palette",
    title: "Color Palette Generator",
    description:
      "Generates and displays random color palettes for design inspiration — simple, responsive, and built for fast iteration with HTML, CSS, and JavaScript.",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Abdulrahmanvisit/Color-Pallete-generator",
    demo: "https://color-pallete-generator-sigma.vercel.app/",
    image: "/images/projects/color-palette.png",
  },
];

export const projectPlaceholder = "/images/project-placeholder.svg";