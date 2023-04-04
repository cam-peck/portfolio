import { ProjectData } from './project-data';

interface ProgressDots {
  currentProjectIndex: number;
  projectData: ProjectData[];
  handleDotClick: (index: number) => void;
}

export default function ProgressDots({ currentProjectIndex, handleDotClick, projectData }: ProgressDots) {
  return (
    <div data-testid="project-dots" className="w-full flex justify-center gap-8">
      {projectData.map((data, index) => {
        let circleType: string;
        if (index === currentProjectIndex) {
          circleType = 'fa-solid text-charcoal';
        } else {
          circleType = 'fa-regular';
        }
        return (
          <i
            data-testid={`dot-${index}`}
            key={data.title}
            className={`fa-circle ${circleType} text-xl hover:cursor-pointer`}
            onClick={() => handleDotClick(index)}
          />
        );
      })}
    </div>
  );
}
