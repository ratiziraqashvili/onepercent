import { Menu, Search, ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const MobileNavbarItem = () => {
  return (
    <>
      <div className="lg:hidden">
        <Menu strokeWidth={1} className="size-7 cursor-pointer" />
      </div>
      <Link href="/" className="lg:hidden">
        <Image className="cursor-pointer" width={100} height={100} alt="OnePercent" src="/logo.jpg" />
      </Link>
      <div className="flex gap-5 lg:hidden">
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
