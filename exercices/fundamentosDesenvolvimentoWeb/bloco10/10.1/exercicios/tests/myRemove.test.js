const { myRemove } = require('../functions/toTestFunctions');

const array = [1, 2, 3, 4];


describe("A soma dos parametros", () => {
  it("Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array passado como parâmetro", () => {
    const a = 3;
    expect(myRemove(array, a)).not.toEqual(array);
  });
  
  it("Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]", () => {
    const a = 3;
    expect(myRemove(array,a)).not.toEqual(array);
  });
  
  it("Verifique se o array passado como parâmetro não foi alterado", () => {
    const a = 3;
    myRemove(array,a);
    const arraySame = [...array];
    expect(arraySame).toEqual(array);
  });

  it("Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array [1, 2, 3, 4]", () => {
    const a = 5;
    expect(myRemove(array,a)).toEqual(array);
  });
});
