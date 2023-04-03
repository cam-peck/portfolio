import projectData from '@/components/project-data';

interface ProjectCard {
  currentProjectIndex: number;
}

export default function ProjectCard({ currentProjectIndex }: ProjectCard) {
  const { imageUrl, title, description, live, github } = projectData[currentProjectIndex];
  return (
    <div>
      <h1>{title}</h1>
      <h1>{description}</h1>
      <h1>{imageUrl}</h1>
      <h1>{live}</h1>
      <h1>{github}</h1>
    </div>
  );
}
