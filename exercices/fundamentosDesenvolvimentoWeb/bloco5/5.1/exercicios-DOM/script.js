// Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. 

let paragrafos = document.getElementsByTagName('p');

function alteraParagrafo(texto1, texto2, texto3) {
  paragrafos[0].innerText = texto1;
  paragrafos[1].innerText = texto2;
  paragrafos[2].innerText = texto3;
} 
alteraParagrafo("Eu me vejo Rico", "Rico pra caralho", "Stonks");

// Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).

let mainContent = document.getElementsByClassName('main-content');

function mudaCorMainContent(corTrybe) {
  mainContent[0].style.backgroundColor = corTrybe;
} 
mudaCorMainContent('rgb(76,164,109)');

// Crie uma função que mude a cor do quadrado vermelho para branco.

function mudaCenterContent(corBranca) {
  let centerContent = document.getElementsByClassName("center-content");
  centerContent[0].style.backgroundColor = corBranca;
} 
mudaCenterContent('white');

// Crie uma função que corrija o texto da tag <h1>.

function corrigeTitulo(tituloCorreto) {
  document.getElementsByClassName("title")[0].innerText = tituloCorreto;
}
corrigeTitulo("Exercicio 5.1 - JavaScript");

// Crie uma função que modifique todo o texto da tag <p> para maiúsculo.

function paragrafosMaiusculos(parametroTextual) {
  for (let i = 0; i < paragrafos.length; i += 1) {
     paragrafos[i].style.textTransform = parametroTextual;
    }
}
paragrafosMaiusculos('uppercase');

// Crie uma função que exiba o conteúdo de todas as tags <p> no console.

function exibeParagrafos() {
  for (let i = 0; i < paragrafos.length; i += 1) {
  console.log(paragrafos[i].textContent);
  }
}
exibeParagrafos ();
