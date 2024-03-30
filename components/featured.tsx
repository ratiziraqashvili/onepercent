import { Container } from "./container"
import { Heading } from "./heading"

interface FeaturedProps {
    products: 
}

export const Featured = ({ products }) => {
    return (
        <Container>
            <Heading title="ყველაზე მოთხოვნადი" />
            <ProductCard />
        </Container>
    )
}