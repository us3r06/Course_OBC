let veiculo1 = prompt("Digite o nome do Primeiro Veiculo: ");
let velocidade1 = parseFloat(
  prompt("Digite a velocidade do primeiro veiculo: ")
);
let veiculo2 = prompt("Digite o nome do Segundo Veiculo: ");
let velocidade2 = parseFloat(
  prompt("Digite a velocidade do segundo veiculo: ")
);
if (velocidade1 == velocidade2) {
  alert("A velocidade dos veiculos são iguais!");
} else if (velocidade1 > velocidade2) {
  alert(
    veiculo1 +
      " Está " +
      (velocidade1 - velocidade2) +
      "km/h Mais Rápido que " +
      veiculo2
  );
} else {
  alert(
    veiculo2 +
      " Está " +
      (velocidade2 - velocidade1) +
      "km/h Mais Rápido que " +
      veiculo1
  );
}
