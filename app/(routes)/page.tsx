import { BannerImages } from "@/components/banner-images";
import { Featured } from "@/components/featured";
import { client } from "@/sanity/lib/client";
import { Product } from "@/types";
import { groq } from "next-sanity";

const RootPage = async () => {
  const products = await client.fetch<Product[]>(
    groq`*[_type == "product" && isFeatured == true && defined(isFeatured)] {
        _id,
        name,
        sku,
        images,
        currency,
        price,
        description,
        categories,
        "slug": slug.current,
    }`
  );

  console.log(products)
  return (
    <div>
      <BannerImages />
      <Featured products={products} />
    </div>
  );
};

export default RootPage;
