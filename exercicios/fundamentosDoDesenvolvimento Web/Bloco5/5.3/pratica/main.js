const divUm = document.getElementById('divUm');
const divDois = document.getElementById('divDois');
const divTres = document.getElementById('divTres');
const input = document.getElementById('input');
const myWebpage = document.getElementById('mySpotrybefy');
const container = document.querySelector('.container');

/*
 Copie esse arquivo e edite apenas ele;
 Crie uma função que adicione a classe 'tech' ao elemento selecionado;
1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
 Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
com a classe 'tech';
 Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
redirecione para alguma página;
1. Que tal redirecionar para seu portifólio?
 Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
a cor do mesmo;

Segue abaixo um exemplo do uso de event.target:
*/
function addTech(event) {
  const atualTech = document.querySelector('.tech');
  if (event.target.id === 'divUm' || event.target.id === 'divDois' || event.target.id === 'divTres') {
    if (event.target.classList.contains('tech') == false) {
      event.target.classList.add('tech');
      atualTech.classList.remove('tech');
    }
  }
}

container.addEventListener('click', addTech);

function alteraTexto () {
  const elementTech = document.querySelector('.tech');
  elementTech.innerHTML = input.value;
}

input.addEventListener('keyup', alteraTexto)

function alteraCor (event) {
  event.target.style.color = 'orange';
}

function voltaCor (event) {
  event.target.style.color = 'white';
}

function goTo () {
  window.open('https://google.com', '_blank')
}

myWebpage.addEventListener ('mouseover', alteraCor);
myWebpage.addEventListener ('mouseleave', voltaCor);
myWebpage.addEventListener ('dblclick', goTo);

function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

divUm.addEventListener('dblclick', resetText);
// Não precisa passar o parâmetro dentro do addEventListener. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'divUm'.