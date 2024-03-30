import { urlForImage } from "@/sanity/lib/image";
import { Product } from "@/types";
import { SanityProject } from "next-sanity"
import Image from "next/image";

interface ProductCardProps {
    products: Product[];
}

export const ProductCard = ({ products }: ProductCardProps) => {
    return (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
            {products.map(product => (
                <div key={product._id} className="flex flex-col gap-y-2">
                    <div>
                        <Image
                        alt=""
                        src={urlForImage(product.images[0])}
                        width={200}
                        height={200}
                        />
                    </div>
                </div>
            ))}
        </div>
    )
}