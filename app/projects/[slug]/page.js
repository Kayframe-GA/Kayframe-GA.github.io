import { getProject, projects } from "../../data";
import ProjectContent from "./ProjectContent";
import "./projects.css";

export async function generateStaticParams() {
  return projects.map((proj) => ({ slug: proj.slug }));
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = getProject(slug) || null;

  return <ProjectContent project={project} />;
}