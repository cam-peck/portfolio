import NavItems from './navitems';
import Image from 'next/image';

interface DrawerMenuProps {
  hamburgerIsOpen: boolean;
  setHamburgerIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function DrawerMenu(props: DrawerMenuProps) {
  const { hamburgerIsOpen, setHamburgerIsOpen } = props;

  const closedMenu = 'fixed top-0 bottom-0 -left-52 x2s:-left-60 w-52 x2s:w-60 shadow-xl transition-left ease-in-out duration-200 z-20';
  const openMenu = 'fixed top-0 bottom-0 bg-ghostwhite left-0 w-52 x2s:w-60 shadow-xl transition-left ease-in-out duration-200 z-20';

  return (
    <section className={hamburgerIsOpen ? openMenu : closedMenu}>
      <div className="flex items-center h-[70px] pl-5 bg-black">
        <Image src="/logo.png" width={50} height={10} alt="navbar-emblem" />
      </div>
      <div
        onClick={() => {
          setHamburgerIsOpen(false);
        }}
        className="flex flex-col m-2"
      >
        <NavItems hamburgerIsOpen={true} />
      </div>
    </section>
  );
}
