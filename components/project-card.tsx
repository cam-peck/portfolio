import projectData from '@/components/project-data';
import Image from 'next/image';
import React from 'react';

interface ProjectCard {
  currentProjectIndex: number;
  setCurrentProjectIndex: React.Dispatch<React.SetStateAction<number>>;
}

export default function ProjectCard({ currentProjectIndex, setCurrentProjectIndex }: ProjectCard) {
  const { imageUrl, mainAltText, gifUrl, gifAltText, title, description, live, github } = projectData[currentProjectIndex];

  const handleDotClick = (index: number) => {
    console.log('outside index');
    if (index) {
      console.log('clicking', index);
      setCurrentProjectIndex(index);
    }
  };

  return (
    <section>
      {/* Carousel Card */}
      <div className="flex gap-8 justify-center items-center mb-12">
        {/* Info */}
        <div className="max-w-[375px] rounded overflow-hidden shadow-lg bg-white">
          <Image src={imageUrl} alt={mainAltText} width={400} height={200} />
          <div className="px-6 py-4 pb-8">
            <div className="font-bold text-[28px] mb-2">{title}</div>
            <p className="text-cardtextgray text-[18px]">{description}</p>
          </div>
          <div className="px-6 pt-4 pb-8 flex gap-4 text-linkpurple text-[18px]">
            <a href={live} target="_blank">
              Live
            </a>
            <a href={github} target="_blank">
              GitHub
            </a>
          </div>
        </div>
        {/* Gif */}
        <div>
          <Image src={gifUrl} alt={gifAltText} width={800} height={400} priority />
        </div>
      </div>

      {/* Carousel Progress Dots */}
      <div className="w-full flex gap-8">
        {projectData.map((data, index) => {
          return (
            <RenderCircle key={index} active={index === currentProjectIndex ? true : false} index={index} handleDotClick={handleDotClick} />
          );
        })}
      </div>
    </section>
  );
}

interface RenderCircle {
  key: number;
  active: boolean;
  index: number;
  handleDotClick: (index: number) => void;
}

function RenderCircle({ active, handleDotClick, index }: RenderCircle) {
  let circleType: string;
  if (active) {
    circleType = 'fa-solid';
  } else {
    circleType = 'fa-regular';
  }
  return <i className={`fa-circle ${circleType} text-xl hover:cursor-pointer`} onClick={() => handleDotClick(index)} />;
}
