const res = document.querySelector("p");
let num = Number(prompt("Qual a primeira nota?"));

let par = num % 2;

if (par === 0) {
  res.innerHTML = `O número ${num} que foi digitado é <strong>PAR</strong>!</p>`;
} else {
  res.innerHTML = `O número ${num} que foi digitado é <strong>IMPAR</strong>!</p>`;
}
