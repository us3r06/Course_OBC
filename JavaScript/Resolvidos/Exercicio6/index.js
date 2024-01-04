let numero = parseFloat(
  prompt("Digite o número do qual deseja fazer a tabuada: ")
);
let resultado = "";
for (let i = 0; i <= 20; i++) {
  resultado += "- " + numero * i + "\n";
}
alert(resultado);
