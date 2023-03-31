import { render, screen } from '@testing-library/react';
import NavBar from '../navbar';
import '@testing-library/jest-dom';

describe('NavBar', () => {
  it('renders my full name twice -- once in the navbar and one in the navDrawer', () => {
    render(<NavBar />);

    const fullName = screen.getByRole('heading', { name: 'CAMERON PECK' });
    const abbreviatedName = screen.getByRole('heading', { name: 'CP' });

    expect(fullName).toBeInTheDocument();
    expect(abbreviatedName).toBeInTheDocument();
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
});
