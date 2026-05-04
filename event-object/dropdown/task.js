const items = document.querySelectorAll(".dropdown");

const handleSelect = (e) => {
  e.preventDefault();

  const list = e.target.closest(".dropdown__list");
  const root = list.closest(".dropdown");
  const valueEl = root.querySelector(".dropdown__value");

  valueEl.textContent = e.target.textContent.trim();
  list.classList.remove("dropdown__list_active");
};

items.forEach((item) => {
  const valueEl = item.querySelector(".dropdown__value");
  const listEl = item.querySelector(".dropdown__list");

  valueEl.addEventListener("click", () => {
    listEl.classList.toggle("dropdown__list_active");
  });

  listEl.addEventListener("click", (e) => {
    const link = e.target.closest(".dropdown__link");
    if (!link) return;

    handleSelect(e);
  });
});
