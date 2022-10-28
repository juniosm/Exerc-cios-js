const res = document.querySelector("p");

function clicou() {
  let num1 = Number(prompt("Qual o número?"));
  let num2 = Number(prompt("Qual o outro número?"));

  if (num1 > num2) {
    res.innerHTML = `<p>Analisando os valores ${num1} e ${num2}, o maior valor é ${num1}</p>`;
  } else if (num1 < num2) {
    res.innerHTML = `<p>Analisando os valores ${num1} e ${num2}, o maior valor é ${num2}</p>`;
  } else {
    res.innerHTML = `<p>Analisando os valores ${num1} e ${num2}, eles são iguais</p>`;
  }
}
