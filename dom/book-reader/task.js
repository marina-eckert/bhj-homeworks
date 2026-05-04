const sizeBtns = document.querySelectorAll(
  ".book__control_font-size .font-size",
);
const textBtns = document.querySelectorAll(".book__control_color .color");
const bgBtns = document.querySelectorAll(".book__control_background .color");
const content = document.querySelector(".book__content");

const setClass = (prefix, value, removeList) => {
  content.classList.remove(...removeList);
  content.classList.add(`${prefix}-${value}`);
};

const activate = (elements, activeClass, current) => {
  elements.forEach((el) => el.classList.remove(activeClass));
  current.classList.add(activeClass);
};

sizeBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();

    const size = btn.dataset.size;
    setClass("book_fs", size, ["book_fs-small", "book_fs-big"]);
    activate(sizeBtns, "font-size_active", btn);
  });
});

textBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();

    const color = btn.dataset.textColor;
    setClass("book_color", color, [
      "book_color-black",
      "book_color-gray",
      "book_color-whitesmoke",
    ]);
    activate(textBtns, "color_active", btn);
  });
});

bgBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();

    const color = btn.dataset.bgColor;
    setClass("book_bg", color, [
      "book_bg-black",
      "book_bg-gray",
      "book_bg-white",
    ]);
    activate(bgBtns, "color_active", btn);
  });
});
