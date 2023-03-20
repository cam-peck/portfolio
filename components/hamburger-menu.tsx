interface HamburgerMenuProps {
  hamburgerIsOpen: boolean;
  setHamburgerIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function HamburgerMenu(props: HamburgerMenuProps) {
  const { hamburgerIsOpen, setHamburgerIsOpen } = props;

  const topHamburger = 'block h-0.5 w-8 bg-ghostwhite transition-all duration-500 ease-in-out';
  const topCloseIcon = 'block h-0.5 w-8 bg-ghostwhite rotate-45 translate-y-3 transition-all duration-500 ease-in-out';

  const middleHamburger = 'block h-0.5 w-8 bg-ghostwhite transition-all duration-500 ease-in-out';
  const middleCloseIcon = 'block h-0.5 w-8 bg-black -translate-x-8 transition-all duration-500 ease-in-out';

  const bottomHamburger = 'block h-0.5 w-8 bg-ghostwhite transition-all duration-500 ease-in-out';
  const bottomCloseIcon = 'block h-0.5 w-8 bg-ghostwhite -rotate-45 -translate-y-2 transition-all duration-500 ease-in-out';
  return (
    <section>
      <div onClick={() => setHamburgerIsOpen(!hamburgerIsOpen)} className={`space-y-2 py-4 hover:cursor-pointer`}>
        {/* Top Bar*/}
        <span className={hamburgerIsOpen ? topCloseIcon : topHamburger}></span>
        {/* Middle Bar */}
        <span className={hamburgerIsOpen ? middleCloseIcon : middleHamburger}></span>
        {/* Bottom Bar*/}
        <span className={hamburgerIsOpen ? bottomCloseIcon : bottomHamburger}></span>
      </div>
    </section>
  );
}
