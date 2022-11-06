let aleatorio = Math.trunc(Math.random() * (1, 100));
function clicou() {
  let num = Number(document.getElementById("num").value);
  num === aleatorio ? alert("Acertou") : alert("Tente Novamente");
}
