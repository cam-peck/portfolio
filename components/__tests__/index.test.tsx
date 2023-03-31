import { render, screen } from '@testing-library/react';
import Home from '../../pages/index';
import '@testing-library/jest-dom';

describe('Home', () => {
  it('renders a main and sub heading', () => {
    render(<Home />);

    const mainHeading = screen.getByTestId('main-header');
    const subHeading = screen.getByTestId('sub-header');
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

  it('renders two clickable links for GitHub and LinkedIn', () => {
    render(<Home />);

    const gitHubLink = screen.getByRole('link', { name: 'github-icon' });
    const linkedInLink = screen.getByRole('link', { name: 'linkedin-icon' });

    expect(gitHubLink).toBeInTheDocument();
    expect(linkedInLink).toBeInTheDocument();
  });
});
