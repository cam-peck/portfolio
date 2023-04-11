import Link from 'next/link';
import React, { useEffect, useState } from 'react';

interface NavItemsProps {
  hamburgerIsOpen: boolean;
  setHamburgerIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

interface Size {
  width: number | undefined;
  height: number | undefined;
}

function useWindowSize(): Size {
  // gets the window size to use for resizing the NavBar
  const [windowSize, setWindowSize] = useState<Size>({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return windowSize;
}

export default function NavItems(props: NavItemsProps) {
  const { hamburgerIsOpen, setHamburgerIsOpen } = props;
  const size: Size = useWindowSize();

  const regularNav = 'hidden md:flex items-center gap-2 font-bold text-white py-2';
  const drawerNavInactive = 'absolute flex flex-col z-30 -left-52 top-20 gap-2 font-bold text-black py-2 w-52';
  const drawerNavActive = 'absolute flex flex-col z-30 left-0 top-20 gap-2 font-bold text-black py-2 w-52 transition-all duration-200';

  const regularLink = 'md:block hover:bg-lightgray hover:bg-opacity-20 py-4 px-8';
  const drawerLink = 'hover:bg-lightgray hover:bg-opacity-20 py-4 pl-4';

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if ((event.target as HTMLElement).tagName === 'A') {
      setHamburgerIsOpen(false);
    }
  };

  let currentNavState;
  if (size.width === undefined) return;
  if (size.width >= 768) currentNavState = regularNav;
  if (size.width < 768) currentNavState = hamburgerIsOpen ? drawerNavActive : drawerNavInactive;

  return (
    <section>
      <div data-testid="nav-items" onClick={(event) => handleClick(event)} className={currentNavState}>
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
    </section>
  );
}
