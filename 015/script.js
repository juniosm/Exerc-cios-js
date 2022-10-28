const res = document.querySelector("p");
let meses = new Array(
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
  "Dez"
);
let semana = new Array("Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb");
let dataAtual = new Date();

function clicou() {
  res.innerHTML = `<p>Dia: ${dataAtual.getDate()} </p>
  <p>Mês: ${meses[dataAtual.getMonth()]} </p>
  <p>Ano: ${dataAtual.getFullYear()} </p>
  <p>Dia da Semana: ${semana[dataAtual.getDay()]} </p>
  <p>Hora: ${dataAtual.getHours()} </p>
  <p>Minutos: ${dataAtual.getMinutes()} </p>
  <p>Segundos ${dataAtual.getSeconds()} </p>`;
}
