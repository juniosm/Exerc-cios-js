const res = document.querySelector("p");
const num = Math.trunc(Math.random() * (1, 100));

function clicou() {
  const escolhido = Number(prompt("Qual é o número?"));

  if (num > escolhido) {
    res.innerHTML = `<p> Você falou ${escolhido}. Meu número é <strong>Maior</strong>!</p>`;
  } else if (num < escolhido) {
    res.innerHTML = `<p> Você falou ${escolhido}. Meu número é <strong>Menor</strong>!</p>`;
  } else {
    res.innerHTML = `<p> Você falou ${escolhido}. <strong>Parabéns!!!</strong> você acertou!</p>`;
  }
}
