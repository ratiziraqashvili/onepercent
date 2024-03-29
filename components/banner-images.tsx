import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

export const BannerImages = () => {
  return (
    <div className="flex h-screen w-full relative">
      <div className="w-full md:w-1/2 h-full">
        <Image
          className="object-cover brightness-75 h-full w-full"
          alt=""
          src="/1.jpg"
          width={800}
          height={400}
        />
      </div>
      <div className="hidden md:block md:w-1/2 h-full">
        <Image
          className="object-cover brightness-75 h-full w-full"
          alt=""
          src="/2.jpg"
          width={800}
          height={400}
        />
      </div>
      <div className="absolute space-y-8 bottom-20 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <h1 className="text-5xl text-center font-bold text-white tracking-wider">
          ახალი კოლექცია
        </h1>
        <Link href="/collections">
          <Button
            size="xl"
            className="text-white bg-transparent border-2 border-opacity-50 hover:bg-transparent hover:border-opacity-100 text-lg hover:opacity-70"
          >
            ყველას ნახვა
          </Button>
        </Link>
      </div>
    </div>
  );
};
