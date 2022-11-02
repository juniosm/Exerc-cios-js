function clicou() {
  let res = document.querySelector("p");
  let num = Number(document.getElementById("num").value);

  let acum = 1;
  while (num >= 1) {
    acum = acum * num;
    if (num !== 1) {
      res.innerHTML += `${num} x `;
    } else {
      res.innerHTML += `${num}`;
    }
    num--;
  }
  res.innerHTML += ` = ${acum}`;
}
