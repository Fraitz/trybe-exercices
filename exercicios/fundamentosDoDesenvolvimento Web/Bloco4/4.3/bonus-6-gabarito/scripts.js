let base = 8;
let meioPiramide = (base + 1) / 2;
let meioPiramideParMenor = base/2;
let meioPiramideParMaior = (base +2)/2;
let colunaImpressaoDireita = meioPiramide;
let colunaImpressaoEsquerda = meioPiramide;
let colunaImpressaoEsquerdaPar = meioPiramideParMenor;
let colunaImpressaoDireitaPar = meioPiramideParMaior;
let asterisco = '*';
let linhaImpressao = "";

if (base%2 !== 0){
    for (let linhaAtual = 1; linhaAtual <= meioPiramide; linhaAtual += 1) {
    linhaImpressao = '';
    for (let colunaAtual = 1; colunaAtual <= base; colunaAtual += 1) {
        if (colunaAtual == colunaImpressaoDireita || colunaAtual == colunaImpressaoEsquerda || linhaAtual == meioPiramide) {
        linhaImpressao += asterisco;
        } else {
        linhaImpressao += ' ';
        }
    }
    colunaImpressaoDireita -= 1;
    colunaImpressaoEsquerda += 1;
    console.log(linhaImpressao);
    }
} else {
    for (let linhaAtual = 0; linhaAtual < meioPiramideParMaior; linhaAtual += 1) {
        for (let colunaAtual = 0; colunaAtual <= base; colunaAtual += 1) {
          if (colunaAtual > colunaImpressaoEsquerdaPar && colunaImpressaoEsquerdaPar == 1 && colunaAtual < colunaImpressaoDireitaPar && colunaImpressaoDireitaPar == base) {
              linhaImpressao += asterisco;
          }
              else if (colunaAtual == colunaImpressaoEsquerdaPar && colunaImpressaoEsquerdaPar > 0 || colunaAtual == colunaImpressaoDireitaPar) {
            linhaImpressao += asterisco;
    
          } else {
            linhaImpressao += ' ';
          }
        }
        console.log(linhaImpressao);
        linhaImpressao = '';
        colunaImpressaoDireitaPar += 1;
        colunaImpressaoEsquerdaPar -= 1
      }
}