function clicou() {
  let res = document.querySelector("p");
  let vali = Number(document.getElementById("valori").value);
  let valf = Number(document.getElementById("valorf").value);

  while (vali <= valf) {
    res.innerHTML += `${vali} &#x1F449`;
    vali++;
  }
  res.innerHTML += `&#x1F3C1`;
}
