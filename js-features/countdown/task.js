"use strict";

let secondsLeft = Number(document.querySelector("#timer").textContent);

const toTimeString = (totalSeconds) => {
  const h = Math.floor(totalSeconds / 3600);
  const m = Math.floor((totalSeconds % 3600) / 60);
  const s = totalSeconds % 60;

  return [
    h.toString().padStart(2, "0"),
    m.toString().padStart(2, "0"),
    s.toString().padStart(2, "0"),
  ].join(":");
};

const tick = () => {
  if (secondsLeft <= 0) {
    clearInterval(intervalId);
    alert("Вы победили в конкурсе!");
    return;
  }

  secondsLeft -= 1;
  document.querySelector("#timer").textContent = toTimeString(secondsLeft);
};

const intervalId = setInterval(tick, 1000);
