let resultado = document.getElementById("resultado");

resultado.innerHTML += "<p>Repetição</p> -";

resultado.innerHTML += "<p>Repetição</p>  <p>Repetição</p> - ";

for (let i = 1; i <= 20; i++) {
  resultado.innerHTML += "<p>Repetição</p>";
}

resultado.innerHTML += "<p>-</p>";

const lista = [1, 2, 3, 4, 5];

lista.forEach((e) => {
  resultado.innerHTML += `<p>Repetição</p>`;
});

resultado.innerHTML += "<p>-</p>";

let cont = 1;

while (cont <= 5) {
  resultado.innerHTML += "<p>Repetição</p>";
  cont++;
}

resultado.innerHTML += "<p>-</p>";

let res = "";

do {
  cont++;
  res = "<p>Repetição</p>";
} while (cont <= 5);
