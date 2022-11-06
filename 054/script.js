let resultado = document.getElementById("resultado");

for (let i = 1; i <= 10; i++) {
  for (let j = 1; j <= 10; j++) {
    resultado.innerHTML += `<p>${i} X ${j} = ${i * j}</p>`;
  }
}
