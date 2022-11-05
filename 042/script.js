function resto(x, y) {
  if (x && y) {
    return x % y;
  } else {
    return 0;
  }
}

function exibirResto() {
  let num1 = Number(document.getElementById("soma1").value);
  let num2 = Number(document.getElementById("soma2").value);
  let resultado = document.querySelector("p");
  resultado.innerHTML = `<p>${resto(num1, num2)}</p>`;
}
