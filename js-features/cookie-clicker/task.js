"use strict";

const img = document.querySelector("#cookie");
const clicks = document.querySelector("#clicker__counter");

const toggleSize = () => {
  img.width = img.width === 200 ? 230 : 200;
};

img.addEventListener("click", () => {
  clicks.textContent = Number(clicks.textContent) + 1;

  toggleSize();

  setTimeout(() => {
    toggleSize();
  }, 100);
});
