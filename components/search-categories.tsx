interface SearchCategoriesProps {
    categories: {
        name: string
    } | never[];
}

export const SearchCategories = ({ categories }: SearchCategoriesProps) => {
    return (
        <div className="w-full">
           <h3 className="text-xs text-muted-foreground tracking-wider font-[300] uppercase border-b-[1px] pb-1">კოლექციები</h3>
        </div>
    )
}