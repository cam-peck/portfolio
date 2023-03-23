import { render, screen } from '@testing-library/react';
import NavBar from '../navbar';
import '@testing-library/jest-dom';

describe('NavBar', () => {
  it('renders two CP emblems -- one in the navbar and one in the navDrawer', () => {
    render(<NavBar />);

    const cpEmblem = screen.getAllByAltText('navbar-emblem');

    expect(cpEmblem).toHaveLength(2);
  });

  it('contains four links to Home, About, Projects, and Contact', () => {
    render(<NavBar />);

    const homeLink = screen.getAllByText('Home');
    const aboutLink = screen.getAllByText('About');
    const projectsLink = screen.getAllByText('Projects');
    const contactLink = screen.getAllByText('Contact');

    expect(homeLink[0]).toHaveAttribute('href', '/');
    expect(aboutLink[0]).toHaveAttribute('href', '/about');
    expect(projectsLink[0]).toHaveAttribute('href', '/projects');
    expect(contactLink[0]).toHaveAttribute('href', '/contact');
  });
});
