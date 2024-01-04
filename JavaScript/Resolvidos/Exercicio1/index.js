let nome = prompt("Digite o Seu primeiro Nome: ");
let sobrenome = prompt("Digite o seu Sobrenome: ");
let campoDeEstudo = prompt("Digite o seu campo de estudo: ");
let anoNasc = parseFloat(prompt("Digite o seu ano de nascimento: "));
anoNasc = 2023 - anoNasc;
alert(
  "Nome: " +
    nome +
    " " +
    sobrenome +
    "\nCampo de estudo: " +
    campoDeEstudo +
    "\nIdade: " +
    anoNasc
);
