let palavra = prompt("Digite a palavra pra saber se é um palindromo: ");
let palavraInvertida = "";
for (let i = palavra.length - 1; i >= 0; i--) {
  palavraInvertida += palavra[i];
}
if (palavra === palavraInvertida) {
  alert(palavra + " é um palindrómo");
} else {
  alert(palavra + " Não é um palimdròmo");
}
