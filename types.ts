export type Product = {
  _id: string;
  sku: string;
  images: any;
  price: number;
  name: string;
  description: string;
  currency: string;
  slug: string;
  categories: string[];
  sizes?: string[];
  colors?: string[];
  }