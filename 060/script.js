let deuses = ["Aegir", "Aud", "Balder", "Bragi", "Búri", "Dag", "Dellingr"];

const lista = document.querySelector("ul");

deuses.forEach((deus) => {
  lista.innerHTML += `<li>${deus}</li>`;
});
