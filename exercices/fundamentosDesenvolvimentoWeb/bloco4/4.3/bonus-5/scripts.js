let base = 8;
let meioPiramide = (base + 1)/2;
let meioPiramideParMenor = base/2;
let meioPiramideParMaior = (base +2)/2;
let asterisco = '*';
let linhaImpressao = '';
let colunaImpressaoEsquerda = meioPiramide;
let colunaImpressaoDireita = meioPiramide;
let colunaImpressaoEsquerdaPar = meioPiramideParMenor;
let colunaImpressaoDireitaPar = meioPiramideParMaior;

if (base%2 !== 0){
  for (let linhaAtual = 0; linhaAtual <= meioPiramide; linhaAtual += 1) {
    for (let colunaAtual = 0; colunaAtual <= base; colunaAtual += 1) {
      if (colunaAtual > colunaImpressaoEsquerda && colunaImpressaoEsquerda == 1 && colunaAtual < colunaImpressaoDireita && colunaImpressaoDireita == base) {
          linhaImpressao += asterisco;
      }
          else if (colunaAtual == colunaImpressaoEsquerda && colunaImpressaoEsquerda > 0 || colunaAtual == colunaImpressaoDireita) {
        linhaImpressao += asterisco;

      } else {
        linhaImpressao += ' ';
      }
    }

    
    console.log(linhaImpressao);
    linhaImpressao = '';
    colunaImpressaoDireita += 1;
    colunaImpressaoEsquerda -= 1
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