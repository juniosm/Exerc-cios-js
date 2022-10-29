const res = document.querySelector("p");

function clicou() {
  const num = Math.trunc(Math.random() * (1, 100));
  res.innerHTML += `<p>Acabei de pensar no número ${num}</p>`;
}

function clicouLimpar() {
  res.innerHTML = `<p>Cada vez que você apertar o botão acima, eu penso em um número entre 1 e 100.</p>`;
}
