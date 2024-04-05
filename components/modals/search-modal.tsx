import { DialogTrigger } from "@radix-ui/react-dialog";
import { Dialog, DialogClose, DialogContent } from "../ui/dialog";
import { MoveRight, Search, X } from "lucide-react";
import { Input } from "../ui/input";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";

export const SearchModal = () => {
  const [inputValue, setInputValue] = useState("");
  const [isInputFocused, setIsInputFocused] = useState(false);

  const onInputChange = (event: any) => {
    setInputValue(event.target.value);
  };

  const onInputClear = () => {
    setInputValue("");
  };

  const onInputFocus = () => {
    setIsInputFocused(true);
  };

  const onInputBlur = () => {
    setIsInputFocused(false);
  };

  return (
    <Dialog>
      <DialogTrigger>
        <Search
          strokeWidth={1}
          className="size-6 hover:scale-105 cursor-pointer transition"
        />
      </DialogTrigger>
      <DialogContent className="h-[7.5rem] lg:h-36 flex justify-center items-center gap-5 md:gap-2">
        <div className="xl:w-[50%] sm:w-[75%] w-full relative flex items-center">
          <Input
            className="w-full mx-auto rounded-none placeholder:tracking-widest peer pl-4 pr-8"
            value={inputValue}
            onChange={onInputChange}
            onFocus={onInputFocus}
            onBlur={onInputBlur}
          />
          <span
            className={cn(
              "absolute top-1/2 left-4 -translate-y-1/2 text-gray-400 transition-all duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-focus:top-[0.40rem] peer-focus:text-[0.5rem] peer-focus:text-gray-600 tracking-widest",
              inputValue &&
                "text-base top-[0.40rem] text-[0.5rem] text-gray-600"
            )}
          >
            ძებნა
          </span>
          <Search
            strokeWidth={1}
            className="size-5 text-muted-foreground absolute right-2 hover:scale-105 cursor-pointer"
          />
          {inputValue && (
            <div className="absolute right-9 border-r-[1px] py-1 pr-3">
              <div
                className="border rounded-full p-[0.12rem]"
                onClick={onInputClear}
                role="button"
              >
                <X className="size-4 text-muted-foreground" strokeWidth={1} />
              </div>
            </div>
          )}
          {inputValue && isInputFocused && (
            <div className="sm:w-[101.3%] w-screen overflow-y-auto absolute top-20 sm:top-11 sm:-left-1 -left-6 flex">
              <div className="flex-1">
                {/* <SearchSuggestions /> */}
                {/* <SearchProducts /> */}
              </div>
              <div className="flex justify-between items-center group w-full cursor-pointer hover:bg-primary/5 py-3 px-3">
                <span className="text-sm tracking-wide">
                  იძებნება "{inputValue}"
                </span>
                <MoveRight
                  strokeWidth={1}
                  className="size-4 group-hover:translate-x-1 group-hover:scale-110 transition"
                />
              </div>
            </div>
          )}
        </div>
        <DialogClose>
          <X
            strokeWidth={1}
            className="text-muted-foreground cursor-pointer hover:scale-105 hover:opacity-80"
          />
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};
