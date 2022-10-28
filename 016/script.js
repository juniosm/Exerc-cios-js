const res = document.querySelector("p");
let ano = new Date();

function clicou() {
  let nas = Number(prompt("Qual o ano de nascimento?"));
  let idade = ano.getFullYear() - nas;

  res.innerHTML = `<p>Quem nasceu em ${nas} vai completar ${idade} anos em ${ano.getFullYear()}.</p>`;
}
