let option = "";
let cartas = [];
do {
  let fila = "";
  for (let i = 0; i < cartas.length; i++) {
    fila += cartas[i] + "\n";
  }
  option = prompt(
    "Baralho:\n" +
      fila +
      "\n\n1- puxar Carta\n2-Adicionar Carta\n3-Sair\n\nDigite a opção desejada)"
  );
  switch (option) {
    case "1":
      const cartapuxada = cartas.pop();
      if (cartapuxada) {
        alert(cartapuxada + " Foi a carta que você puxou");
        break;
      } else {
        alert("Não existem cartas na fila");
        break;
      }
    case "2":
      const cartaAdd = prompt("Digite a carta a ser Adicionada");
      cartas.unshift(cartaAdd);
      break;
    case "3":
      alert("Obrigado por usar nosso app");
      break;
    default:
      alert("A opção digitada é inválida");
      break;
  }
} while (option !== "3");
