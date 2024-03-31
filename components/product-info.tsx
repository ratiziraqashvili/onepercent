import { Product } from "@/types";

interface ProductInfoProps {
  product: Product;
}

export const ProductInfo = ({ product }: ProductInfoProps) => {
  return (
    <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
      <h1 className="text-3xl tracking-wider">{product.name}</h1>

      <div className="mt-3">
        <h2 className="sr-only">Product information</h2>
        <p className="text-3xl tracking-wider">
          {product.price.toFixed(2)} {product.currency}
        </p>
      </div>

     {product. <div className="mt-4">
        <p>
            Size: <strong></strong>
        </p>
      </div>}

      <div className="mt-6">
        <h3 className="sr-only">Description</h3>
        <div className="space-y-6 text-base text-muted-foreground">{product.description}</div>
      </div>
    </div>
  );
};
