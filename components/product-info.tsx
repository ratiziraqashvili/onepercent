"use client";

import { Product } from "@/types";
import { Button } from "./ui/button";
import { useState } from "react";
import { cn } from "@/lib/utils";
import useCart from "@/hooks/use-cart";
import { Badge } from "./ui/badge";

interface ProductInfoProps {
  product: Product;
}

export const ProductInfo = ({ product }: ProductInfoProps) => {
  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0]);
  const { addItem } = useCart();

  const onSelectedSize = (size: string) => {
    setSelectedSize(size);
  };

  const onAddToCart = () => {
    const item = {
      ...product,
      product_data: {
        size: selectedSize,
      },
    };

    addItem(item);
  };

  return (
    <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
      <h1 className="text-4xl tracking-wider">{product.name}</h1>

      <div className="mt-3">
        <h2 className="sr-only">Product information</h2>
        <div className="flex items-center gap-2">
          {product.oldPrice && product.isOnSale && (
            <p className="line-through text-[0.8rem] text-muted-foreground tracking-wider">
              {product.oldPrice.toFixed(2)} {product.currency}
            </p>
          )}
          <p className="text-md tracking-wider font-[300]">
            {product.price.toFixed(2)} {product.currency}
          </p>
          {product.isOnSale &&  (
            <Badge variant="main">
              ფასდაკლება
            </Badge>
          )}
        </div>
      </div>

      {product.sizes?.[0] && (
        <div className="mt-4">
          <p className="text-sm">
            <span className="text-muted-foreground">ზომა:</span>{" "}
            <strong>{selectedSize}</strong>
          </p>
          {product.sizes?.map((size) => (
            <Button
              onClick={() => onSelectedSize(size)}
              key={size}
              variant="outline"
              className={cn(
                "mr-2 mt-4 rounded-3xl font-[200] px-7 transition-none",
                selectedSize === size &&
                  "text-white bg-black hover:bg-black hover:opacity-90 hover:text-white"
              )}
            >
              {size}
            </Button>
          ))}
        </div>
      )}

      <div className="mt-6">
        <h3 className="sr-only">Description</h3>
        <div className="space-y-6 text-base text-muted-foreground">
          {product.description}
        </div>
      </div>

      <form className="mt-6">
        <div className="mt-4 flex">
          <Button
            onClick={onAddToCart}
            type="button"
            className="w-full py-6 text-white rounded-3xl tracking-wider"
          >
            კალათაში დამატება
          </Button>
        </div>
      </form>
    </div>
  );
};
