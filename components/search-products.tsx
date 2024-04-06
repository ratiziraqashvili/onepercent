interface SearchProductsProps {
    products: {
        name: string;
        images: any;
    } | never[];
}

export const SearchProducts = ({ products }: SearchProductsProps) => {
    return (
        <div className="w-full">
           <h3 className="text-xs text-muted-foreground tracking-wider font-[300] uppercase border-b-[1px] pb-1">პროდუქტები</h3>
        </div>
    )
}