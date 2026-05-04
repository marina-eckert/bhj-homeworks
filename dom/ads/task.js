const items = document.querySelectorAll(".rotator__case");

let index = 0;

const switchItem = () => {
  const current = items[index];
  current.classList.remove("rotator__case_active");

  index = (index + 1) % items.length;

  const next = items[index];
  next.classList.add("rotator__case_active");

  next.style.color = next.dataset.color;

  const delay = Number(next.dataset.speed);
  setTimeout(switchItem, delay);
};

switchItem();
