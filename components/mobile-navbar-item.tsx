"use client";

import { Menu, Search, ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { MobileMenu } from "./mobile-menu";
import useCart from "@/hooks/use-cart";
import { SearchModal } from "./modals/search-modal";

export const MobileNavbarItem = () => {
  const { items } = useCart();

  return (
    <>
      <div className="lg:hidden">
        <MobileMenu />
      </div>
      <Link href="/" className="lg:hidden">
        <Image
          className="cursor-pointer ml-6"
          width={100}
          height={100}
          alt="OnePercent"
          src="/logo.jpg"
        />
      </Link>
      <div className="flex gap-5 lg:hidden">
        <SearchModal />
        <Link className="relative" href="/cart">
          <ShoppingBag
            strokeWidth={1}
            className="size-6 hover:scale-105 cursor-pointer"
          />
          {items.length !== 0 && (
            <div className="bg-black rounded-full text-white flex items-center justify-center absolute px-2 left-3 -top-2 py-1 text-xs">
              <span>{items.length}</span>
            </div>
          )}
        </Link>
      </div>
    </>
  );
};
