import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";
import Socials from "@/components/socials";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OnePercent",
  description: "OnePercent",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="pt-[9rem]">
          {children}
          <Socials />
          <Footer />
        </div>
      </body>
    </html>
  );
}
