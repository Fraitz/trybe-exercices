const { sum } = require("../functions/toTestFunctions");

describe("A soma dos parametros", () => {
  it("Teste se o retorno da soma de 4 e 5 é igual a 9", () => {
    const a = 4;
    const b = 5;
    expect(sum(a, b)).toBe(9);
  });

  it("Testa se a soma de 0 com 0 é igual a 0", () => {
    const a = 0;
    const b = 0;
    expect(sum(a, b)).toBe(0);
  });

  it('Testa se lança um erro quando os parâmetros são 4 e uma string "5"', () => {
    const a = 4;
    const b = "5";
    expect(() => sum(a, b)).toThrow(Error);
  });

  it('Testa se a mensagem de erro é "parameters must be numbers" quando os parâmetros são 4 e uma string "5"', () => {
    const a = 4;
    const b = "5";
    expect(() => sum(a, b)).toThrow("parameters must be numbers");
  });
});
