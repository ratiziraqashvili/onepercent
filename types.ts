export type Product = {
  product_data: any;
  _id: string;
  sku: string;
  images: any;
  price: number;
  oldPrice: number;
  name: string;
  description: string;
  currency: string;
  slug: string;
  isOnSale: boolean | null;
  categories: string[];
  sizes?: string[];
  colors?: string[];
  }

  export type Categories = {
    _id: string;
    name: string;
    image: any;
  }