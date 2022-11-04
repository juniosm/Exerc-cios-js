function exibir() {
  let cpf = document.getElementById("cpf").value;
  let exibir = document.querySelector("p");
  let ajuste = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");

  exibir.innerHTML = `<p>${ajuste}</p>`;
}
