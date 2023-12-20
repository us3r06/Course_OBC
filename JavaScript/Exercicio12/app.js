let devs = [];

const save = document.getElementById("save");
const btnSave = document.createElement("button");
btnSave.id = "save";
btnSave.innerText = "Salvar";
save.appendChild(btnSave);

const form = document.getElementById("dev");
form.addEventListener("submit", function (ev) {
  ev.preventDefault();
  const nome = document.getElementById("name").value;
  const tecnologia = document.getElementById("tecnologia");

  const label = document.createElement("label");
  label.setAttribute("for", "tecn");
  label.innerText = "Tecnologia: ";
  tecnologia.appendChild(label);
  const campo = document.createElement("input");
  campo.type = "text";
  campo.classList.add("tecnInputs");
  tecnologia.appendChild(campo);

  const labelYears0a2 = document.createElement("label");
  labelYears0a2.setAttribute("for", "years");
  labelYears0a2.innerText = "0 a 2 anos: ";
  const campoYears0a2 = document.createElement("input");
  campoYears0a2.type = "radio";
  campoYears0a2.name = "years";
  campoYears0a2.classList.add("yearsInput");
  campoYears0a2.value = "0 a 2 anos";
  tecnologia.appendChild(campoYears0a2);
  tecnologia.appendChild(labelYears0a2);

  const labelYears3a4 = document.createElement("label");
  labelYears3a4.setAttribute("for", "years");
  labelYears3a4.innerText = " 3 a 4 anos: ";
  const campoYears3a4 = document.createElement("input");
  campoYears3a4.type = "radio";
  campoYears3a4.name = "years";
  campoYears0a2.classList.add("yearsInput");
  campoYears3a4.value = "3 a 4 anos";
  tecnologia.appendChild(campoYears3a4);
  tecnologia.appendChild(labelYears3a4);

  const labelYears5 = document.createElement("label");
  labelYears5.setAttribute("for", "years");
  labelYears5.innerText = " 5+ anos: ";
  const campoYears5 = document.createElement("input");
  campoYears5.type = "radio";
  campoYears5.name = "years";
  campoYears0a2.classList.add("yearsInput");
  campoYears5.value = "5+ anos";
  tecnologia.appendChild(campoYears5);
  tecnologia.appendChild(labelYears5);

  const br = document.createElement("br");
  tecnologia.appendChild(br);

  btnSave.addEventListener("click", () => {
    const tecnInputs = document.querySelectorAll(".tecnInputs"); // Corrigido
    const tec = tecnInputs[tecnInputs.length - 1].value;
    const yearsSelect = document.querySelector(
      'input[name="years"]:checked'
    ).value;
    salvar(nome, tec, yearsSelect);
  });
});

function salvar(nome, tec, years) {
  devs.push({
    nome: nome,
    tecnologia: tec,
    years: years,
  });
  console.log(devs);
}
