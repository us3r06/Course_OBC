let option = "";
let vagas = [];

function listarVagas() {
  const vagasEmTexto = vagas.reduce((textoFinal, vaga, indice) => {
    textoFinal += indice + ". ";
    textoFinal += vaga.nome;
    textoFinal += " (" + vaga.candidatos.length + " candidatos)\n";
    return textoFinal;
  }, "");
  alert(vagasEmTexto);
}
function cadastrarCandidato() {
  const candidato = prompt("Digite o nome do candidato:");
  const indice = prompt("Digite o índice da vaga: ");
  const vaga = vagas[indice];
  const confirmacao = confirm(
    "Deseja inscrever o candidato: " +
      candidato +
      " na vaga: " +
      indice +
      " nome: " +
      vaga.nome +
      " Descrição: " +
      vaga.descricao +
      " Data Limite: " +
      vaga.dataLimite
  );
  if (confirmacao) {
    vaga.candidatos.push(candidato);
    alert("Candidato cadastrado com sucesso");
  } else {
    alert("Candidato descartado");
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
function criarVaga() {
  const nome = prompt("Informe o nome da vaga a ser criada: ");
  const descricao = prompt("Informe a descrição da vaga a ser criada: ");
  const dataLimite = prompt(
    "Informe a data limite da vaga no formato dd/mm/aaaa"
  );
  const confirmacao = confirm(
    "Deseja criar uma nova vaga com essas informações?\n" +
      "Nome: " +
      nome +
      "\nDescrição: " +
      descricao +
      "\nData limite: " +
      dataLimite
  );

  if (confirmacao) {
    const novaVaga = { nome, descricao, dataLimite, candidatos: [] };
    vagas.push(novaVaga);
    alert("Vaga criada.");
  } else {
    aleSArt("A vaga foi descartada...");
  }
}
function exibirVaga() {
  const indice = prompt("Digite o indice da vaga a qual você deseja exibir: ");
  if (indice >= vagas.length || indice < 0) {
    alert("Erro, índice inválido.");
    return;
  }
  const vaga = vagas[indice];
  const candidatosEmTexto = vaga.candidatos.reduce(function (
    textoFinal,
    candidatos
  ) {
    return textoFinal + "\n - " + candidatos;
  });
  alert(
    "Vaga Nº " +
      indice +
      "\nNome: " +
      vaga.nome +
      "\nDescrição: " +
      vaga.descricao +
      "\nData Limite: " +
      vaga.dataLimite +
      "\nQuantidade de canditados: " +
      vaga.candidatos.length +
      "\nCandidatos Inscritos: " +
      candidatosEmTexto
  );
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
