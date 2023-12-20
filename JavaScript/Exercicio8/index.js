let option = "";
let imoveis = [];
do {
  if (imoveis.length > 0) {
    option = prompt(
      " Imóveis cadastrados: " +
        imoveis.length +
        "\n\nEscolha uma das opções a seguir\n\n1-Cadastrar um Novo Imóvel\n2-Listar os Imóveis cadastrados\n3-Sair\n \nDigite a opção desejada: "
    );
  } else {
    option = prompt(
      "Não existem Imóveis cadastrados\n\nEscolha uma das opções a seguir\n\n1-Cadastrar um Novo Imóvel\n2-Listar os Imóveis cadastrados\n3-Sair\n \nDigite a opção desejada: "
    );
  }
  switch (option) {
    case "1":
      let imovel = {};
      imovel.proprietario = prompt("Qual o nome do propriétario do imóvel? \n");
      imovel.quartos = prompt("Quantos quartos o imóvel possui?\n");
      imovel.banheiros = prompt("Quantos banheiros a casa possui?\n");
      imovel.garagem = prompt("A casa Possui garagem? SIM/NÃO");
      imoveis.push(imovel);
      alert("Imóvel salvo!\nVoltando ao menu...");
      break;
    case "2":
      let listarImoveis = "";
      for (i = 0; i < imoveis.length; i++) {
        listarImoveis +=
          "Imóvel: " +
          (i + 1) +
          "\nPropríetário: " +
          imoveis[i].proprietario +
          "\nQuantidade de quartos: " +
          imoveis[i].quartos +
          "\nQuantidade de banheiros: " +
          imoveis[i].banheiros +
          "\nPossui Garagem: " +
          imoveis[i].garagem +
          "\n\n";
      }
      alert(listarImoveis);
      break;
    case "3":
      alert("Fechando programa...");
      break;
    default:
      alert("Opção Inválida, tente novamente");
      break;
  }
} while (option != "3");
