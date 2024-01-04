function escalation() {
  const escalatedTd = document.getElementById("escalated");
  const name = document.getElementById("name").value;
  const position = document.getElementById("position").value;
  const number = document.getElementById("number").value;

  const confirmacao = confirm(
    "Você deseja escalar o jogador: " +
      name +
      " Posição: " +
      position +
      " Número: " +
      number
  );
  if (confirmacao) {
    const tr = document.createElement("tr");
    tr.id = "player-" + number;
    const nametd = document.createElement("td");
    nametd.innerText = name;
    const positiontd = document.createElement("td");
    positiontd.innerText = position;
    const numbertd = document.createElement("td");
    numbertd.innerText = number;
    tr.appendChild(nametd);
    tr.appendChild(positiontd);
    tr.appendChild(numbertd);
    escalatedTd.appendChild(tr);

    document.getElementById("position").value = "";
    document.getElementById("name").value = "";
    document.getElementById("number").value = "";
  } else {
    alert("Jogador Descartado");
  }
}
function removePlayer() {
  const number = document.getElementById("numberToRemove").value;
  const playerToRemove = document.getElementById("player-" + number);
  const confirmation = confirm(
    "Remover o jogador " + playerToRemove.innerText + "?"
  );

  if (confirmation) {
    document.getElementById("escalated").removeChild(playerToRemove);
    document.getElementById("numberToRemove").value = "";
  }
}
