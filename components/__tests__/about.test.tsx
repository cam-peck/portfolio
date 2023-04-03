import { render, screen } from '@testing-library/react';
import About from '../../pages/about';
import '@testing-library/jest-dom';

describe('About', () => {
  beforeEach(() => {
    render(<About />);
  });

  it('renders a main heading', () => {
    const mainHeading = screen.getByTestId('main-header');
    expect(mainHeading).toBeInTheDocument();
  });

  it('renders the about-me image', () => {
    const aboutMeImage = screen.getByAltText('about-me-image');
    expect(aboutMeImage).toBeInTheDocument();
  });
});
