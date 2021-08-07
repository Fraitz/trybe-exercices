// Escreva uma função que dado um array de nomes e um nome retorne true se ele estiver contido e caso contrário, retorne false , use some ;
const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => arr.some((nomeIterado) => nomeIterado === name); // para um array e um nome dado, se algum (.some) nome do array dado, for igual ao nome recebido (name) retorna true, se não retorna false

console.log(hasName(names, 'Ana'));

// 2 - Escreva uma função que dado um array de pessoas e uma idade mínima retorne true se todas tiverem a idade maior ou igual a mínima e caso contrário false , use every ;
const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 18 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const verifyAges = (arr, minimumAge) => arr.every((objeto) => objeto.age >= minimumAge); // para um array e um numero dado, se todos (.every) objetos do array dado, tiverem a chave ''age'' maior ou igual ao numero dado ''minimumAge'', retorna true, se não retorna false.

console.log(verifyAges(people, 18));