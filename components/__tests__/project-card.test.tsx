import { fireEvent, render, screen } from '@testing-library/react';
import ProjectCard from '../carousel/project-card';
import projectData from '../carousel/project-data';
import '@testing-library/jest-dom';

describe('Project Card Component', () => {
  let moveForward: () => void;
  let moveBackward: () => void;
  beforeEach(() => {
    const currentProjectIndex = 2;
    const data = projectData;
    moveForward = jest.fn();
    moveBackward = jest.fn();
    render(
      <ProjectCard currentProjectIndex={currentProjectIndex} projectData={data} moveBackward={moveBackward} moveForward={moveForward} />,
    );
  });

  it('renders an information card with project data.', () => {
    const titleImage = screen.getByTestId('card-title-image');
    const title = screen.getByTestId('card-title');
    const description = screen.getByTestId('card-description');
    const liveLink = screen.getByTestId('card-live-link');
    const githubLink = screen.getByTestId('card-github-link');

    expect(titleImage).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(liveLink).toBeInTheDocument();
    expect(githubLink).toBeInTheDocument();
  });

  it('renders a project gif for the current project.', () => {
    const projectCard = screen.getByTestId('card-gif-image');
    expect(projectCard).toBeInTheDocument();
  });

  it('calls moveForward when the forward arrow is clicked', () => {
    const forwardArrow = screen.getByTestId('forward-arrow');
    fireEvent.click(forwardArrow);
    expect(moveForward).toHaveBeenCalled();
    fireEvent.click(forwardArrow);
    expect(moveForward).toHaveBeenCalledTimes(2);
  });

  it('calls moveBackward when the forward arrow is clicked', () => {
    const backwardArrow = screen.getByTestId('backward-arrow');
    fireEvent.click(backwardArrow);
    expect(moveBackward).toHaveBeenCalled();
    fireEvent.click(backwardArrow);
    expect(moveBackward).toHaveBeenCalledTimes(2);
  });
});
