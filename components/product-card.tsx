"use client";

import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { Product } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Badge } from "./ui/badge";

interface ProductCardProps {
  products: Product[];
}

export const ProductCard = ({ products }: ProductCardProps) => {
  const [categories, setCategories] = useState<{ [key: string]: string[] }>({});

  useEffect(() => {
    const fetchCategories = async () => {
      const categoriesData: { [key: string]: string[] } = {};

      for (const product of products) {
        const categoryRefs = product.categories;
        const query = `*[_type == "category" && _id in $categoryIds] {
          _id,
          name
        }`;
        const categoryIds = categoryRefs.map((ref: any) => ref._ref);
        const fetchedCategories = await client.fetch<any[]>(query, {
          categoryIds,
        });

        categoriesData[product._id] = fetchedCategories.map(
          (category) => category.name
        );
      }

      setCategories(categoriesData);
    };

    fetchCategories();
  }, [products]);

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-1 gap-y-7">
      {products.map((product) => {
        return (
          <Link
            href={`/products/${product.name.replace(/\s+/g, "-")}`}
            key={product._id}
            className="flex flex-col gap-y-2 cursor-pointer group"
          >
            <div className="lg:h-[340px] h-[20rem] sm:h-[30rem] relative overflow-hidden rounded-lg">
              <Image
                alt=""
                src={urlForImage(product.images[0])}
                fill
                className="object-cover rounded-lg overflow-hidden group-hover:scale-105 transition duration-300"
              />
              {product.isOnSale && (
                <Badge variant="main" className="absolute bottom-2 left-2">
                  ფასდაკლება
                </Badge>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <div>
                <p className="text-sm tracking-wider opacity-90 group-hover:underline">
                  {product.name}
                </p>
                <span className="text-xs text-muted-foreground">
                  {categories[product._id]?.join(", ") || ""}
                </span>
              </div>
              <div className="flex items-center gap-2">
                {product.oldPrice && product.isOnSale && (
                  <span className="line-through text-[0.8rem] text-muted-foreground tracking-wider">
                    {product.oldPrice.toFixed(2)} {product.currency}
                  </span>
                )}
                <span className="text-sm tracking-widest opacity-90">
                  {product.price.toFixed(2)} {product.currency}
                </span>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
