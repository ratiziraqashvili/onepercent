import { CollectionsCard } from "./collections-card";
import { Container } from "./container";
import { Heading } from "./heading";

interface CollectionsProps {
  categories: string[][];
}

export const Collections = ({ categories }: CollectionsProps) => {
  return (
    <Container className="grid md:grid-cols-3 gap-3">
      <Heading title="კოლექციები" />
      <CollectionsCard categories={categories} />
    </Container>
  );
};
