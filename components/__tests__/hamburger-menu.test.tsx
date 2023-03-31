import { fireEvent, render, screen } from '@testing-library/react';
import HamburgerMenu from '../hamburger-menu';
import '@testing-library/jest-dom';

describe('Hamburger Menu', () => {
  it('takes a function "setHamburgerIsOpen" as props', () => {
    const hamburgerIsOpen = false;
    const setHamburgerIsOpen = jest.fn();
    render(<HamburgerMenu hamburgerIsOpen={hamburgerIsOpen} setHamburgerIsOpen={setHamburgerIsOpen} />);

    setHamburgerIsOpen(true);
    expect(setHamburgerIsOpen).toHaveBeenCalled();
  });

  it('should call setHamburgerIsOpen when clicked', () => {
    const hamburgerIsOpen = false;
    const setHamburgerIsOpen = jest.fn();
    render(<HamburgerMenu hamburgerIsOpen={hamburgerIsOpen} setHamburgerIsOpen={setHamburgerIsOpen} />);

    const burgerDiv = screen.getByTestId('hamburger-menu');
    fireEvent.click(burgerDiv);
    expect(setHamburgerIsOpen).toHaveBeenCalled();
  });

  it('renders a triple bar hamburger menu when closed', () => {
    const hamburgerIsOpen = false;
    const setHamburgerIsOpen = jest.fn();
    render(<HamburgerMenu hamburgerIsOpen={hamburgerIsOpen} setHamburgerIsOpen={setHamburgerIsOpen} />);

    const burgerDiv = screen.getByTestId('hamburger-menu');
    expect(burgerDiv.children).toHaveLength(3);
    expect(burgerDiv.children[1]).toHaveClass('bg-ghostwhite'); // checking that middle bar is present
  });

  it('renders an x when open', () => {
    const hamburgerIsOpen = true;
    const setHamburgerIsOpen = jest.fn();
    render(<HamburgerMenu hamburgerIsOpen={hamburgerIsOpen} setHamburgerIsOpen={setHamburgerIsOpen} />);

    const burgerDiv = screen.getByTestId('hamburger-menu');
    expect(burgerDiv.children).toHaveLength(3);
    expect(burgerDiv.children[1]).toHaveClass('bg-black'); // checking that middle bar is not present
  });
});
