document.querySelectorAll(".product__quantity-control_dec").forEach((e) => {
  e.addEventListener("click", (e) => {
    if (Number(e.target.nextElementSibling.textContent) >= 1) {
      e.target.nextElementSibling.textContent =
        Number(e.target.nextElementSibling.textContent) - 1;
    }
  });
});
document.querySelectorAll(".product__quantity-control_inc").forEach((e) => {
  e.addEventListener("click", (e) => {
    e.target.previousElementSibling.textContent =
      Number(e.target.previousElementSibling.textContent) + 1;
  });
});
const products = [];
document.querySelectorAll(".product").forEach((e) => {
  products.push(e);
});
document.querySelectorAll(".product__add").forEach((e) => {
  e.addEventListener("click", (e) => {
    const product = e.target.closest(".product");
    const productInCart = `<div class="cart__product" data-id="${product.getAttribute("data-id")}">
        <img class="cart__product-image" src="${e.target.closest(".product").firstElementChild.nextElementSibling.src}">
        <div class="cart__product-count">${e.target.previousElementSibling.firstElementChild.nextElementSibling.textContent}</div>
        </div>`;
    const card = [...document.querySelectorAll(".cart__product")];
    const dobleProduct = card.find(
      (element) =>
        element.getAttribute("data-id") == product.getAttribute("data-id"),
    );
    if (dobleProduct) {
      let count =
        Number(dobleProduct.lastElementChild.textContent.trim()) +
        Number(
          e.target.previousElementSibling.firstElementChild.nextElementSibling.textContent.trim(),
        );
      dobleProduct.lastElementChild.textContent = count;
    } else {
      if (document.querySelector(".cart__product")) {
        document
          .querySelector(".cart__product")
          .insertAdjacentHTML("afterend", productInCart);
      } else {
        document.querySelector(".cart__products").innerHTML = productInCart;
      }
    }
  });
});
