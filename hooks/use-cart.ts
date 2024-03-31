import { useToast } from "@/components/ui/use-toast";
import { Product } from "@/types";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface CartStore {
    items: Product[];
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
            const existingItem = currentItems.find((item) => item._id === data._id);

            if (existingItem) {
                // TODO: Increment item
              
              } else {
                set({ items: [...get().items, data] });
                toast({
                  title: "Item added to cart",
                  description: `${data.name} has been added to your cart.`,
                });
              }    
        },
        removeItem: (id: string) => {
            const { toast } = useToast();
            set({ items: [...get().items.filter((item) => item._id !== id)] });
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