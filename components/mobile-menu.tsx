"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const MobileMenu = () => {
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
    <Sheet>
      <SheetTrigger asChild>
        <Menu strokeWidth={1} className="size-7 cursor-pointer" />
      </SheetTrigger>
      <SheetContent className="pt-40 flex flex-col" side="left">
        <div className="flex flex-col flex-1">
          {routes.map((route) => (
            <Link key={route.href} href={route.href}>
              <button
                className={cn(
                  "text-start hover:bg-primary-foreground px-6 py-3 text-lg w-full",
                  route.isActive && "bg-primary-foreground"
                )}
              >
                {route.label}
              </button>
            </Link>
          ))}
        </div>
        <div className="pb-8 flex px-8 gap-6">
          <Link href="https://www.instagram.com/onepercentgeorgia/">
            <Image
              className="cursor-pointer hover:scale-105"
              src="/instagram.png"
              alt=""
              width={17}
              height={17}
            />
          </Link>
          <Link href="https://www.tiktok.com/@onepercentgeorgia">
            <Image
              className="cursor-pointer hover:scale-105"
              src="/tik-tok.png"
              alt=""
              width={17}
              height={17}
            />
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
};
