import { Container } from "./container"
import { Heading } from "./heading"
import { ProductCard } from "./product-card";
import { Product } from "@/types";

interface FeaturedProps {
    products: Product[];
}

export const Featured = ({ products }: FeaturedProps) => {
    return (
        <Container>
            <Heading title="ყველაზე მოთხოვნადი" />
            <ProductCard products={products} />
        </Container>
    )
}