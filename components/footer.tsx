"use client";

import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();

  if (pathname.startsWith("/studio")) return null;
  
  return (
    <footer className="bg-white border-t">
      <div className="mx-auto py-10">
        <p className="text-center text-xs text-muted-foreground">
          &copy; 2024,{" "}
          <span className="hover:underline cursor-pointer">OnePercent</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
