export interface JourneyItem {
  id: string;
  title: string;
  organization: string;
  date: string;
  description?: string;
  bullets?: string[];
}

export const journey: JourneyItem[] = [
  {
    id: "education",
    title: "BSc Computer Science",
    organization: "Ahmadu Bello University, Zaria",
    date: "Jan 2023 – Nov 2027",
    description: "Pursuing a Bachelor of Science in Computer Science with a CGPA of 4.30/5.00.",
  },
  {
    id: "siwes",
    title: "SIWES Intern — Frontend Development",
    organization: "Mentors Innovation Hub (MIHub), Yola, Adamawa State",
    date: "Dec 22, 2025 – Feb 2026",
    bullets: [
      "Built responsive interfaces with HTML, CSS and JavaScript across several practical projects.",
      "Developed interactive UI components in React.js, improving UX and functionality.",
      "Collaborated with a team using Git/GitHub for version control and code management.",
      "Debugged complex issues and earned supervisor recognition for consistent contribution.",
    ],
  },
  {
    id: "summit",
    title: "Summit Organizing Team Member",
    organization: "Mentors Innovation Hub (MIHub), Jimeta, Adamawa State",
    date: "Feb – Apr 2026",
    bullets: [
      "Helped plan and run the NextGen Summit 2026, a learning platform on AI and prompting for students.",
      "Coordinated logistics and program flow across a diverse organizing team.",
    ],
  },
];
