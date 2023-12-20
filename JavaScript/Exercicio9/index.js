let option = "";
function areadotriangulo(baset, alturat) {
  return (baset * alturat) / 2;
}
function areadoretangulo(baser, alturar) {
  return baser * alturar;
}
function areatrapezio(baseMaior, baseMenor, alturaTrapezio) {
  return ((baseMaior + baseMenor) * alturaTrapezio) / 2;
}
do {
  option = prompt(
    "Calculadora Geométrica\nEscolha uma das opções a seguir\n1-Calcular área do triângulo\n2-Calcular área do retângulo\n3-Calcular área do quadrado\n4-Calcular área do trapézio\n5-Calcular área do círculo\n6-Sair"
  );
  switch (option) {
    case "1":
      let baset = parseFloat(prompt("Qual o comprimento da base em cm? "));
      let alturat = parseFloat(prompt("Qual o comprimento da altura em cm?"));
      alert(
        "A área do triângulo é: " + areadotriangulo(baset, alturat) + "cm²"
      );
      break;
    case "2":
      let baser = parseFloat(prompt("Qual o comprimento da base em cm? "));
      let alturar = parseFloat(prompt("Qual o comprimento da altura em cm?"));
      alert(
        "A área do retângulo é: " + areadoretangulo(baser, alturar) + "cm²"
      );
      break;
    case "3":
      let ladoq = parseFloat(
        prompt("Qual o comprimento de um lado do quadrado?")
      );
      alert("A área do quadrado é: " + Math.pow(ladoq, 2) + "cm²");

      break;
    case "4":
      let baseMaior = parseFloat(
        prompt("Qual o comprimento em cm da base maior?")
      );
      let baseMenor = parseFloat(
        prompt("Qual o comprimento em cm da base menor?")
      );
      let alturaTrapezio = parseFloat(
        prompt("Qual o comprimento da altura em cm?")
      );
      alert(
        "A área do trapézio é: " +
          areatrapezio(baseMaior, baseMenor, alturaTrapezio) +
          "cm²"
      );
      break;
    case "5":
      let raioCirculo = parseFloat(prompt("Digite o raio do circulo em cm"));
      alert("A área do Circulo é: " + Math.pow(raioCirculo, 2) * 3.14 + "cm²");
      break;
    case "6":
      alert("Encerrando a Calculadora Geométrica...");
      break;

    default:
      alert("Opção inválida, tente novamente!");
      break;
  }
} while (option != "6");
