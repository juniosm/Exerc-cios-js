const res = document.querySelector("p");

function clicou() {
  const mes = prompt("Qual o mês atual?(Ex: Abril)");
  let estacao = 'indefinida'
  switch(mes.toUpperCase()){
    case 'JANEIRO': case 'FEVEREIRO': case 'MARÇO':
      estacao = "VERÃO"
      break;
      
    case 'ABRIL': case 'MAIO': case 'JUNHO':
      estacao = "OUTONO"
      break;
    
    case 'JULHO': case 'AGOSTO': case 'SETEMBRO':
      estacao ="INVERNO"
      break;

    case 'OUTUBRO': case 'NOVEMBRO': case 'DEZEMBRO':
      estacao ="PRIMAVERA"
      break; 
  }
  res.innerHTML = `<p> No mês de ${mes}, estamos na estação ${estacao}. </p>`
}
