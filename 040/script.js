function soma(x, y) {
  return x + y;
}

function exibirSoma() {
  let num1 = Number(document.getElementById("soma1").value);
  let num2 = Number(document.getElementById("soma2").value);
  let resultado = document.querySelector("p");
  resultado.innerHTML = `<p>${soma(num1, num2)}</p>`;
}
