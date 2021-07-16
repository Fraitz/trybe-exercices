let { random0To100 } = require('../functions/random0To100');

describe('Testando mock da funcao aleatória 0 to 100', () => {
  it('Testa se o retorno é 10, se a função foi chamada e se foi chamada apenas 1 vez', () => {
    random0To100 = jest.fn().mockReturnValue(10);
      
      expect(random0To100()).toBe(10);
      expect(random0To100).toHaveBeenCalled();
      expect(random0To100).toHaveBeenCalledTimes(1);
  });

  it('Implementa uma nova aplicação para a função que deve receber 2 parâmetros e retornar a divisão do primeiro pelo segundo, também deve confirmar que essa implementação deve acontecer uma única vez.', () => {
    random0To100 = jest.fn((a, b) => a / b);

      expect(random0To100(6, 2)).toBe(3);
      expect(random0To100).toHaveBeenCalledTimes(1);
  })

  it('Implementa uma nova aplicação para a função que deve receber 3 parâmetros e retornar a multiplicação entre eles.', () => {
    random0To100 = jest.fn((a, b, c) => a * b * c);

      expect(random0To100(5, 2, 3)).toBe(30);
  })

  it('Implementa uma nova aplicação para a função que deve receber 1 parâmetro e retornar seu dobro.', () => {
    random0To100 = jest.fn(a => a * 2);

      expect(random0To100(5)).toBe(10);
  })
})