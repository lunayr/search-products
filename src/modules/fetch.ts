import { ProductsResults, Product } from "./types";

export async function getAllProducts(): Promise<ProductsResults> {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();
  return data;
}

export async function getProduct(id: number): Promise<Product> {
  const res = await fetch("https://dummyjson.com/products/" + id);
  const data = await res.json();
  return data;
}

export async function searchProducts(query: string): Promise<ProductsResults> {
  const res = await fetch("https://dummyjson.com/products/search?q=" + query);
  const data = await res.json();
  return data;
}
