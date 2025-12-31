import { Brands } from "../../pages/brands/brands";

export interface Product {
  sold: number;
  images: string[];
  subcategory: Brands[];
  ratingsQuantity: number;
  _id: string;
  title: string;
  slug: string;
  description: string;
  quantity: number;
  price: number;
  imageCover: string;
  category: Brands;
  brand: Brands;
  ratingsAverage: number;
  createdAt: string;
  updatedAt: string;
  id: string;
}

