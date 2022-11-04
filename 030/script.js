let click = document.querySelector("button");

click.addEventListener("click", () => {
  let nome = document.getElementById("name").value;
  alert("Tamanho da palavra é: " + nome.length);
});
