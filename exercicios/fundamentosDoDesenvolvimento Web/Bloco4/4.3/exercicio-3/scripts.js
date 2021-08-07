//PRIMEIRA FORMA DE RESOLVER O EXERCICIO

let base = 5;
let asterisco = "*";
let linhaTriangulo = "";
let esquerdoVazio = "";

for (let linha = 1; linha <= base; linha += 1) {
    linhaTriangulo += asterisco;
    for( let coluna = base; coluna > linhaTriangulo.length; coluna -= 1){
        esquerdoVazio += " ";
    }
    console.log(esquerdoVazio + linhaTriangulo);
    esquerdoVazio = "";
}   

//SEGUNDA FORMA DE RESOLVER O EXERCICIO

let colunaImpressao = base;
let linhaImpressao = "";

for (let linhas = 1; linhas <= base; linhas += 1) {
    for ( let colunaAtual = 1; colunaAtual <= base; colunaAtual += 1) {
    if (colunaAtual < colunaImpressao) {
             linhaImpressao += " ";
        } else {
             linhaImpressao += asterisco;
        }
    }
    console.log(linhaImpressao);
    linhaImpressao = "";
    colunaImpressao -= 1; 
}