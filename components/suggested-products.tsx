import { Product } from "@/types";
import { Container } from "./container";
import { Heading } from "./heading";
import { ProductCard } from "./product-card";

interface SuggestedProductsProps {
  suggestedProducts: Product[];
}

export const SuggestedProducts = ({
  suggestedProducts,
}: SuggestedProductsProps) => {

  if (suggestedProducts.length === 0) return null;

  return (
    <Container>
      <Heading title="მსგავსი მოდელები" />
      <ProductCard products={suggestedProducts} />
    </Container>
  );
};
