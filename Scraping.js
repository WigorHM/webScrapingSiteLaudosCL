let tabelaEsq = document.querySelector("#ztmGridConsultaLaudosEsq>tbody")
let laudo = document.querySelector("#ztmGridConsultaLaudosDir>tbody")
let tam = tabelaEsq.childNodes.length;

async function scrap(index = 1, tamanho){
    if(index == tamanho)return;
    tabelaEsq.childNodes[index]?.childNodes[2]?.click();
    await esperar(2000);
    
const tabela = laudo;
      const linhas = tabela.rows;
      let tabelaConsole = '';
      for (let i = 0; i < linhas.length; i++) {
        const celulas = linhas[i].cells;
        let linha = ' ';

        for (let j = 0; j < 4; j++) {
          linha += celulas[j].innerText + '  ';
        }
        tabelaConsole += linha + '\n';
       }
    console.log(`\n🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹\nRequisição: ${tabelaEsq?.childNodes[index]?.childNodes[2]?.textContent}\nNome: ${tabelaEsq?.childNodes[index]?.childNodes[3]?.textContent}\nIdade: ${tabelaEsq?.childNodes[index]?.childNodes[4]?.textContent}\nSexo: ${tabelaEsq?.childNodes[index]?.childNodes[5]?.textContent}\nEntrada: ${tabelaEsq?.childNodes[index]?.childNodes[6]?.textContent}\n`+tabelaConsole);
    scrap(index+1, tamanho);
}
scrap(1, tam);
function esperar(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}