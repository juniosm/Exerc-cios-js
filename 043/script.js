function impaPar(x) {
  if (x % 2 == 0) {
    return "Par";
  } else {
    return "Impar";
  }
}

function exibir() {
  let num1 = Number(document.getElementById("soma1").value);
  let resultado = document.querySelector("p");
  resultado.innerHTML = `<p>${impaPar(num1)}</p>`;
}
