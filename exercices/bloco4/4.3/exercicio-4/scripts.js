//1ª FORMA DE RESOLVER O EXERCÍCIO ///////////////////////////////////////////////////////////

let base = 6;
let asterisco = "*";
let espacoDireito = " ";
let espacoEsquerdo = " ";
let piramide = "";

if (base%2 !== 0){
  //este 'for' escreve a lógica que a piramide deve seguir para bases de valor impar, comecando com 1 estrela no topo (linha 1)
for (let linha = 1; linha <= base; linha += 2) {
    // printa os espacos em branco
    for (let colunasEsquerda = 1; colunasEsquerda <= base - linha; colunasEsquerda += 1) {
      piramide += espacoEsquerdo;
    }
    // printa a estrela
    for (let estrelas = 1; estrelas <= linha; estrelas += 1) {
      piramide += asterisco + espacoDireito;
    }
    piramide += "\n";
  }
  console.log(piramide);
} else {
  //este 'for' escreve a logica que a piramide deve seguir para bases de valor par, comecando com 2 estrelas no topo (linha 2)
  for (let linha = 2; linha <= base; linha += 2) {
    // printa os espacos em branco
    for (let colunasEsquerda = 1; colunasEsquerda <= base - linha; colunasEsquerda += 1) {
      piramide += espacoEsquerdo;
    }
    // printa a estrela
    for (let estrelas = 1; estrelas <= linha; estrelas += 1) {
      piramide += asterisco + espacoDireito;
    }
    piramide += "\n";
  }
  console.log(piramide);
}

//2ª FORMA DE RESOLVER O EXERCICIO /////////////////////////////////////////////////////////////

let base2 = 6;
let asterisco2 = "* ";
let espacoEsquerdo2 = " ";
let piramide2 = "";

for (let linhaEx2 = 1; linhaEx2 <= base2; linhaEx2 += 1) {
    // printa os espacos em branco à esquerda de cada linha
    for (let colunasEsquerdaEx2 = 1; colunasEsquerdaEx2 <= base2 - linhaEx2; colunasEsquerdaEx2 += 1) {
      piramide2 += espacoEsquerdo2;
    }
    // printa a estrela com espaço em branco
    for (let estrelasEx2 = 1; estrelasEx2 <= linhaEx2; estrelasEx2 += 1) {
      piramide2 += asterisco2;
    }
    piramide2 += "\n";
  }
  console.log(piramide2);



