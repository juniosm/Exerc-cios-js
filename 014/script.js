let res = document.querySelector("p");
let agora = new Date();

function clicou() {
  res.innerHTML = `O que eu recebi do sistema foi ${agora}`;
}
