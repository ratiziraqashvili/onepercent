import { BannerImages } from "@/components/banner-images";
import { Collections } from "@/components/collections";
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

  const productCategories = products.map(product => [product.categories, product.images]);

  return (
    <div>
      <BannerImages />
      <Featured products={products} />
      <Collections categories={productCategories} />
    </div>
  );
};

export default RootPage;
