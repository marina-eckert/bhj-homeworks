const elements = document.querySelectorAll(".reveal");

const isVisible = (el) => {
  const { top, left, bottom, right } = el.getBoundingClientRect();
  const h = window.innerHeight || document.documentElement.clientHeight;
  const w = window.innerWidth || document.documentElement.clientWidth;

  return top >= 0 && left >= 0 && bottom <= h && right <= w;
};

const onScroll = () => {
  elements.forEach((el) => {
    el.classList.toggle("reveal_active", isVisible(el));
  });
};

window.addEventListener("scroll", onScroll);

onScroll();
