import { Container } from "@/components/container";
import { ProductCard } from "@/components/product-card";
import { client } from "@/sanity/lib/client";
import { Product } from "@/types";
import { groq } from "next-sanity";
import { notFound } from "next/navigation";

const CollectionPage = async ({
  params,
}: {
  params: { collection: string };
}) => {
  const decodedCollectionName = decodeURIComponent(params.collection).replace(
    /-/g,
    " "
  );

  const products = await client.fetch<Product[]>(
    groq`*[_type == "product"] {
            _id,
            name,
            sku,
            images,
            price,
            currency,
            description,
            sizes,
            colors,
            isOnSale,
            oldPrice,
            "slug": slug.current,
            "categories": categories[]->{
                _id,
                name
              },
        }`
  );

  const filteredProducts = products.filter((product) =>
    product.categories.some((category) =>
      decodedCollectionName === "all"
        ? category
        : category.name === decodedCollectionName
    )
  );

  if (filteredProducts.length === 0) return notFound();

  return (
    <Container>
      <ProductCard products={filteredProducts} />
    </Container>
  );
};

export default CollectionPage;
