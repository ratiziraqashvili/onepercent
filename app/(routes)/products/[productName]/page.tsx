import { Container } from "@/components/container";
import { ProductGallery } from "@/components/product-gallery";
import { ProductInfo } from "@/components/product-info";
import { client } from "@/sanity/lib/client";
import { Product } from "@/types";
import { groq } from "next-sanity";

const ProductPage = async ({ params }: { params: { productName: string } }) => {
  const decodedProductName = decodeURIComponent(params.productName).replace(
    /-/g,
    " "
  );
  const product = await client.fetch<Product>(
    groq`*[_type == "product" && name match "${decodedProductName}"][0] {
        _id,
        "id": _id,
        name,
        sku,
        images,
        price,
        currency,
        description,
        sizes,
        categories,
        colors,
        oldPrice,
        isOnSale,
        "slug": slug.current
    }`
  );

  if (!product) {
    return (
      <div className="border-t-[1px]">
        <Container className="">
          <h2 className="tracking-wider text-muted-foreground py-36">
            No results for "{decodedProductName}". Check the spelling or use a
            different word or phrase.
          </h2>
        </Container>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl sm:px-6 lg:pt-16 lg:px-8">
      <div className="mx-auto max-w-2xl lg:max-w-none">
        <div className="pb-20 grid lg:grid-cols-2 lg:items-start lg:gap-x-16">
          <ProductGallery product={product} />
          <ProductInfo product={product} />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
