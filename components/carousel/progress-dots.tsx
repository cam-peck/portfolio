import projectData from '@/components/carousel/project-data';

interface ProgressDots {
  currentProjectIndex: number;
  handleDotClick: (index: number) => void;
}

export default function ProgressDots({ currentProjectIndex, handleDotClick }: ProgressDots) {
  return (
    <div className="w-full flex gap-8">
      {projectData.map((data, index) => {
        let circleType: string;
        if (index === currentProjectIndex) {
          circleType = 'fa-solid';
        } else {
          circleType = 'fa-regular';
        }
        return (
          <i key={data.title} className={`fa-circle ${circleType} text-xl hover:cursor-pointer`} onClick={() => handleDotClick(index)} />
        );
      })}
    </div>
  );
}
