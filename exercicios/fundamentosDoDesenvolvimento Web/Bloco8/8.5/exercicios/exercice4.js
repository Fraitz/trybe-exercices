// 4 - Escreva uma função filterPeople que, dada uma lista de pessoas, retorna todas as pessoas australianas que nasceram no século 20:
// Dica: use object destructuring .

const assert = require('assert');

const people = [
  {
    name: 'Nicole',
    bornIn: 1992,
    nationality: 'Australian',
  },
  {
    name: 'Harry',
    bornIn: 2008,
    nationality: 'Australian',
  },
  {
    name: 'Toby',
    bornIn: 1901,
    nationality: 'Australian',
  },
  {
    name: 'Frida',
    bornIn: 1960,
    nationality: 'Dannish',
  },
  {
    name: 'Fernando',
    bornIn: 2001,
    nationality: 'Brazilian',
  },
];

// escreva filterPeople abaixo
const filterPeople = (array) =>  array.filter(({bornIn, nationality}) => bornIn > 1900 && bornIn < 2001 && nationality === 'Australian'); // A funçao fulter recebe como parametro um elemento iteravel de um array, neste caso, como passamos um destructuring object, quer dizer que esperamos receber estas duas propriedades de um elemento-objeto de um array de objetos. 
// Aqui passamos a lógica pela qual as chaves do eleento-objeto iterável devem atender para ele retornar um array filtrado.

const filteredPeople = filterPeople(people);
// console.log(filterPeople(people));
// console.log(filteredPeople);

assert.deepStrictEqual(filteredPeople[0], { name: 'Nicole', bornIn: 1992, nationality: 'Australian' });
assert.deepStrictEqual(filteredPeople[1], { name: 'Toby', bornIn: 1901, nationality: 'Australian' });

// Forma 2 - com forEach
const novoArray = [];
const filtrarPessoas = (array) =>{ array.forEach((pessoa) => {
  if (pessoa.bornIn > 1900 && pessoa.bornIn < 2001 && pessoa.nationality === 'Australian') {
    novoArray.push(pessoa);
  }
}); return novoArray };

const pessoasFiltradas = filtrarPessoas(people);

assert.deepStrictEqual(pessoasFiltradas[0], { name: 'Nicole', bornIn: 1992, nationality: 'Australian' });
assert.deepStrictEqual(pessoasFiltradas[1], { name: 'Toby', bornIn: 1901, nationality: 'Australian' });