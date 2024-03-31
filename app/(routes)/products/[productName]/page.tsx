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
    groq`*[_type == "product" && name == "${decodedProductName}"][0] {
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
        "slug": slug.current
    }`
  );

  console.log(product)

  return (
    <div className="mx-auto max-w-5xl sm:px-6 sm:pt-16 lg:px-8">
      <div className="mx-auto max-w-2xl lg:max-w-none">
        <div className="pb-20 lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-12">
            <ProductInfo product={product} />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
