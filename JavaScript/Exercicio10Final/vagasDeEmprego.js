let vagas = [];
let option = "";
function criarVaga() {
  const nomeVaga = prompt("Informe o nome da vaga a ser criada: ");
  const descricaoVaga = prompt("informe a descrição da Vaga");
  const dataLimiteVaga = prompt("Informe a data limite da vaga (dd/mm/aaaa)");
  const confirmacao = confirm(
    "Você deseja criar a vaga: " +
      nomeVaga +
      "\nDescrição: " +
      descricaoVaga +
      "\nData Limite: " +
      dataLimiteVaga
  );
  if (confirmacao) {
    const novaVaga = {
      nome: nomeVaga,
      descricao: descricaoVaga,
      datalimite: dataLimiteVaga,
      candidatos: [],
    };
    vagas.push(novaVaga);
    alert("Vaga Criada.");
  } else {
    alert("A vaga foi descartada.");
  }
}
function cadastrarCandidato() {
  nomeCandidato = prompt("Informe o nome do candidato");
  indice = prompt("Informe o índice da vaga a qual deseja inscrevê-lo");
  if (indice >= vagas.length || indice < 0) {
    alert("Não existe vaga correspondente ao índice informado");
  } else {
    const vaga = vagas[indice];
    confirmacao = confirm(
      "Você deseja inscrever o candidato: " +
        nomeCandidato +
        "\nNa vaga: " +
        vaga.nome +
        "\nDescrição: " +
        vaga.descricao +
        "\nData limite" +
        vaga.datalimite
    );
    if (confirm) {
      vaga.candidatos.push(nomeCandidato);
      alert("Candidato cadastrado com sucesso.");
      console.log(vagas);
    } else {
      alert("O candidato foi descartado.");
    }
  }
}
function excluirVaga() {
  const indice = prompt("Digite o índice da vaga a qual deseja excluir: ");
  const vaga = vagas[indice];
  const confirmacao = confirm(
    "Tem certeza que deseja excluir a vaga " +
      indice +
      "?\n" +
      "Nome: " +
      vaga.nome +
      "\nDescrição: " +
      vaga.descricao +
      "\nData limite: " +
      vaga.dataLimite
  );
  if (confirmacao) {
    vagas.splice(indice, 1);
    alert("Vaga excluída com sucesso");
  }
}
function exibirVaga() {
  const indice = prompt("Digite o nome da vaga a qual voçê deseja exibir: ");
  if (indice >= vagas.length || indice < 0) {
    alert("Não existe vaga correspondente ao índice informado");
  } else {
    const vaga = vagas[indice];
    const candidatosTexto = vaga.candidatos.reduce(function (
      textoAcum,
      candidatos
    ) {
      textoAcum += candidatos + "\n";
      return textoAcum;
    },
    "");
    alert(
      "Vaga Nº " +
        indice +
        "\nNome: " +
        vaga.nome +
        "\nDescrição: " +
        vaga.descricao +
        "\nData Limite: " +
        vaga.datalimite +
        "\nQuantidade de canditados: " +
        vaga.candidatos.length +
        "\nCandidatos Inscritos: " +
        candidatosTexto
    );
  }
}
function listarVagas() {
  const textoFinal = vagas.reduce(function (textoAcum, vaga, indice) {
    textoAcum += indice + ". ";
    textoAcum += vaga.nome + "\nCandidatos cadastrados: ";
    textoAcum += vaga.candidatos.length;
    return textoAcum;
  }, "");
  alert(textoFinal);
}
function exibirMenu() {
  option = prompt(
    "Seja bem-vindo ao sistema de vagas de emprego!\n\nEscolha uma das opções a seguir:\n\n1-Listar vagas disponivéis\n2-Criar uma nova vaga\n3-Visualizar uma vaga\n4-Inscrever candidato em uma vaga\n5-Excluir uma vaga\n6-Sair"
  );
}
function executar() {
  do {
    exibirMenu();
    switch (option) {
      case "1":
        listarVagas();
        break;
      case "2":
        criarVaga();
        break;
      case "3":
        exibirVaga();
        break;
      case "4":
        cadastrarCandidato();
        break;
      case "5":
        excluirVaga();
        break;
      case "6":
        alert("Fechando o programa Vagas de Emprego...");
        break;
      default:
        alert("A opção digitada é inválida! Tente novamente: ");
        break;
    }
  } while (option !== "6");
}
executar();
