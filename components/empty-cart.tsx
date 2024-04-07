import { Ban, Plus } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

export const EmptyCart = () => {
  return (
    <div className="mx-auto flex justify-center items-center border py-14">
      <div className="flex flex-col gap-5 items-center">
        <Ban className="text-muted-foreground size-10" />
        <p className="text-lg">კალათა ცარიელია</p>
        <span className="text-sm text-muted-foreground">
          დაამატე პროდუქტები კალათაში
        </span>
        <Link href="/collections">
          <Button>
            <Plus className="size-4 mr-2" />
            დამატება
          </Button>
        </Link>
      </div>
    </div>
  );
};
