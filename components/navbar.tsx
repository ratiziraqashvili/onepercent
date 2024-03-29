"use client"

import { useState, useEffect } from 'react';
import { MobileNavbarItem } from './mobile-navbar-item';
import { NavbarItem } from './navbar-item';

export const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const currentScrollPos = window.pageYOffset;

      if (prevScrollPos > currentScrollPos) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [prevScrollPos]);

  return (
    <nav
      className={`h-[7.5rem] lg:h-36 flex items-center justify-between px-6 lg:px-14 xl:px-32 fixed w-full left-1/2 transform -translate-x-1/2 z-50 bg-white ${
        isVisible ? 'top-0' : '-top-[9.1rem]'
      } transition-all duration-300`}
    >
      <NavbarItem />
      <MobileNavbarItem />
    </nav>
  );
};