function exibirSoma() {
  let num1 = Number(document.getElementById("soma1").value);
  let num2 = Number(document.getElementById("soma2").value);

  let resultado = document.querySelector("p");
  resultado.innerHTML = `<p>${num1 + num2}</p>`;
}
