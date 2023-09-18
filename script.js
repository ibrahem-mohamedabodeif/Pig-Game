let dice = document.querySelector("img");
let rollBtn = document.querySelector(".btn--roll");
let current0 = document.querySelector(".player--0 .current-score");
let current1 = document.querySelector(".player--1 .current-score");
let score0 = document.querySelector(".player--0 .score");
let score1 = document.querySelector(".player--1 .score");
let player0 = document.querySelector(".player--0");
let player1 = document.querySelector(".player--1");
let newGame = document.querySelector(".btn--new");

let score00 = 0;
let score11 = 0;
let playing = true;
dice.classList.add("hidden");

rollBtn.addEventListener("click", () => {
  if (playing) {
    dice.classList.remove("hidden");
    let diceNum = Math.trunc(Math.random() * 6) + 1;
    dice.src = `dice-${diceNum}.png`;
    player0.classList.toggle("player--active");
    player1.classList.toggle("player--active");
    if (player0.classList.contains("player--active")) {
      current0.textContent = `${diceNum}`;
      score00 += diceNum;
      score0.textContent = `${score00}`;
    } else {
      current1.textContent = `${diceNum}`;
      score11 += diceNum;
      score1.textContent = `${score11}`;
    }
    if (score00 >= 20) {
      playing = false;
      player0.classList.add("player--winner");
    }
    if (score11 >= 20) {
      playing = false;
      player1.classList.add("player--winner");
    }
  }
});

newGame.addEventListener("click", () => {
  score0.textContent = 0;
  score1.textContent = 0;
  current0.textContent = 0;
  current1.textContent = 0;
  dice.classList.add("hidden");
  player0.classList.remove("player--winner");
  player1.classList.remove("player--winner");
  player0.classList.add("player--active");
  player1.classList.remove("player--active");
  playing = true;
  score00 = 0;
  score11 = 0;
});
