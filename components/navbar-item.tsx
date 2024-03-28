"use client";

import { cn } from "@/lib/utils";
import { Search, ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const NavbarItem = () => {
  const pathname = usePathname();

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
      <div className="flex gap-7 items-center">
        <div>
          {/* <Image
                     src={}
                     alt="One Percent"
                    /> */}
          image here
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
      <div className="flex gap-5">
        <Search
          strokeWidth={1}
          className="size-6 hover:scale-105 cursor-pointer"
        />
        <Link href="/cart">
          <ShoppingBag
            strokeWidth={1}
            className="size-6 hover:scale-105 cursor-pointer"
          />
        </Link>
      </div>
    </>
  );
};
