"use client";

import useCart from "@/hooks/use-cart";
import { cn } from "@/lib/utils";
import { Search, ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SearchModal } from "./modals/search-modal";

export const NavbarItem = () => {
  const pathname = usePathname();
  const { items } = useCart();

  const routes = [
    {
      label: "მთავარი",
      href: "/",
      isActive: pathname === "/",
    },
    {
      label: "სრული კოლექცია",
      href: "/collections/all",
      isActive: pathname === "/collections/all",
    },
  ];

  return (
    <>
      <div className="lg:flex hidden gap-7 items-center">
        <div>
          <Link href="/">
            <Image
              className="cursor-pointer"
              width={100}
              height={100}
              alt="OnePercent"
              src="/logo.jpg"
            />
          </Link>
        </div>
        <div className="flex gap-4">
          {routes.map((route) => (
            <Link
              href={route.href}
              className={cn(
                "text-sm cursor-pointer text-muted-foreground hover:text-black border-b border-white hover:border-black",
                route.isActive && "text-black border-black hover:border-b-2"
              )}
              key={route.href}
            >
              {route.label}
            </Link>
          ))}
        </div>
      </div>
      <div className="lg:flex hidden gap-5">
        <SearchModal />
        <Link className="relative hover:scale-105 transition" href="/cart">
          <ShoppingBag strokeWidth={1} className="size-6" />
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
