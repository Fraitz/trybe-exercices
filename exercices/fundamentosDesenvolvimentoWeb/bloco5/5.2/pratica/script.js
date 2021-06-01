//Acesse o elemento elementoOndeVoceEsta .

let ondeVoceEsta = document.getElementById('elementoOndeVoceEsta');
console.log(ondeVoceEsta);

//Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.

ondeVoceEsta.parentElement.style.backgroundColor = "orange";

//Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?

let primeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho');

primeiroFilhoDoFilho.innerHTML = 'Texto';

//Acesse o primeiroFilho a partir de pai .

let pai = document.getElementById('pai');
pai.firstElementChild;
console.log(pai.firstElementChild);

//Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta .

let primeiroFilho = ondeVoceEsta.previousElementSibling;
console.log(primeiroFilho);

//Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta .

let atencao = ondeVoceEsta.nextSibling
console.log(atencao);

//Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta .

let terceiroFilho = ondeVoceEsta.nextElementSibling;
console.log(terceiroFilho);

//Agora acesse o terceiroFilho a partir de pai .

console.log(pai.children[2]);

//Crie um irmão para elementoOndeVoceEsta .

let irmaoDosFilhos = document.createElement('div');
irmaoDosFilhos.innerHTML = "Sou o irmão deles"; 
irmaoDosFilhos.id = 'irmaoDosFilhos';
pai.insertBefore(irmaoDosFilhos,atencao);

//Crie um filho para elementoOndeVoceEsta .

let filhoNeto = document.createElement('div');
filhoNeto.innerHTML = 'Eu sou um neto';
filhoNeto.id = 'netoDoPai';
ondeVoceEsta.insertBefore(filhoNeto, primeiroFilhoDoFilho);


//Crie um filho para primeiroFilhoDoFilho .

let bisneto = document.createElement('div');
bisneto.innerHTML = 'Sou o primeiro bisneto';
bisneto.id = 'bisnetoDoPai'
primeiroFilhoDoFilho.appendChild(bisneto);

//A partir desse filho criado, acesse terceiroFilho .

console.log(bisneto.parentElement.parentElement.nextElementSibling.nextElementSibling);

//Remova todos os elementos filhos de paiDoPai exceto pai , elementoOndeVoceEsta e primeiroFilhoDoFilho .

for(let index = pai.childNodes.length -1; index > 0; index -= 1) {
  if (pai.childNodes[index] !== ondeVoceEsta) {
    pai.removeChild(pai.childNodes[index]);
  } else {
    for (let indexFilho = ondeVoceEsta.childNodes.length - 1; indexFilho > 0; indexFilho -= 1) {
      if (ondeVoceEsta.childNodes[indexFilho] !== primeiroFilhoDoFilho) {
        ondeVoceEsta.removeChild(ondeVoceEsta.childNodes[indexFilho]);
      }
    }
  }
}