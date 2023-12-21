const currentPlayer = document.querySelector(".currentPlayer");
let selected;
let player = "";
let globalPlayer = "";
const skins = ["X", "O"];
let jogadorAleatorio = Math.floor(Math.random() * 2);
player = skins[jogadorAleatorio];
console.log(player);

const positions = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

function init() {
  const player1 = document.getElementById("player1").value || "Jogador 1";
  const player2 = document.getElementById("player2").value || "Jogador 2";
  selected = [];
  let playerAtual = "";

  if (player === "X") {
    playerAtual = player1;
  } else {
    playerAtual = player2;
  }

  let jogadorDaVez = "Jogador da vez: " + player + " :" + playerAtual;
  currentPlayer.innerText = jogadorDaVez;
  globalPlayer = playerAtual;

  document.querySelectorAll(".game button").forEach((inputBtn) => {
    inputBtn.innerText = "";
    inputBtn.classList.remove("winner");
    inputBtn.addEventListener("click", newMove);
  });
}

document.getElementById("play").addEventListener("click", init);

function newMove(ev) {
  const index = ev.target.getAttribute("data-i");
  ev.target.innerText = player;
  ev.target.removeEventListener("click", newMove);
  selected[index] = player;
  player = player === "X" ? "O" : "X";
  if (player === "X") {
    globalPlayer = document.getElementById("player1").value || "Jogador 1";
  } else {
    globalPlayer = document.getElementById("player2").value || "Jogador 2";
  }
  const playerVez = "Jogador da vez: " + player + " :" + globalPlayer;
  currentPlayer.innerText = playerVez;

  checkWin();
}

function checkWin() {
  let playerLastMove = player === "X" ? "O" : "X";

  const items = selected
    .map((item, i) => [item, i])
    .filter((item) => item[0] === playerLastMove)
    .map((item) => item[1]);

  for (pos of positions) {
    if (pos.every((item) => items.includes(item))) {
      let playerWin;
      // Adiciona a classe "winner" com um pequeno atraso
      pos.forEach((index, i) => {
        setTimeout(() => {
          document.querySelector(`[data-i="${index}"]`).classList.add("winner");
        }, i * 200); // Atraso de 200 milissegundos entre cada adição de classe
      });

      if (playerLastMove === "X") {
        playerWin = document.getElementById("player1").value || "Jogador 1";
      } else {
        playerWin = document.getElementById("player2").value || "Jogador 2";
      }

      // Aguarda um pouco antes de exibir o alert
      setTimeout(() => {
        alert("O jogador: " + playerLastMove + " - " + playerWin + " Ganhou");
        init();
      }, (pos.length - 1) * 200 + 1000); // Atraso total antes do alert: último índice * 200 + 1000 (1 segundo)

      return;
    }
  }

  if (selected.filter((item) => item).length === 9) {
    alert("DEU EMPATE!");
    init();
    return;
  }
}
