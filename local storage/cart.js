document.getElementById("btn").addEventListener("click", (e) => {
  e.preventDefault();
  const productEl = document.getElementById("product");
  const quantityEl = document.getElementById("quantity");
  const product = productEl.value;
  const quantity = parseInt(quantityEl.value);
  displayProduct(product, quantity);
  addProductToCart(product, quantity);

  productEl.value = "";
  quantityEl.value = "";
});
const displayProduct = (product, quantity) => {
  const newItems = document.createElement("li");
  newItems.innerText = `${product}: ${quantity}`;
  document.getElementById("cart-items").appendChild(newItems);
};

const getCart = () => {
  let cart = {};
  const cartJSON = localStorage.getItem("cart");
  if (cartJSON) {
    cart = JSON.parse(cartJSON);
  }
  return cart;
};
const addProductToCart = (product, quantity) => {
  const cart = getCart();

  if (cart[product]) {
    cart[product] = cart[product] + quantity;
  } else {
    cart[product] = quantity;
  }
  const cartJSON = JSON.stringify(cart);
  localStorage.setItem("cart", cartJSON);
};

const DisplayStoreProduct = () => {
  const cart = getCart();
  for (const product in cart) {
    const quantity = cart[product];
    displayProduct(product, quantity);
  }
};
DisplayStoreProduct();
