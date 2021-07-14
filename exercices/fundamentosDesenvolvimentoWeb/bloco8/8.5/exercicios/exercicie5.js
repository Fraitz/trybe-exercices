// 5 - Escreva a função swap , que dado um array de 3 elementos, retorna um novo array com o primeiro e terceiro elementos trocados. Detalhe: você precisa fazer essa função gastando 1 linha só:
// Dica: use array destructuring .

const assert = require('assert');

const myList = [1, 2, 3];

// escreva swap abaixo
const swap = (array) => [array[2], array[1], array[0]]; // a funcao 'swap' recebe um array, e altera o terceiro elemento aray[2] com o primeiro elemento array[0]

// para isso foi utilizado o metodo array destructuring onde [a, b, c] = [c, b, d] 

console.log(myList);
console.log(swap(myList));


const swappedList = swap(myList);

assert.strictEqual(swappedList[0], 3);
assert.strictEqual(swappedList[1], 2);
assert.strictEqual(swappedList[2], 1);