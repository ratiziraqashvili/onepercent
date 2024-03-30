import { Container } from "./container"
import { Heading } from "./heading"
import { SanityProject } from "next-sanity";
import { ProductCard } from "./product-card";
import { Product } from "@/types";

interface FeaturedProps {
    products: Product[];
}

export const Featured = ({ products }: FeaturedProps) => {
    return (
        <Container className="md:px-12 px-2 lg:px-3">
            <Heading title="ყველაზე მოთხოვნადი" />
            <ProductCard products={products} />
        </Container>
    )
}