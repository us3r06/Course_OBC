const nota1 = parseFloat(prompt("Digite a nota da primeira prova: "));
const nota2 = parseFloat(prompt("Digite a nota da segunda prova: "));
const optativa = parseFloat(
  prompt("Digite a nota da prova optativa, se não tiver digite -1: ")
);
const consultOptativa = (nota1, nota2, optativa) => {
  if (optativa === -1) {
    return (nota1 + nota2) / 2;
  } else {
    if (optativa > nota1) {
      return (nota2 + optativa) / 2;
    } else if (optativa > nota2) {
      return (nota1 + optativa) / 2;
    } else {
      return (nota1 + nota2) / 2;
    }
  }
};
const media = consultOptativa(nota1, nota2, optativa);

const verificaNota = (media) => {
  if (media >= 6) {
    alert(`Sua media foi: ${media} Você foi aprovado, parabens!!`);
  } else if (media >= 3 && media < 6) {
    alert(
      `Sua media foi: ${media} Você está classificado para o exame final, boa sorte!`
    );
  } else {
    alert(`Sua media foi: ${media} Você foi reprovado, tente novamente`);
  }
};

verificaNota(media);

//testando endcadeamento opcional
const encadeamento = () => {
  const pessoa = {
    nome: "João",
    andress: {
      street: "Rua nova",
    },
  };
  console.log(pessoa.andress.street?.number ?? 432);
};
encadeamento();
