const fruitSalad = (specialFruit, additionalItens) => [...specialFruit, ...additionalItens];

// Faça uma lista com as suas frutas favoritas
const specialFruit = ['morango', 'banana', 'kiwi'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['granola', 'passas', 'mel'];

console.log(fruitSalad(specialFruit, additionalItens));

const arrayUm = [1,2,3];

const objUm = {
  param1: 1,
  param2 : 2,
  param3: 3,
};

const objSpred = {
  ... objUm,
  param4: 4,
  param5: 5,
}

const spreadMontado = [...arrayUm, 4, 5, objSpred];

console.log(spreadMontado);