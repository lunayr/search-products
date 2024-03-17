import { displayProducts } from "./modules/display";
import { getAllProducts, searchProducts } from "./modules/fetch";


const searchForm: HTMLFormElement = document.getElementById(
  "searchForm"
) as HTMLFormElement;

const inputProduct: HTMLInputElement = document.getElementById(
  "inputProduct"
) as HTMLInputElement;

getAllProducts().then((data) => {
  displayProducts(data.products);
});

searchForm.addEventListener("submit", handleSearch);

function handleSearch(event: SubmitEvent) {
  event.preventDefault();
  const query = inputProduct?.value;
  searchProducts(query).then((data) => {
    displayProducts(data.products);
  });
  inputProduct.value = "";
}

//, Name: ${product.title}, des: ${product.description}
