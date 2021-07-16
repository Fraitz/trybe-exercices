const { uppercase } = require('../funcoes/upperCase');

describe('Testando se a funcao uppercase transforma as minusculas em maiusculas', () => {
  it('Testando a palavra "Maravilhoso"', async () => {
    uppercase('Maravilhoso', string => {
      expect(string).toBe('MARAVILHOSO'); // Chama a funcao 'uppercase' passando a palavra 'Maravilhoso' como parametro 'str' e a funcao string => {...('MARAVILHOSO')} como callback.
      // Quando uppercase recebe 'Maravilhoso' a calback no seu interior fica como 'callback('MARAVILHOSO'). E como a callback passada é string => {...('MARAVILHOSO')}, string será de fato a palavra 'Maravilhoso' passada como parâmetro. 
    }) 
   });
});
