import NavItems from './navitems';

export default function NavBar() {
  return (
    <header className="w-full bg-black text-ghostwhite">
      <nav className="max-w-6xl px-6 mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex gap-3 items-center">
          {/* <img /> logo will go here!*/}
          <h1 className="text-white text-xl x2s:text-2xl">CP</h1>
        </div>
        {/* Menu Items */}
        <div className="text-white items-center hidden md:flex">
          <NavItems />
        </div>
        {/* Hamburger Menu */}
        {/* <div className="md:hidden pt-2 pb-2">
          <Hamburger
            size={28}
            toggled={navDrawerIsOpen}
            toggle={setNavDrawerIsOpen}
            color="white"
          />
        </div>
        <DrawerMenu
          setNavDrawerIsOpen={setNavDrawerIsOpen}
          navDrawerIsOpen={navDrawerIsOpen}
          myRunsNavIsOpen={myRunsNavIsOpen}
          setMyRunsNavIsOpen={setMyRunsNavIsOpen}
        />
        {darkBackground} */}
      </nav>
    </header>
  );
}
