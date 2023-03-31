import Link from 'next/link';
import React from 'react';

interface NavItemsProps {
  hamburgerIsOpen: boolean;
  setHamburgerIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function NavItems(props: NavItemsProps) {
  const { hamburgerIsOpen, setHamburgerIsOpen } = props;

  const regularNav = 'hidden md:flex items-center gap-2 font-bold text-white py-2';
  const drawerNav = 'absolute flex flex-col z-30 left-0 top-20 gap-2 font-bold text-black py-2 w-52 ';

  const regularLink = 'md:block hover:bg-lightgray hover:bg-opacity-20 py-4 px-8';
  const drawerLink = 'hover:bg-lightgray hover:bg-opacity-20 py-4 pl-4 ';

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if ((event.target as HTMLElement).tagName === 'A') {
      setHamburgerIsOpen(false);
    }
  };

  return (
    <div data-testid="nav-items" onClick={(event) => handleClick(event)} className={hamburgerIsOpen ? drawerNav : regularNav}>
      <Link className={hamburgerIsOpen ? drawerLink : regularLink} id="home" href="/">
        Home
      </Link>
      <Link className={hamburgerIsOpen ? drawerLink : regularLink} href="/about">
        About
      </Link>
      <Link className={hamburgerIsOpen ? drawerLink : regularLink} href="/projects">
        Projects
      </Link>
      <Link className={hamburgerIsOpen ? drawerLink : regularLink} href="/contact">
        Contact
      </Link>
    </div>
  );
}
