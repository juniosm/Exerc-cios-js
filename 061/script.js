function clicou() {
  const lista = document.querySelector("ul");
  const pl = document.getElementById("palavra").value;

  let palavras = [];

  palavras.push(pl);

  palavras.forEach((palavra) => {
    lista.innerHTML += `<li>${palavra}</li>`;
  });
}
