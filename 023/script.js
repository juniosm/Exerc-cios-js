const res = document.querySelector("p");

function clicou() {
  for (let i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
      res.innerHTML += `${i} &#x1F449`;
    }
  }
  res.innerHTML += `&#x1F3C1`;
}
