import { fireEvent, render, screen } from '@testing-library/react';
import ProjectDots from '../carousel/progress-dots';
import projectData from '../carousel/project-data';
import '@testing-library/jest-dom';

describe('Project Dots', () => {
  let handleDotClick: () => void;
  beforeEach(() => {
    handleDotClick = jest.fn();
    const currentProjectIndex = 2;
    const data = projectData;
    render(<ProjectDots currentProjectIndex={currentProjectIndex} handleDotClick={handleDotClick} projectData={data} />);
  });

  it('renders all five dots from the sample data', () => {
    const carouselDotsContainer = screen.getByTestId('project-dots');

    expect(carouselDotsContainer.children).toHaveLength(5);
  });

  it('calls handleDotClick with the correct index value when a dot is clicked', () => {
    const carouselDotsContainer = screen.getByTestId('project-dots');
    const firstDot = carouselDotsContainer.children[0];
    const fourthDot = carouselDotsContainer.children[3];

    fireEvent.click(firstDot);
    expect(handleDotClick).toHaveBeenCalledWith(0); // index is 0

    fireEvent.click(fourthDot);
    expect(handleDotClick).toHaveBeenCalledWith(3); // index is 3
  });
});
