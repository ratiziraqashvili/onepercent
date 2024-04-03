import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { Product } from "@/types";
import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  products: Product[];
}

export const ProductCard = ({ products }: ProductCardProps) => {
  const getCategoryData = async (categoryRefs: string[]) => {
    const query = `*[_type == "category" && _id in $categoryIds] {
      _id,
      name,
      image
    }`;
    const categoryIds = categoryRefs.map((ref: any) => ref._ref);
    const categories = await client.fetch<any[]>(query, {
      categoryIds,
    });
    return categories;
  };

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
            </div>
            <div className="flex flex-col gap-2">
              <div>
                <p className="text-sm tracking-wider opacity-90 group-hover:underline">
                  {product.name}
                </p>
                {getCategoryData(product.categories).then((categories) => (
                  <span className="text-xs text-muted-foreground">
                    {categories.map((category) => category.name).join(", ")}
                  </span>
                ))}
              </div>
              <span className="text-sm tracking-widest opacity-90">
                {product.price.toFixed(2)} {product.currency}
              </span>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
