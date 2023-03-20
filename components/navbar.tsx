import { useState } from 'react';
import NavItems from './navitems';
import HamburgerMenu from './hamburger-menu';
import DrawerMenu from './drawer-menu';
import Image from 'next/image';

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
      <nav className="max-w-6xl px-6 mx-auto flex items-center justify-between">
        <div className="flex gap-3 items-center">
          <Image src="/logo.png" width={50} height={10} alt="navbar-emblem" />
        </div>
        <div className="hidden md:flex">
          <NavItems hamburgerIsOpen={false} />
        </div>
        <div className="md:hidden pt-2 pb-2">
          <HamburgerMenu hamburgerIsOpen={hamburgerIsOpen} setHamburgerIsOpen={setHamburgerIsOpen} />
        </div>
        <DrawerMenu hamburgerIsOpen={hamburgerIsOpen} setHamburgerIsOpen={setHamburgerIsOpen} />
        {darkBackground}
      </nav>
    </header>
  );
}
