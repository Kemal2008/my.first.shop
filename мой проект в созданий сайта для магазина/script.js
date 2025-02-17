document.addEventListener("DOMContentLoaded", () => {
  console.log("Страница загружена!");

  const products = [
      { name: "Смартфон Galaxy X", price: "49 990 тг", img: "img/phone.jpg" },
      { name: "Ноутбук UltraBook", price: "79 990 тг", img: "img/laptop.jpg" },
      { name: "Наушники BassPro", price: "9 990 тг", img: "img/headphones.jpg" },
      { name: "Смартфон Pixel 8", price: "59 990 тг", img: "img/phone.jpg" },
      { name: "Ноутбук ProBook 360", price: "85 000 тг", img: "img/laptop.jpg" },
      { name: "Наушники AudioX", price: "13 990 тг", img: "img/headphones.jpg" },
      { name: "Смартфон OnePlus 11", price: "79 990 тг", img: "img/phone.jpg" },
      { name: "Ноутбук Gaming Pro", price: "120 000 тг", img: "img/laptop.jpg" },
      { name: "Наушники SoundMax", price: "17 500 тг", img: "img/headphones.jpg" }
  ];

  const productsContainer = document.querySelector(".products__list");

  function renderProducts() {
      productsContainer.innerHTML = "";
      products.forEach(product => {
          const productElement = document.createElement("div");
          productElement.classList.add("product");
          productElement.innerHTML = `
              <img src="${product.img}" alt="${product.name}">
              <p>${product.name}</p>
              <span>${product.price}</span>
              <button>В корзину</button>
          `;
          productsContainer.appendChild(productElement);
      });
  }

  renderProducts();
});
