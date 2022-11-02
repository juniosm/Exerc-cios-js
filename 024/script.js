const res = document.querySelector("p");

function clicou() {
  for (let i = 10; i > 0; i--) {
    res.innerHTML += `${i} &#x1F449`;
  }
  res.innerHTML += `&#x1F3C1`;
}
