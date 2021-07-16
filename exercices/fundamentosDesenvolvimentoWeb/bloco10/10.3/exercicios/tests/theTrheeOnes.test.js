const funcao = require('../functions/theTrheeOnes');
let { upperCase, firstLetter, sumStrings } = funcao;



describe('Testando Mock com as funções do arquivo theTrheeOnes.js', () => {
  jest.mock('../functions/theTrheeOnes');

  it('Alterando upperCase para retornar as strings lower case', () => {
    upperCase = jest.fn(string => string.toLowerCase());

    expect(upperCase('PALAVRAO')).toBe('palavrao');
  });

  it('Alterando firstLetter para retornar aúltima letra de uma string', () => {
    firstLetter = jest.fn(string => string[string.length - 1]);

    expect(firstLetter('ultima')).toBe('a');
  });

  it('Alterando sumStrings para receber agora três strings e concatená-las.', () => {
    sumStrings = jest.fn((string1, string2, string3) => string1 + string2 + string3);

    expect(sumStrings('Ma','co','nha')).toBe('Maconha');
  });

  it('Alterando upperCase para retornar as strings lower case', () => {
    let spy = jest.spyOn(funcao, 'upperCase');
    spy.mockImplementation(string => string.toLowerCase());

    expect(spy('PALAVRAO')).toBe('palavrao');

    spy.mockRestore();

    spy = jest.spyOn(funcao, 'upperCase');
    expect(spy('palavrinha')).toBe('PALAVRINHA');
  });
});

// Preferencial utilizar spy.