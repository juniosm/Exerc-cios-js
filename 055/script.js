function clicou() {
  let frase = document.getElementById("frase").value.toUpperCase();
  let vr = frase.indexOf("DOTA");
  alert(vr >= 0 ? "Verdaderio" : "Falso");
}
