import { fireEvent, render, screen } from '@testing-library/react';
import NavItems from '../navitems';
import '@testing-library/jest-dom';

describe('NavItems', () => {
  it('contains four links to Home, About, Projects, and Contact', () => {
    const hamburgerIsOpen = false;
    const setHamburgerIsOpen = jest.fn();
    render(<NavItems hamburgerIsOpen={hamburgerIsOpen} setHamburgerIsOpen={setHamburgerIsOpen} />);

    const homeLink = screen.getByText('Home');
    const aboutLink = screen.getByText('About');
    const projectsLink = screen.getByText('Projects');
    const contactLink = screen.getByText('Contact');

    expect(homeLink).toHaveAttribute('href', '/');
    expect(aboutLink).toHaveAttribute('href', '/about');
    expect(projectsLink).toHaveAttribute('href', '/projects');
    expect(contactLink).toHaveAttribute('href', '/contact');
  });

  it('renders links at the top right of the page when hamburger is closed', () => {
    const hamburgerIsOpen = false;
    const setHamburgerIsOpen = jest.fn();
    render(<NavItems hamburgerIsOpen={hamburgerIsOpen} setHamburgerIsOpen={setHamburgerIsOpen} />);

    const navItemsDiv = screen.getByTestId('nav-items');
    expect(navItemsDiv).not.toHaveClass('absolute');
  });

  it('renders links on the left side of the page when hamburger is open', () => {
    const hamburgerIsOpen = true;
    const setHamburgerIsOpen = jest.fn();
    render(<NavItems hamburgerIsOpen={hamburgerIsOpen} setHamburgerIsOpen={setHamburgerIsOpen} />);

    const navItemsDiv = screen.getByTestId('nav-items');
    expect(navItemsDiv).toHaveClass('absolute');
  });

  it('takes a prop "setHamburgerIsOpen"', () => {
    const hamburgerIsOpen = false;
    const setHamburgerIsOpen = jest.fn();
    render(<NavItems hamburgerIsOpen={hamburgerIsOpen} setHamburgerIsOpen={setHamburgerIsOpen} />);

    setHamburgerIsOpen(true);
    expect(setHamburgerIsOpen).toHaveBeenCalled();
  });

  it('calls "setHamburgerIsOpen with the argument "false" when a link is clicked', () => {
    const hamburgerIsOpen = false;
    const setHamburgerIsOpen = jest.fn();
    render(<NavItems hamburgerIsOpen={hamburgerIsOpen} setHamburgerIsOpen={setHamburgerIsOpen} />);

    const homeLink = screen.getByText('Home');
    fireEvent.click(homeLink);
    expect(setHamburgerIsOpen).toHaveBeenCalledWith(false);
  });
});
