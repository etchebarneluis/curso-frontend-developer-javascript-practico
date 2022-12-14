const email = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

const mobileIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");

const cartIcon = document.querySelector(".navbar-shopping-cart");
const aside = document.querySelector(".product-detail");

const cardsContainer = document.querySelector(".cards-container");

email.addEventListener("click", (event) => {
  desktopMenu.classList.toggle("inactive");
});

mobileIcon.addEventListener("click", (event) => {
  aside.classList.add("inactive");
  mobileMenu.classList.toggle("inactive");
});

cartIcon.addEventListener("click", (event) => {
  mobileMenu.classList.add("inactive");
  aside.classList.toggle("inactive");
});

const products = [];

products.push({
  name: "Bike",
  price: 120,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

products.push({
  name: "Bike",
  price: 120,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

products.push({
  name: "Bike",
  price: 120,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

products.push({
  name: "Bike",
  price: 120,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

products.forEach((product) => {
  const productCard = document.createElement("div");
  productCard.classList.add("product-card");

  const img = document.createElement("img");
  img.setAttribute("src", product.image);

  const productInfo = document.createElement("div");
  productInfo.classList.add("product-info");

  const productInfoDiv = document.createElement("div");

  const productPrice = document.createElement("p");
  productPrice.innerText = `$ ${product.price}`;

  const productName = document.createElement("p");
  productName.innerText = product.name;

  productInfoDiv.appendChild(productPrice);
  productInfoDiv.appendChild(productName);

  const productInfoFigure = document.createElement("figure");
  const productImgCart = document.createElement("img");

  productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg");

  productInfoFigure.appendChild(productImgCart);

  productInfo.appendChild(productInfoDiv);
  productInfo.appendChild(productInfoFigure);

  productCard.appendChild(img);
  productCard.appendChild(productInfo);

  cardsContainer.appendChild(productCard);
});
