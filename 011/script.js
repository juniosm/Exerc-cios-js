const res = document.querySelector("p");
let nome = prompt("Qual o nome do aluno?");
let nota1 = Number(prompt("Qual a primeira nota?"));
let nota2 = Number(prompt("Qual a segunda nota?"));

let media = (nota1 + nota2) / 2;

res.innerHTML = `<p>Calculando a média final de ${nome}</p>
<p>As notas obtidas foram ${nota1} e ${nota2}</p>
<p>A média final será ${media}</p>`;

if (media > 6) {
  res.innerHTML += "<p><strong style ='color:green'>Meus Parabéns</strong></p>";
} else {
  res.innerHTML +=
    "<p><strong style ='color:red'>Nota abaixo da media</strong></p>";
}
