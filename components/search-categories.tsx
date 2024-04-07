import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { DialogClose } from "./ui/dialog";

interface SearchCategoriesProps {
  categories:
    | {
        name: string;
      }[]
    | never[];
  products:
    | {
        name: string;
        images: any;
      }[]
    | never[];
}

export const SearchCategories = ({
  categories,
  products,
}: SearchCategoriesProps) => {
  const router = useRouter();

  if (categories.length === 0) return null;

  return (
    <div className={cn("w-full", products.length > 0 && "md:w-[40%] w-full")}>
      <h3 className="text-xs text-muted-foreground tracking-wider font-[300] uppercase border-b-[1px] pb-1 p-4">
        კოლექციები
      </h3>

      {categories.map((category) => (
        <DialogClose asChild>
          <button
            onClick={() => router.push(`/collections/${category.name}`)}
            className="w-full hover:bg-gray-50 text-start text-[0.85rem] tracking-wider py-2 px-4 hover:underline"
          >
            {category.name}
          </button>
        </DialogClose>
      ))}
    </div>
  );
};
