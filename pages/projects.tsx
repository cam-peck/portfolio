import { useState } from 'react';
import ProjectCard from '@/components/carousel/project-card';
import ProgressDots from '@/components/carousel/progress-dots';
import projectData from '@/components/carousel/project-data';

export default function Projects() {
  const [currentProjectIndex, setCurrentProjectIndex] = useState<number>(2);

  const handleDotClick = (index: number) => {
    if (index !== null) {
      setCurrentProjectIndex(index);
    }
  };

  return (
    <main className="max-w-6xl mx-auto px-6 pt-4 mdlg:pt-8">
      <div className="mb-16 pb-2 border-b-2">
        <h1 data-testid="main-header" className="text-[48px] font-bold text-charcoal text-center mdlg:text-left">
          Projects
        </h1>
      </div>
      <ProjectCard currentProjectIndex={currentProjectIndex} projectData={projectData} />
      <ProgressDots handleDotClick={handleDotClick} currentProjectIndex={currentProjectIndex} projectData={projectData} />
    </main>
  );
}
