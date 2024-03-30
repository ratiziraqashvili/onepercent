import { cn } from "@/lib/utils";

export const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("max-w-[68rem] mx-auto font-sans", className)}>
      {children}
    </div>
  );
};
