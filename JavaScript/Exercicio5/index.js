let option = 0;
do {
  option = parseFloat(
    prompt(
      "1 - opção\n2 - opção\n3 - opção\n4 - opção\n5 - Sair\nDigite a opção desejada: "
    )
  );
  if (option == 1) {
    alert("Opção 1");
  } else if (option == 2) {
    alert("Opção 2");
  } else if (option == 3) {
    alert("Opção 3");
  } else if (option == 4) {
    alert("Opção 4");
  }
} while (option != 5);
alert("Tchau brigado");
