import { BannerImages } from "@/components/banner-images";
import { Collections } from "@/components/collections";
import { Featured } from "@/components/featured";
import { client } from "@/sanity/lib/client";
import { Product } from "@/types";
import { groq } from "next-sanity";
import { Categories } from "../../types";

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
        isOnSale,
        oldPrice,
        "slug": slug.current,
    }`
  );

  const categories =
    await client.fetch<Categories[]>(groq`*[_type == "category"] {
    _id,
    image,
    name
  }`);

  return (
    <div>
      <BannerImages />
      <Featured products={products} />
      <Collections categories={categories} />
    </div>
  );
};

export default RootPage;
