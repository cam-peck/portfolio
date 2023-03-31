interface DrawerMenuProps {
  hamburgerIsOpen: boolean;
}

export default function DrawerMenu(props: DrawerMenuProps) {
  const { hamburgerIsOpen } = props;

  const closedMenu = 'fixed top-0 bottom-0 -left-52 x2s:-left-60 w-52 x2s:w-60 shadow-xl transition-left ease-in-out duration-200 z-20';
  const openMenu = 'fixed top-0 bottom-0 bg-ghostwhite left-0 w-52 x2s:w-60 shadow-xl transition-left ease-in-out duration-200 z-20';

  return (
    <div data-testid="nav-drawer" className={hamburgerIsOpen ? openMenu : closedMenu}>
      <div className="flex items-center h-[70px] pl-5 bg-black">
        <h1 className="font-bold text-xl">C. Peck</h1>
      </div>
    </div>
  );
}
