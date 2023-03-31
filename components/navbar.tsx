import { useState } from 'react';
import NavItems from './navitems';
import HamburgerMenu from './hamburger-menu';
import DrawerMenu from './drawer-menu';

export default function NavBar() {
  const [hamburgerIsOpen, setHamburgerIsOpen] = useState(false);

  const darkBackground = hamburgerIsOpen ? (
    <div
      className="bg-darkgray opacity-40 fixed top-0 left-0 bottom-0 right-0 z-10 transition-all ease-in-out duration-300"
      onClick={() => {
        setHamburgerIsOpen(false);
      }}
    />
  ) : (
    <div className="bg-ghostwhite opacity-0 absolute z-10" />
  );

  return (
    <header className="w-full bg-black text-ghostwhite">
      <nav className="px-6 mx-auto flex items-center justify-between">
        <div className="flex gap-3 items-center">
          <h1 className="md:hidden text-white font-bold text-[24px]">CP</h1>
          <h1 className="hidden md:block text-white font-bold text-[24px]">CAMERON PECK</h1>
        </div>
        <div className="flex">
          <NavItems hamburgerIsOpen={hamburgerIsOpen} setHamburgerIsOpen={setHamburgerIsOpen} />
        </div>
        <div className="md:hidden pt-2 pb-2" data-testid="navbar-hamburger-menu">
          <HamburgerMenu hamburgerIsOpen={hamburgerIsOpen} setHamburgerIsOpen={setHamburgerIsOpen} />
        </div>
        <DrawerMenu hamburgerIsOpen={hamburgerIsOpen} />
        {darkBackground}
      </nav>
    </header>
  );
}
