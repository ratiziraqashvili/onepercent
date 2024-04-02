"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Socials = () => {
  const pathname = usePathname();

  if (pathname.startsWith("/studio")) return null;

  return (
    <div className="border-t py-14 flex justify-center w-full">
      <div className="flex gap-7">
        <Link
          target="_blank"
          href="https://www.instagram.com/onepercentgeorgia/"
        >
          <Image
            className="hover:scale-110 cursor-pointer"
            src="/instagram.png"
            alt="Instagram"
            width={17}
            height={17}
          />
        </Link>
        <Link target="_blank" href="https://www.tiktok.com/@onepercentgeorgia">
          <Image
            className="hover:scale-110 cursor-pointer"
            src="/tik-tok.png"
            alt="Tiktok"
            width={17}
            height={17}
          />
        </Link>
      </div>
    </div>
  );
};

export default Socials;