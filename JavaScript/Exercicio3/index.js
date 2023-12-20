let metros = parseFloat(
  prompt("Digite o valor que deseja converter em metros: ")
);
let setMenu = parseFloat(
  prompt(
    "Digite a opção desejada para a conversão: \n1-Milímetros(mm)\n2-Centímetro(cm)\n3-Decímetro(dm)\n4-Decâmetro\n5-Hettômetro(hm)\n6-Quilômetro"
  )
);
switch (setMenu) {
  case 1:
    alert(
      metros + " Metros são equivalentes a: " + metros * 1000 + " Milímetros"
    );
    break;
  case 2:
    alert(
      metros + " Metros são equivalentes a: " + metros * 100 + " Centímetros"
    );
    break;
  case 3:
    alert(
      metros + " Metros são equivalentes a: " + metros * 10 + " Decímetros"
    );
    break;
  case 4:
    alert(
      metros + " Metros são equivalentes a: " + metros / 10 + " Decâmetros"
    );
    break;
  case 5:
    alert(
      metros + " Metros são equivalentes a: " + metros / 100 + " Hectômetros"
    );
    break;
  case 6:
    alert(
      metros + " Metros são equivalentes a: " + metros / 1000 + " Quilômetro"
    );
    break;

  default:
    alert("A opção escolhida é inválida!");
    break;
}
