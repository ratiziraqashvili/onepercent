import { toast, useToast } from "@/components/ui/use-toast";
import { Product } from "@/types";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface ProductWithData extends Product {
    product_data: {
      size?: string;
    };
  }
  
  export interface CartItem extends ProductWithData {
    quantity: number;
  }
  
  interface CartStore {
    items: CartItem[];
    addItem: (data: ProductWithData) => void;
    removeItem: (id: string) => void;
    removeAll: () => void;
    setItemQuantity: (id: string, quantity: number) => void;
  }

const useCart = create(
    persist<CartStore>((set, get) => ({
        items: [],
        addItem: (data) => {
            const currentItems = get().items;
            const existingItem = currentItems.find(
                (item) => 
                item._id === data._id && 
                item.product_data?.size === data.product_data?.size
            );

            if (existingItem) {
                const updatedItems = currentItems.map((item) =>
                item._id === data._id && item.product_data?.size === data.product_data?.size
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              );

              set({ items: updatedItems });

              toast({
                description: `${data.name} ${data.product_data?.size ? `(${data.product_data?.size})` : ""} რაოდენობა გაიზარდა კალათაში.`,
              });
              } else {
                const newItem: CartItem = { ...data, quantity: 1 };
                set({ items: [...get().items, newItem ]});
                toast({
                  description: `${data.name} ${data.product_data?.size ? `(${data.product_data.size})` : ""} დაემატა კალათაში.`,
                });
              }    
        },
        removeItem: (id: string) => {
            set({ items: [...get().items.filter((item) => item._id !== id)] });
            toast({
                title: "პროდუქტი წაიშალა კალათიდან."
            })
        },
        removeAll: () => set({ items: [] }),
        setItemQuantity: (id, quantity) => {
          const updatedItems = get().items.map((item) =>
          item._id === id ? { ...item, quantity } : item
        );
        set({ items: updatedItems });
        toast({
          description: `${get().items.find((item) => item._id === id)?.name} რაოდენობა შეიცვალა ${quantity}-ზე.`,
        });
        }
    }), {
        name: "cart-storage",
        storage: createJSONStorage(() => localStorage)
    })
)

export default useCart;