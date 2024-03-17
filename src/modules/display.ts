import { Product } from "./types";

function createProductCard(product: Product): string | Node {
  const listItem = document.createElement("div");
  listItem.classList.add("product-card");
  
  listItem.innerHTML = `
  <img src="${product.images[0]}"/>
  <div class="info">
  <span class="category">${product.category}</span>
  <span class="title">${product.title}</span>
  <p class="description">${product.description}</p>
  </div>
  <div class="metadata">
  <div>
  <span class="rating">Rating: ${product.rating}</span>
  <span class="stock">Stock: ${product.stock}</span>
  </div>
  <button>Add to basket</button>
  </div>
  `;
  return listItem;
}

export function displayProducts(products: Product[]): void {
  const productList = document.getElementById("product-list");
  if (productList) {
    productList.innerHTML = "";

    productList.append(...products.map(createProductCard));
  }
}
