import { MobileNavbarItem } from "./mobile-navbar-item";
import { NavbarItem } from "./navbar-item";

export const Navbar = () => {
  return (
    <nav className="h-[7.5rem] lg:h-36 max-w-[68rem] mx-auto flex items-center justify-between px-6 lg:px-14 xl:px-8">
      <NavbarItem />
      <MobileNavbarItem />
    </nav>
  );
};
