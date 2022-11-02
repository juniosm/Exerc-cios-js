function clicou() {
  let res = document.querySelector("p");
  let num = Number(document.getElementById("num").value);

  let cont = 1;
  while (cont <= 10) {
    res.innerHTML += `<p> ${num} x ${cont} = <strong> ${num * cont} </strong></p>`;
    cont++;
  }
}
