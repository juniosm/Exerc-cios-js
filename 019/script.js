const res = document.querySelector("p");

function clicou() {
  let num1 = Number(prompt("Qual o primeiro valor?"));
  let num2 = Number(prompt("Qual o segundo valor?"));

  const operador = Number(
    prompt(
      `Qual a operação?
      [1]Somar
      [2]Subtrair
      [3]Multiplicar
      [4]Dividir`
    )
  );

  if (operador == 1) {
    relt = num1 + num2;
    res.innerHTML = `<p> ${num1} + ${num2} = ${relt}</p>`;
  } else if (operador == 2) {
    relt = num1 - num2;
    res.innerHTML = `<p> ${num1} - ${num2} = ${relt}</p>`;
  } else if (operador == 3) {
    relt = num1 * num2;
    res.innerHTML = `<p> ${num1} * ${num2} = ${relt}</p>`;
  } else if (operador == 4) {
    relt = num1 / num2;
    res.innerHTML = `<p> ${num1} / ${num2} = ${relt}</p>`;
  } else {
    res.innerHTML = `<p> Operação Invalida para ${num1} e ${num2} </p>`;
  }
}
