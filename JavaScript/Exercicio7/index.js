let option = "";
let pacientes = [];
while (option !== 3) {
  let fila = "";
  for (let i = 0; i < pacientes.length; i++) {
    fila += i + 1 + " " + pacientes[i] + "\n";
  }
  option = parseFloat(
    prompt(
      "Fila de espera:\n" +
        fila +
        "\n\n1- Consultar Paciente(Será removido o primeiro da fila)\n2-Adicionar paciente(Será adicionado ao fim da fila)\n3-Sair\n\nDigite a opção desejada)"
    )
  );
  switch (option) {
    case 1:
      const pacienteConsultado = pacientes.shift();
      if (pacienteConsultado) {
        alert(pacienteConsultado + " Foi consultado com sucesso");
        break;
      } else {
        alert("Não existem pacientes na fila");
        break;
      }
    case 2:
      const pacienteAdd = prompt("Digite o nome do Paciente a ser Adicionado");
      pacientes.push(pacienteAdd);
      break;
    case 3:
      alert("Obrigado por usar nosso app");
      break;
    default:
      alert("A opção digitada é inválida");
      break;
  }
}
