import { render, screen } from '@testing-library/react';
import DrawerMenu from '../drawer-menu';
import '@testing-library/jest-dom';

describe('Drawer Menu', () => {
  it('has an abbreviated name heading', () => {
    const hamburgerIsOpen = true;
    render(<DrawerMenu hamburgerIsOpen={hamburgerIsOpen} />);

    const heading = screen.getByText('C. Peck');
    expect(heading).toBeInTheDocument();
  });

  it('is off the screen when hamburger menu is closed', () => {
    const hamburgerIsOpen = false;
    render(<DrawerMenu hamburgerIsOpen={hamburgerIsOpen} />);

    const navDrawer = screen.getByTestId('nav-drawer');
    expect(navDrawer).toHaveClass('-left-52');
  });

  it('is on the screen hamburger menu is open', () => {
    const hamburgerIsOpen = true;
    render(<DrawerMenu hamburgerIsOpen={hamburgerIsOpen} />);

    const navDrawer = screen.getByTestId('nav-drawer');
    expect(navDrawer).toHaveClass('left-0');
  });
});
