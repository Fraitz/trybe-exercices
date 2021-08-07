const { myFizzBuzz } = require('../functions/toTestFunctions');

describe("Testando a Fizz Buzz", () => {
  it("Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado", () => {
    const a = 15;
    expect(myFizzBuzz(a)).toMatch('fizzbuzz');
  });

  it("Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado", () => {
    const a = 9;
    expect(myFizzBuzz(a)).toMatch('fizz');
  });

  it("Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado", () => {
    const a = 10;
    expect(myFizzBuzz(a)).toMatch('buzz');
  });

  it("Faça uma chamada com um número não divisível por 5 e nem por 3 verifique se o retorno é o esperado", () => {
    const a = 7;
    expect(myFizzBuzz(a)).toBe(a);
  });

  it("Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado", () => {
    const a = 'a';
    expect(myFizzBuzz(a)).toBeFalsy();
  });
});