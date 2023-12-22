const media = (...args) => {
  return args.reduce((a, b) => a + b) / args.length;
};

console.log(media(2, 6, 3, 7, 4));

const mediaPonderada = (...notasPesos) =>
  notasPesos.reduce((acum, { n, p }) => acum + n * p, 0) /
  notasPesos.reduce((acum, { p }) => acum + p, 0);

console.log(mediaPonderada({ n: 7, p: 2 }, { n: 9, p: 5 }, { n: 3, p: 1 }));
