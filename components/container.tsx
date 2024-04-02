import { cn } from "@/lib/utils";

export const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("max-w-[68rem] mx-auto font-sans md:px-12 px-2 lg:px-3 pb-5", className)}>
      {children}
    </div>
  );
};
