import { MobileNavbarItem } from "./mobile-navbar-item";
import { NavbarItem } from "./navbar-item";

export const Navbar = () => {
  return (
    <nav className="h-[7.5rem] lg:h-36 max-w-[68rem] flex items-center justify-between px-6 lg:px-14 xl:px-8 fixed w-full left-1/2 transform -translate-x-1/2 z-50 bg-white">
      <NavbarItem />
      <MobileNavbarItem />
    </nav>
  );
};
