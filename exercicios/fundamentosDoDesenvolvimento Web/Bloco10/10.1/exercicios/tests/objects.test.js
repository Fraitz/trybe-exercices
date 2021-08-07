const { obj1, obj2, obj3 } = require('../functions/toTestFunctions');

describe("Testando a comparacao entre os objetos", () => {
  it("Compare dois objetos para verificar se são idênticos ou não", () => {
    expect(obj1).toEqual(obj2);
    expect(obj1).not.toEqual(obj3);
    expect(obj2).not.toEqual(obj3);
  });
});