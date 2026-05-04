document.addEventListener("DOMContentLoaded", () => {
  const tabList = Array.from(document.querySelectorAll(".tab"));
  const contentList = Array.from(document.querySelectorAll(".tab__content"));

  const showTab = (i) => {
    tabList.forEach((t) => t.classList.remove("tab_active"));
    contentList.forEach((c) => (c.style.display = "none"));

    tabList[i].classList.add("tab_active");
    contentList[i].style.display = "block";
  };

  tabList.forEach((el, i) => {
    el.addEventListener("click", () => showTab(i));
  });
});
