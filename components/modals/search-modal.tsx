import { DialogTrigger } from "@radix-ui/react-dialog";
import { Dialog, DialogContent } from "../ui/dialog";
import { Search } from "lucide-react";
import { Input } from "../ui/input";

export const SearchModal = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <Search
          strokeWidth={1}
          className="size-6 hover:scale-105 cursor-pointer transition"
        />
      </DialogTrigger>
      <DialogContent className="h-[7.5rem] lg:h-36 flex justify-center items-center">
        <div className="w-[50%] relative flex items-center">
          <Input
            className="w-full mx-auto rounded-none placeholder:tracking-widest peer pl-4 pr-8"
            placeholder=""
          />
          <label className="absolute top-1/2 left-4 -translate-y-1/2 text-gray-400 transition-all duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-focus:top-[0.40rem] peer-focus:text-[0.5rem] peer-focus:text-gray-600 tracking-widest peer-not-placeholder-shown:top-[0.35rem] peer-not-placeholder-shown:text-[0.5rem]">
            ძებნა
          </label>
          <Search
            strokeWidth={1}
            className="size-5 text-muted-foreground absolute right-2"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};
