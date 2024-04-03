import { urlForImage } from "@/sanity/lib/image";
import { Categories } from "@/types";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface CollectionsCardProps {
  categories: Categories[];
}

export const CollectionsCard = ({ categories }: CollectionsCardProps) => {
  return (
    <div className="grid md:grid-cols-3 gap-3">
      {categories.map((category, i) => {
        return (
          <Link
            key={i}
            href={`/collections/${category.name.replace(/\s+/g, "-")}`}
            className="flex flex-col gap-y-2 cursor-pointer group"
          >
            <div className="lg:h-[360px] h-[35rem] sm:h-[40rem] relative overflow-hidden rounded-lg">
              <Image
                alt=""
                src={urlForImage(category.image)}
                fill
                className="object-cover rounded-lg overflow-hidden group-hover:scale-105 transition duration-300"
              />
            </div>
            <div className="flex items-center gap-2 pt-2">
              <span className="text-lg tracking-wider">{category.name}</span>
              <ArrowRight className="size-4 group-hover:translate-x-1 duration-300" />
            </div>
          </Link>
        );
      })}
    </div>
  );
};
