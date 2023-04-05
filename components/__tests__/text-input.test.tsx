import { render, screen } from '@testing-library/react';
import TextInput from '../inputs/text-input';
import '@testing-library/jest-dom';

describe('Projects', () => {
  beforeEach(() => {
    render(<TextInput />);
  });

  //   it('renders a main heading', () => {
  //     const mainHeading = screen.getByTestId('main-header');
  //     expect(mainHeading).toBeInTheDocument();
  //   });

  //   it('renders the project card component', () => {
  //     const projectCard = screen.getByTestId('project-card');
  //     expect(projectCard).toBeInTheDocument();
  //   });

  //   it('renders the project dots component', () => {
  //     const projectDots = screen.getByTestId('project-dots');
  //     expect(projectDots).toBeInTheDocument();
  //   });
});
