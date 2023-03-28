import { render, screen } from '@testing-library/react';
import Home from '../../pages/index';
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

    const reactImage = screen.getByAltText('react-icon');
    const nodeImage = screen.getByAltText('node-icon');
    const nextImage = screen.getByAltText('nextjs-icon');
    const awsImage = screen.getByAltText('aws-icon');
    const tailwindImage = screen.getByAltText('tailwindcss-icon');
    const postgresImage = screen.getByAltText('postgres-icon');
    const rtlImage = screen.getByAltText('rtl-icon');
    const jestImage = screen.getByAltText('jest-icon');

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
      /I create software for the web. I&apos;m a full stack developer currently learning Next.js and Cypress -- I&apos;m really into testing; GitHub actions are a lifesaver. I&apos;m also reading Eloquent JavaScript and The Great Hunt. They have a surprising amount of things in common./,
    );

    expect(bioContent).toBeInTheDocument();
  });
});
