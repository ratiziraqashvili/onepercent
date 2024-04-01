"use client";

import { urlForImage } from "@/sanity/lib/image";
import { Product } from "@/types";
import Image from "next/image";
import { Key, useState } from "react";

interface ProductGalleryProps {
  product: Product;
}

export const ProductGallery = ({ product }: ProductGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="flex flex-col-reverse">
      <div className="mx-auto mt-6 w-full px-2 max-w-2xl lg:max-w-none">
        <ul className="grid grid-cols-4 gap-6 lg:pl-8 xl:pl-0">
          {product.images.map((image: any, i: any) => (
            <div
              key={i}
              onClick={() => setSelectedImage(i)}
              className="relative flex aspect-square cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase hover:bg-gray-50"
            >
              <span className="absolute inset-0 overflow-hidden rounded-md">
                <Image
                  src={urlForImage(image)}
                  width={200}
                  height={200}
                  alt=""
                  className="size-full object-cover object-center"
                />
              </span>
              {i === selectedImage && (
                <span
                  className="pointer-events-none absolute inset-0 rounded-md ring-2 ring-black ring-offset-2"
                  aria-hidden="true"
                />
              )}
            </div>
          ))}
        </ul>
      </div>

      <div className="flex justify-center mx-auto relative h-[24rem] w-[20rem] md:w-[24rem] xl:w-[30rem] md:h-[40rem] items-center">
        <Image
          alt=""
          priority
          src={urlForImage(product.images[selectedImage])}
          fill
          className="border-2 border-gray-200 object-cover object-center shadow-sm sm:rounded-lg"
        />
      </div>
    </div>
  );
};
