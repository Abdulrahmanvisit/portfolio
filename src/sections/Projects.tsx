import Section from "../components/Section";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <Section
      id="projects"
      label="Selected work"
      title="Projects"
      className="grid gap-8 md:grid-cols-2"
    >
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </Section>
  );
}
