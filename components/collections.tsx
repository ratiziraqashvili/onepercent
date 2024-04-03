import { Categories } from "@/types";
import { CollectionsCard } from "./collections-card";
import { Container } from "./container";
import { Heading } from "./heading";

interface CollectionsProps {
  categories: Categories[];
}

export const Collections = ({ categories }: CollectionsProps) => {
  return (
    <Container>
      <Heading title="კოლექციები" />
      <CollectionsCard categories={categories} />
    </Container>
  );
};
