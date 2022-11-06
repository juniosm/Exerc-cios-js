let data = new Date();

const mes = [
  "Jan",
  "Fev",
  "Mar",
  "Abr",
  "Mai",
  "Jun",
  "Jul",
  "Ago",
  "Set",
  "Out",
  "Nov",
  "Dez",
];

function clicou() {
  alert(mes[data.getMonth() + 1]);
}
