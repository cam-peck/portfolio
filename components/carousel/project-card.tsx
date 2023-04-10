import Image from 'next/image';
import React from 'react';
import { ProjectData } from './project-data';

interface ProjectCard {
  currentProjectIndex: number;
  projectData: ProjectData[];
  moveForward: () => void;
  moveBackward: () => void;
}

export default function ProjectCard({ currentProjectIndex, projectData, moveForward, moveBackward }: ProjectCard) {
  const { imageUrl, mainAltText, gifUrl, gifAltText, title, description, live, github } = projectData[currentProjectIndex];

  return (
    <section data-testid="project-card">
      <div className="flex flex-col lg:flex-row gap-8 justify-center items-center mb-12">
        {/* Backward Arrow */}
        <div className="hidden lg:block ">
          <i
            data-testid="backward-arrow"
            className="fa-solid fa-chevron-left text-[32px] hover:cursor-pointer hover:text-charcoal"
            onClick={moveBackward}
          />
        </div>

        {/* Info */}
        <div className="max-w-[375px] rounded overflow-hidden shadow-lg bg-white">
          <Image
            data-testid="card-title-image"
            className="max-h-[195px] object-cover"
            src={imageUrl}
            alt={mainAltText}
            width={400}
            height={200}
          />
          <div className="px-6 py-4 pb-8">
            <div className="font-bold text-[28px] mb-2">
              <p data-testid="card-title">{title}</p>
            </div>
            <p data-testid="card-description" className="text-cardtextgray text-[18px]">
              {description}
            </p>
          </div>
          <div data-testid="card-live-link" className="px-6 pt-4 pb-8 flex gap-4 text-linkpurple text-[18px]">
            {live.includes('https') ? (
              <a href={live} target="_blank">
                Live
              </a>
            ) : (
              <p>{live}</p>
            )}
            <a data-testid="card-github-link" href={github} target="_blank">
              GitHub
            </a>
          </div>
        </div>

        {/* Gif */}
        <div>
          <Image data-testid="card-gif-image" src={gifUrl} alt={gifAltText} width={800} height={400} priority />
        </div>

        {/* Forward Arrow */}
        <div className="hidden lg:block">
          <i
            data-testid="forward-arrow"
            className="fa-solid fa-chevron-right text-[32px] hover:cursor-pointer hover:text-charcoal"
            onClick={moveForward}
          />
        </div>
      </div>
    </section>
  );
}
