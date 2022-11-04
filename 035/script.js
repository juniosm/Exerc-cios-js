function exibir() {
  let cpf = document.getElementById("cpfPoint").value;
  let exibir = document.querySelector("p");
  let ajuste = cpf.replace(/\D/g, "");

  exibir.innerHTML = `<p>${ajuste}</p>`;
}
