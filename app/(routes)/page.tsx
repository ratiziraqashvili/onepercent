import { BannerImages } from "@/components/banner-images";
import { Featured } from "@/components/featured";
import { client } from "@/sanity/lib/client";
import { SanityProject, groq } from "next-sanity";

const RootPage = async () => {
  const products = await client.fetch<SanityProject[]>(
    groq`*[_type == "product"] {
        _id,
        createdAt,
        name,
        sku,
        images,
        currency,
        price,
        description,
        "slug": slug.current
    }`
  );

  return (
    <div>
      <BannerImages />
      <Featured products={products} />
    </div>
  );
};

export default RootPage;
