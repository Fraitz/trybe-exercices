const { myRemoveWithoutCopy } = require('../functions/toTestFunctions');

const array = [1, 2, 3, 4];
const arrayToProve = [...array];

describe("A soma dos parametros", () => {
  it("Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array passado como parâmetro", () => {
    const a = 3;
    expect(myRemoveWithoutCopy(array, a)).toEqual(array);
  });

  it("Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]", () => {
    const a = 3;
    const arrayToProve = [1,2,3,4];
    expect(myRemoveWithoutCopy(array,a)).not.toEqual(arrayToProve);
  });

  it("Faça uma chamada para a função myRemoveWithoutCopy e verifique se o array passado por parâmetro sofreu alterações", () => {
    const a = 7;
    const arrayTest = [1,2,3,4,5,6]
    myRemoveWithoutCopy(arrayTest,a);
    expect(arrayTest).toEqual([1,2,3,4,5,6]);
  });

  it("Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array [1, 2, 3, 4]", () => {
    const a = 5;
    expect(myRemoveWithoutCopy(array,a)).toEqual(array);
  });
});