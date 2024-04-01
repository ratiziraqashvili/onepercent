"use client"

import useCart from "@/hooks/use-cart"
import { EmptyCart } from "./empty-cart";

export const CartItems = () => {
    const { items } = useCart();

    console.log(items)

    if (items.length !== 0) return <EmptyCart />

    return (
        <div>

        </div>
    )
}