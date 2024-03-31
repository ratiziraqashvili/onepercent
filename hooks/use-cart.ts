import { useToast } from "@/components/ui/use-toast";
import { Product } from "@/types";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface CartStore {
    items: { product: Product; quantity: number}[];
    addItem: (data: Product) => void;
    removeItem: (id: string) => void;
    removeAll: () => void;
}

const useCart = create(
    persist<CartStore>((set, get) => ({
        items: [],
        addItem: (data: Product) => {
            const { toast } = useToast();
            const currentItems = get().items;
            const existingItem = currentItems.find((item) => item.product._id === data._id);

            if (existingItem) {
                const updatedItems = currentItems.map((item) =>
                item.product._id === data._id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              );

              set({ items: updatedItems });

              toast({
                title: "Item quantity updated",
                description: `${data.name} quantity has been increased in your cart.`,
              });
              } else {
                set({ items: [...get().items, { product: data, quantity: 1 }] });
                toast({
                  title: "Item added to cart",
                  description: `${data.name} has been added to your cart.`,
                });
              }    
        },
        removeItem: (id: string) => {
            const { toast } = useToast();
            set({ items: [...get().items.filter((item) => item.product._id !== id)] });
            toast({
                title: "Item removed from cart."
            })
        },
        removeAll: () => set({ items: [] }),
    }), {
        name: "cart-storage",
        storage: createJSONStorage(() => localStorage)
    })
)

export default useCart;