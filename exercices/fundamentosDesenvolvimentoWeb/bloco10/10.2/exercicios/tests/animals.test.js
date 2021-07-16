const { getAnimalByName,
  getAnimalByAge } = require('../funcoes/animals');

// Constantes Globais
const animalResolve = { name: 'Dorminhoco', age: 1, type: 'Dog' }; // Objeto do Animal que quero obter quando a promessa é resolvida
const erroName = 'Nenhum animal com esse nome!' // Erro quando a promessa é rejeitada e não encontra um animal com o nome passado
const erroAge = 'Nenhum animal com essa idade!' // Erro quando a promessa é rejeitada e não encontra um animal com a idade passada.

describe('Testando promise - findAnimalByName', () => { // Testando a promessa de encontrar um animal pelo nome;
    it ('Quando existe o animal com o nome procurado, retorne o objeto do animal', async () => {
    expect(await getAnimalByName('Dorminhoco')).toEqual(animalResolve) // Testa se o nome passado retorna uma promessa resolvida
      });

    it('Quando não existe o animal com o nome procurado, retorna um erro', async () => {
    expect.assertions(1);
    try {
      await getAnimalByName('Bob'); // Testa se o nome passado retorna uma promessa rejeitada
    } catch(error) {
      expect(error).toEqual(erroName)
    }
  })
});

describe('Testando promise - findAnimalByAge', () => { // Testando a promessa de encontrar um animal pela idade
    it ('Quando existe o animal com a idade procurada, retorne o objeto do animal', async () => {
    expect(await getAnimalByAge(1)).toEqual(animalResolve)
      }); // Testa se a idade passada retorna uma promessa resolvida

    it('Quando não existe o animal com a idade procurada, retorna um erro', async () => {
    expect.assertions(1);
    try {
      await getAnimalByAge(3); // Testa se a idade passada retorna uma promessa rejeitada
    } catch(error) {
      expect(error).toEqual(erroAge)
    }
  })
});