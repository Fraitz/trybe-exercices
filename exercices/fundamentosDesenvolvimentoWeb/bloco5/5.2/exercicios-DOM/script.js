
// 1 Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body ;

let body = document.querySelector('body');

let bodyFirstTitle = document.createElement('h1');
bodyFirstTitle.className = 'Titulo';
bodyFirstTitle.innerText = 'Exercício 5.2 - JavaScript DOM';

body.appendChild(bodyFirstTitle);


// 2 Adicione a tag div com a classe main-content como filho da tag body ;

let divOne = document.createElement('div');
divOne.className = 'main-content';

body.appendChild(divOne);

// 3 Adicione a tag div com a classe center-content como filho da tag div criada no passo 2;

let divCenter = document.createElement('div');
divCenter.className = 'center-content';

divOne.appendChild(divCenter);

// 4 Adicione a tag p como filho do div criado no passo 3 e coloque algum texto;

let paragrafo = document.createElement('p');
paragrafo.innerHTML = 'Algum Texto';

divCenter.appendChild(paragrafo);

// 5 Adicione a tag div com a classe left-content como filho da tag div criada no passo 2;

let divLeft = document.createElement('div');
divLeft.className = 'left-content';

divOne.appendChild(divLeft);

// 6 Adicione a tag div com a classe right-content como filho da tag div criada no passo 2;

let divRight = document.createElement('div');
divRight.className = 'right-content';

divOne.appendChild(divRight);

// 7 Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image . Esse elemento deve ser filho do div criado no passo 5;

let imagem = document.createElement('img');
imagem.src = "https://picsum.photos/200";
divLeft.appendChild(imagem);

// 8 Adicione uma lista não ordenada com os valores de 1 a 10 por extenso como valores da lista. Essa lista deve ser filha do div criado no passo 6;

let listaObject = {
  1: 'um',
  2: 'dois',
  3: 'três',
  4: 'quatro',
  5: 'cinco',
  6: 'seis',
  7: 'sete',
  8: 'oito',
  9: 'nove',
  10: 'dez'
};

let listaUl = document.createElement('ul');
divRight.appendChild(listaUl);

for (let index in listaObject) {
  let liIten = listaObject[index];
  let li = document.createElement('li');
  li.innerHTML = liIten;
  listaUl.appendChild(li);
}


// 9 Adicione 3 tags h3 , todas sendo filhas do div criado no passo 2.

let h3tagArray = [];

for (let i = 0; i < 3; i += 1) {

  h3tagArray[i] = document.createElement('h3');;
  divOne.appendChild(h3tagArray[i]);
}


// 10 Agora que você criou muita coisa, vamos fazer algumas alterações e remoções:
// Adicione a classe title na tag h1 criada;

bodyFirstTitle.className = 'title';

// 11 Adicione a classe description nas 3 tags h3 criadas;

for (let i = 0; i < 3; i += 1) {

  h3tagArray[i].className = 'description';
  divOne.appendChild(h3tagArray[i]);
}

// 12 Remova o div criado no passo 5 (aquele que possui a classe left-content ). Utilize a função .removeChild() ;

divOne.removeChild(divLeft);

// 13 Centralize o div criado no passo 6 (aquele que possui a classe right-content ). Dica: para centralizar, basta configurar o margin-right: auto do div ;

divRight.style.marginRight = 'auto';

// 14 Troque a cor de fundo do elemento pai da div criada no passo 3 (aquela que possui a classe center-content ) para a cor verde;

divCenter.style.backgroundColor = 'green';

// 15 Remova os dois últimos elementos ( nove e dez ) da lista criada no passo 8.

while (listaUl.childNodes.length > 8){
  listaUl.removeChild(listaUl.childNodes[8])
  }