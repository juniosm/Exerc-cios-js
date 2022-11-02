function clicou() {
  let res = document.querySelector("p");
  let val = Number(document.getElementById("valor").value);
  for (let i = 0; i <= val; i++) {
    res.innerHTML += `${i} &#x1F449`;
  }
  res.innerHTML += `&#x1F3C1`;
}
