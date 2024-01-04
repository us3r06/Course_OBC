import("./style/style.css");
alert("Sim, está funcionando");
document.getElementById("button").addEventListener("click", () => {
  alert("Clicou macho vei");
  document.body.style.backgroundColor = "#666";
});
