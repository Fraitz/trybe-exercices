let base = 6;
let meioPiramide = (base + 1)/2;
let asterisco = '*';
let linhaImpressao = '';
let colunaImpressaoEsquerda = meioPiramide;
let colunaImpressaoDireita = meioPiramide;

for (let linhaAtual = 0; linhaAtual <= meioPiramide; linhaAtual += 1) {
  for (let colunaAtual = 0; colunaAtual <= base; colunaAtual += 1) {
    if (colunaAtual > colunaImpressaoEsquerda && colunaAtual < colunaImpressaoDireita) {
      linhaImpressao += asterisco;
    } else {
      linhaImpressao += ' ';
    }
  }
  console.log(linhaImpressao);
  linhaImpressao = '';
  colunaImpressaoDireita += 1;
  colunaImpressaoEsquerda -= 1
};