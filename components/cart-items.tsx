"use client";

import useCart from "@/hooks/use-cart";
import { EmptyCart } from "./empty-cart";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";
import Link from "next/link";

export const CartItems = () => {
  const { items } = useCart();

  if (items.length === 0) return <EmptyCart />

  console.log(items)

  return (
    <ul
      role="list"
      className="divide-y divide-gray-200 border-y border-gray-200"
    >
      {items.map((product, i) => {
        return (
          <li key={product._id} className="flex py-6 sm:py-10">
            <div className="shrink-0">
              <Image
              src={urlForImage(product.images[0])}
              alt={product.name}
              className="size-24 rounded-md border-2 border-gray-200 object-cover object-center sm:size-48"
              height={280}
              width={225}
            />
            </div>

            <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
              <div className="relative justify-between pr-9 sm:flex sm:gap-x-6 sm:pr-0">
                <div>
                  <div className="flex justify-between">
                    <h3 className="text-sm">
                      <Link
                        href={`/products/${product.name.replace(/\s+/g, "-")}`}
                        className="font-medium"
                      >
                        {product.name}
                      </Link>
                    </h3>
                  </div>
                  <p className="mt-1 text-sm font-medium">
                    {product.price.toFixed(2)} {product.currency}
                  </p>
                  <p className="mt-1 text-sm font-medium">
                    Size: <strong>{product?.product_data?.size}</strong>
                  </p>
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};
