let dead = document.getElementById("dead");
let lost = document.getElementById("lost");
let deadMole = parseInt(dead.textContent);
let lostMole = parseInt(lost.textContent);

function getHole(index) {
  return document.getElementById("hole" + index);
}
for (let i = 1; i < 10; i++) {
  getHole(i).onclick = function () {
    if (this.className.includes("hole_has-mole")) {
      ++deadMole;
      dead.textContent = deadMole;
    } else {
      ++lostMole;
      lost.textContent = lostMole;
    }
    function endGame(result) {
      if (result === "win") {
        alert("Победа!");
      } else if (result === "lose") {
        alert("Проигрыш!");
      }
      dead.textContent = "0";
      lost.textContent = "0";
      deadMole = 0;
      lostMole = 0;
    }
    if (deadMole === 10) {
      endGame("win");
    } else if (lostMole === 5) {
      endGame("lose");
    }
  };
}
