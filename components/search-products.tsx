import { cn } from "@/lib/utils";
import { DialogClose } from "./ui/dialog";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";

interface SearchProductsProps {
  products:
    | {
        name: string;
        images: any;
      }[]
    | never[];
  categories:
    | {
        name: string;
      }[]
    | never[];
}

export const SearchProducts = ({
  products,
  categories,
}: SearchProductsProps) => {
  const router = useRouter();

  if (products.length === 0) return null;

  return (
    <div className={cn("w-full", categories.length > 0 && "w-[60%]")}>
      <h3 className="text-xs text-muted-foreground tracking-wider uppercase border-b-[1px] pb-1 p-4">
        პროდუქტები
      </h3>

      {products.map((product) => (
        <DialogClose asChild>
          <button
            onClick={() =>
              router.push(`/products/${product.name.replace(/\s+/g, "-")}`)
            }
            className="w-full hover:bg-gray-50 text-start text-[0.85rem] tracking-wider py-2 px-4 hover:underline flex gap-4 items-center"
          >
            <Image
              alt=""
              src={urlForImage(product.images[0])}
              width={50}
              height={50}
            />
            <span>{product.name}</span>
          </button>
        </DialogClose>
      ))}
    </div>
  );
};
