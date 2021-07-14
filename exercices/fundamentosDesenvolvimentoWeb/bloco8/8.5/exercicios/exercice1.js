// 1 - Dado o código abaixo, complete-o de forma que seja impressa a área dos 3 retângulos. O código deve retornar em sequência 2 , 15 e 54 .
// Dica: use spread operator .

const assert = require('assert');

const rectangleArea = (width, height) => width * height; // função recebe 2 parametros

const rectangle1 = [1, 2];
const rectangle2 = [3, 5];
const rectangle3 = [6, 9];
const rectangles = [rectangle1, rectangle2, rectangle3]; // array de arrays [[1, 2],[3, 5],[6, 9]]


rectangles.forEach((rectangle) => { // para cada ''array-retangulo'' do array rectangles
  assert.strictEqual(rectangleArea(...rectangle), rectangle[0] * rectangle[1]); // chame a funcao retangleArea passando como parametro o array-retangulo espalhado
});

// primeira iteracao - retangleArea(1, 2) => 1 * 2; return === 2
// segunda iteracao - retangleArea(3, 5) => 3 * 5; return === 15
// terceira iteracao - retangleArea(6, 9) => 6 * 9; return === 54