// 8 - Escreva uma função greet que, dado o nome de uma pessoa, retorna uma mensagem de cumprimento:
// Dica: use default params .

const assert = require('assert');

// escreva greet abaixo
const greet = (nome, saudacao = 'Hi') => `${saudacao} ${nome}`; // A funcao greet recebe um nome e uma saudacao, e caso a saudacao nao seja passada pelo usuario, ela recebera o valor padrao de 'Hi', retornando a string com o nome da saudacao seguido do nome.

assert.strictEqual(greet('John'), 'Hi John');
assert.strictEqual(greet('John', 'Good morning'), 'Good morning John');
assert.strictEqual(greet('Isabela', 'Oi'), 'Oi Isabela');