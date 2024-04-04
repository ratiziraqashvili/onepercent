import { Collections } from "@/components/collections";
import { Container } from "@/components/container";
import { client } from "@/sanity/lib/client";
import { Categories } from "@/types";
import { groq } from "next-sanity";

const CollectionsPage = async () => {
  const categories = await client.fetch<
    Categories[]
  >(groq`*[_type == "category"] {
    _id,
    image,
    name
  }`);

  return (
    <Container>
      <Collections categories={categories} />
    </Container>
  );
};

export default CollectionsPage;
