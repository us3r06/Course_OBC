let atacante = prompt("Digite o nome do personagem que vai atacar: ");
let poderAtaque = parseFloat(prompt("Digite o seu poder de ataque: "));
let defensor = prompt("Digite o nome do personagem a ser atacado: ");
let danoCausado = 0;
let pontosDeVida = parseFloat(
  prompt("Digite os pontos de vida do personagem: ")
);
let poderDefesa = parseFloat(
  prompt("Digite o poder de defesa do personagem: ")
);
let escudo = prompt("O pernonagem atacado possui escudo: ");
if (escudo == "Sim" || (escudo == "sim" && poderDefesa < poderAtaque)) {
  danoCausado += (poderAtaque - poderDefesa) / 2;
} else if (poderAtaque > poderDefesa) {
  danoCausado += poderAtaque - poderDefesa;
} else if (poderAtaque < poderDefesa) {
  danoCausado += 0;
}
alert("O dano causado foi de " + danoCausado + " Pontos de vida!");
alert(defensor + " Ainda possui: " + (pontosDeVida - danoCausado) + " de vida");
