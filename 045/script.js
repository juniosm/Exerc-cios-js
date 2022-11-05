function desconto(x) {
  return x * 0.05;
}

function exibir() {
  let num1 = Number(document.getElementById("soma1").value);
  let resultado = document.querySelector("p");
  resultado.innerHTML = `<p>${desconto(num1)}</p>`;
}
