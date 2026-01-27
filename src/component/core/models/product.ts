// import { Brandss } from "../../pages/brands/brands";
import { Brandss } from './brands';

export interface Product {
  sold: number;
  images: string[];
  subcategory: Brandss[];
  ratingsQuantity: number;
  _id: string;
  title: string;
  slug: string;
  description: string;
  quantity: number;
  price: number;
  imageCover: string;
  category: Brandss;
  brand: Brandss;
  ratingsAverage: number;
  createdAt: string;
  updatedAt: string;
  id: string;
}

