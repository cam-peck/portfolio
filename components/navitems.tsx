import Link from 'next/link';

interface NavItemsProps {
  hamburgerIsOpen: boolean;
}

export default function NavItems(props: NavItemsProps) {
  const { hamburgerIsOpen } = props;

  const regularNav = 'flex items-center gap-2 font-bold text-white py-2';
  const drawerNav = 'flex flex-col gap-2 font-bold text-black  py-2';

  const regularLink = 'hover:bg-lightgray hover:bg-opacity-20 py-4 px-8';
  const drawerLink = 'hover:bg-lightgray hover:bg-opacity-20 py-4 px-4';

  return (
    <div className={hamburgerIsOpen ? drawerNav : regularNav}>
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
