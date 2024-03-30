import { urlForImage } from "@/sanity/lib/image";
import { Product } from "@/types";
import { SanityProject } from "next-sanity";
import Image from "next/image";

interface ProductCardProps {
  products: Product[];
}

export const ProductCard = ({ products }: ProductCardProps) => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-1 gap-y-7">
      {products.map((product) => (
        <div
          key={product._id}
          className="flex flex-col gap-y-2 cursor-pointer group"
        >
          <div className="lg:h-[340px] h-[20rem] sm:h-[30rem] relative overflow-hidden rounded-lg">
            <Image
              alt=""
              src={urlForImage(product.images[0])}
              fill
              className="object-cover rounded-lg overflow-hidden group-hover:scale-105 transition duration-200"
            />
          </div>
          <div className="flex flex-col gap-2">
            <div>
              <p className="text-sm tracking-wider opacity-90 group-hover:underline">
                {product.name}
              </p>
              <span className="text-xs text-muted-foreground">
                {product.categories[0]}
              </span>
            </div>
            <span className="text-sm tracking-widest opacity-90">
              {product.price.toFixed(2)} {product.currency}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};
