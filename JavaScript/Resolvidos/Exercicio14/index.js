const media = (...args) => {
  return args.reduce((acum, num) => acum + num, 0) / args.length;
};

console.log(media(2, 6, 3, 7, 4));

const mediaPonderada = (...notasPesos) =>
  notasPesos.reduce((acum, { n, p }) => acum + n * (p ?? 1), 0) /
  notasPesos.reduce((acum, { p }) => acum + (p ?? 1), 0);

console.log(mediaPonderada({ n: 7, p: 2 }, { n: 9, p: 5 }, { n: 3, p: 1 }));

const mediana = (...numbers) => {
  const ordenedNumbers = [...numbers].sort((a, b) => a - b);
  const middle = Math.floor(ordenedNumbers.length / 2);
  if (ordenedNumbers.length % 2 !== 0) {
    return ordenedNumbers[middle];
  } else {
    return media(ordenedNumbers[middle - 1], ordenedNumbers[middle]);
  }
};

console.log(mediana(2, 4, 5, 7, 42, 99));

const moda = (...numbers) => {
  const quantidade = numbers.map((num) => [
    num,
    numbers.filter((n) => num === n).length,
  ]);
  quantidade.sort((a, b) => b[1] - a[1]);
  return quantidade[0][0];
};

console.log(moda(1, 1, 5, 4, 9, 7, 4, 3, 5, 2, 4, 0, 4));
