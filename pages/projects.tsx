import { useState } from 'react';
import ProjectCard from '@/components/project-card';

export default function Projects() {
  const [currentProjectIndex, setCurrentProjectIndex] = useState<number>(0);

  return (
    <main className="max-w-6xl mx-auto px-6 pt-4 mdlg:pt-8">
      <div className="mb-16 pb-2 border-b-2">
        <h1 data-testid="main-header" className="text-[48px] font-bold text-charcoal text-center mdlg:text-left">
          Projects
        </h1>
      </div>
      <ProjectCard currentProjectIndex={currentProjectIndex} />
    </main>
  );
}
