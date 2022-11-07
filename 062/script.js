let palavras = [];

function clicou() {
  const lista = document.querySelector("ul");
  const pl = document.getElementById("palavra").value;

  palavras.push(pl);

  let i = palavras.indexOf(pl) + 1;

  if (i % 2 == 0) {
    lista.innerHTML += `<li><strong>${pl}</strong></li>`;
  } else {
    lista.innerHTML += `<li>${pl}</li>`;
  }
}
