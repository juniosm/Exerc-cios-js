let anoAtual = new Date().getFullYear();

function exibir() {
  let anoNascimento = Number(document.getElementById("idade").value);
  let resultado = document.querySelector("p");
  let maiorIdade = anoAtual - anoNascimento;

  if (maiorIdade >= 18) {
    resultado.innerHTML = `<p>Maior de Idade</p>`;
  } else {
    resultado.innerHTML = `<p>Menor de Idade</p>`;
  }
}
