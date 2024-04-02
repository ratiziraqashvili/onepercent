import Link from "next/link";

interface CollectionsCardProps {
  categories: string[][];
}

export const CollectionsCard = ({ categories }: CollectionsCardProps) => {
  return (
    <>
      {categories.map((category, i) => {
        return (
          <Link key={i} href={""} className="">
            <div>
                
            </div>
          </Link>
        );
      })}
    </>
  );
};
