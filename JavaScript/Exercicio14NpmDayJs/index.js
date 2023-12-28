const dayjs = require("dayjs");
const aniversary = "27/12/2001";

const partes = aniversary.split("/");
const dataObject = dayjs(`${partes[2]}-${partes[1]}-${partes[0]}`);
const hoje = dayjs();

function calcAniversary(dataObject, hoje) {
  const anos = hoje.diff(dataObject, "year");
  console.log(`Sua idade é de: ${anos} anos de idade`);
}
function proximoAniversario(dataObject, hoje) {
  let proximoAni = dataObject.set("year", hoje.year());
  if (hoje.isAfter(proximoAni)) {
    proximoAni = dayjs(proximoAni).add(1, "year");
  }
  console.log(
    `Data Do próximo aniversário: ${proximoAni.format("DD-MM-YYYY")}`
  );
  return proximoAni;
}
function distanciaProxAniver(proximoAniversario, hoje) {
  const diferencaDias = proximoAniversario.diff(hoje, "day") + 1;
  console.log(`Faltam ${diferencaDias} dias para o próximo aniversário`);
}
calcAniversary(dataObject, hoje);
const proximo = proximoAniversario(dataObject, hoje);
distanciaProxAniver(proximo, hoje);
