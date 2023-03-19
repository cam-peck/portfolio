import { render, screen } from '@testing-library/react';
import Home from '../index';
import '@testing-library/jest-dom';

describe('Home', () => {
  it('renders a main and sub heading', () => {
    render(<Home />);

    const mainHeading = screen.getByRole('heading', {
      name: /Welcome!/i,
    });

    const subHeading = screen.getByRole('heading', {
      name: /I'm Cameron./i,
    });

    expect(mainHeading).toBeInTheDocument();
    expect(subHeading).toBeInTheDocument();
  });

  it('renders the profile image', () => {
    render(<Home />);

    const profileImage = screen.getByAltText('profile-image');

    expect(profileImage).toBeInTheDocument();
  });

  it('renders 8 coding language & framework images', () => {
    render(<Home />);

    const reactImage = screen.getByAltText('react-image');
    const nodeImage = screen.getByAltText('node-image');
    const nextImage = screen.getByAltText('nextjs-image');
    const awsImage = screen.getByAltText('aws-image');
    const tailwindImage = screen.getByAltText('tailwindcss-image');
    const postgresImage = screen.getByAltText('postgres-image');
    const rtlImage = screen.getByAltText('rtl-image');
    const jestImage = screen.getByAltText('jest-image');

    expect(reactImage).toBeInTheDocument();
    expect(nodeImage).toBeInTheDocument();
    expect(nextImage).toBeInTheDocument();
    expect(awsImage).toBeInTheDocument();
    expect(tailwindImage).toBeInTheDocument();
    expect(postgresImage).toBeInTheDocument();
    expect(rtlImage).toBeInTheDocument();
    expect(jestImage).toBeInTheDocument();
  });

  it('renders the short bio content', () => {
    render(<Home />);

    const bioContent = screen.getByText(
      "I create software for the web. I'm a full stack developer currently reading The Wheel of Time series. I'm currently learning Next.js and Chopin. Chopin is more difficult.",
    );

    expect(bioContent).toBeInTheDocument();
  });
});
