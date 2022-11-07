let contador = document.getElementById("contador");
let i = 5;

setInterval(() => {
  contador.innerHTML = `${i}`;
  i--;
  if (i === 0) {
    return (i = 5);
  }
}, 1000);
