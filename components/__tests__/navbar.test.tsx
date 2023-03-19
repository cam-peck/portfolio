import { render, screen } from '@testing-library/react';
import NavBar from '../navbar';
import '@testing-library/jest-dom';

describe('NavBar', () => {
  it('renders the CP emblem in the top right corner', () => {
    render(<NavBar />);

    const cpEmblem = screen.getByAltText('navbar-emblem');

    expect(cpEmblem).toBeInTheDocument();
  });

  it('contains four links to Home, About, Projects, and Contact', () => {
    render(<NavBar />);

    const homeLink = screen.getByText('Home');
    const aboutLink = screen.getByText('About');
    const projectsLink = screen.getByText('Projects');
    const contactLink = screen.getByText('Contact');

    expect(homeLink).toHaveAttribute('href', '/');
    expect(aboutLink).toHaveAttribute('href', '/about');
    expect(projectsLink).toHaveAttribute('href', '/projects');
    expect(contactLink).toHaveAttribute('href', '/contact');
  });

  it('contains a hidden hamburger menu', () => {
    render(<NavBar />);

    const hamburgerMenu = screen.getByTestId('navbar-hamburger-menu');

    expect(hamburgerMenu).not.toBeVisible();
  });
});
