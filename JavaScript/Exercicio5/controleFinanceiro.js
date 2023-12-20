let dinheiro = parseFloat(prompt("Digite a quantidade inicial de dinheiro: "));
let option = 0;
do {
  option = parseFloat(
    prompt(
      "Seu saldo é de: " +
        dinheiro +
        "\n Deseja \n1-Adicionar dinheiro\n2-Remover dinheiro\n3-Sair\n Digite a opção desejada: "
    )
  );
  if (option == 1) {
    let adicionar = parseFloat(prompt("Quanto você deseja adicionar: "));
    dinheiro += adicionar;
  } else if (option == 2) {
    let remover = parseFloat(prompt("Quanto você deseja retirar: "));
    dinheiro -= remover;
  }
} while (option != 3);
alert("Obrigado por usar nosso programa, seu saldo é de: " + dinheiro + "R$");
