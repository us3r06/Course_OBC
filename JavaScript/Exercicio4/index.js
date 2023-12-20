const nome = prompt("Digite o nome do turista: ");
let option = prompt("Você já visitou alguma cidade? \nSim ou Não");
let cidade = "";
let count = 0;
while (option != "Não") {
  cidade += prompt("Digite o nome da cidade") + "\n";
  count += 1;
  option = prompt("Você visitou mais alguma cidade?");
}
alert(
  "O turista " + nome + " Visitou " + count + " cidades que foram: \n" + cidade
);
