// 2 - Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos. Ou seja:
// Dica: use parâmetro rest .

const assert = require('assert');

// solucao 1 - mais eficiente
const sum = (...numbers) => numbers.reduce(((acumulador, number) => acumulador + number),0);

// solucao 2 - mais longa
const soma = (...numeros) => {
  let somatorio = 0;
  for(numero of numeros) {
    somatorio += numero;
  }
  return somatorio;
}

// escreva sum abaixo

assert.strictEqual(sum(), 0);
assert.strictEqual(sum(1), 1);
assert.strictEqual(sum(1, 2), 3);
assert.strictEqual(sum(1, 2, 3), 6);
assert.strictEqual(sum(1, 2, 3, 4), 10);
assert.strictEqual(soma(), 0);
assert.strictEqual(soma(1), 1);
assert.strictEqual(soma(1, 2), 3);
assert.strictEqual(soma(1, 2, 3), 6);
assert.strictEqual(soma(1, 2, 3, 4), 10);