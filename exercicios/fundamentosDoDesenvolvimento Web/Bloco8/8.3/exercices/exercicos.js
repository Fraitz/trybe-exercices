const assert = require('assert');

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// 1 - Crie um array com strings no formato NOME_DO_LIVRO - GÊNERO_DO_LIVRO - NOME_DA_PESSOA_AUTORA
// Dica: Use a função map

const expectedResult = [
  'As Crônicas de Gelo e Fogo - Fantasia - George R. R. Martin',
  'O Senhor dos Anéis - Fantasia - J. R. R. Tolkien',
  'Fundação - Ficção Científica - Isaac Asimov',
  'Duna - Ficção Científica - Frank Herbert',
  'A Coisa - Terror - Stephen King',
  'O Chamado de Cthulhu - Terror - H. P. Lovecraft',
];

function formatedBookNames() {
 return books.map((book) => `${book.name} - ${book.genre} - ${book.author.name}`) // esta funcao deve retornar o array de livros com o metodo map aplicado, e o retorno do metodo map será um array de string, em que cada string é a concatenacao por template literals do "nome do livro" - "genero" - "autor"
}

assert.deepStrictEqual(formatedBookNames(), expectedResult);

// 2 - Construa um array de objetos a partir do array de livros. Cada objeto deve conter uma propriedade author , com o nome da pessoa autora do livro, e uma propriedade age com a idade dessa pessoa quando o livro foi lançado. O array deve ser ordenado por idade, ou seja, da pessoa mais jovem para a mais velha considerando suas idades quando o livro foi lançado.
// Dica: use as funções map , sort

const expectedResult2 = [
  {
    age: 31,
    author: 'Isaac Asimov',
  },
  {
    age: 38,
    author: 'H. P. Lovecraft',
  },
  {
    age: 39,
    author: 'Stephen King',
  },
  {
    age: 43,
    author: 'George R. R. Martin',
  },
  {
    age: 45,
    author: 'Frank Herbert',
  },
  {
    age: 62,
    author: 'J. R. R. Tolkien',
  },
];

function nameAndAge() { // esta funcao tem apenas um retorno, que é o array books aplicado de um metodo .map e depois de uma ordenacao por uma propriedade dos elementos de map
  return books.map((book) => ( // aqui, books.map cria um array de objetos, em que cada objeto do array tem uma propriedade age  e author, sendo qeu age é a idade que o autor do livro tinha quando o livro foi lancado
    {
      age: book.releaseYear - book.author.birthYear, 
      author: book.author.name
    })).sort((objetoA, objetoB) => objetoA.age - objetoB.age); // todo o books.map é ordenado pela propriedade 'age', ou seja, a funcao que sort utilizara para ordenar é da menor age para a maior, por isso objetoA.age - objetoB.age, 
}

assert.deepStrictEqual(nameAndAge(), expectedResult2);

// 3 - Crie um array com todos os objetos que possuem gênero ficção científica ou fantasia.
// Dica: use as função filter ;
const expectedResult3 = [
  { 
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: { name: 'George R. R. Martin', birthYear: 1948 },
    releaseYear: 1991
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
    releaseYear: 1954
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: { name: 'Isaac Asimov', birthYear: 1920 },
    releaseYear: 1951
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: { name: 'Frank Herbert', birthYear: 1920 },
    releaseYear: 1965
  }
];

function fantasyOrScienceFiction() { // Queremos uma funcao que retorne o array books filtrado apenas com livros de ficcção ou fantasia
  return books.filter(({genre}) => genre === 'Ficção Científica' || genre === 'Fantasia'); // para isso aplicamos um .filter no array books, como retorno na funcao, e para cada book pegamos o parametro {genre}, comparamos o parametro com 'Ficcao Cientifica' e 'Fantasia' se for um ou o outro ele retorna um array com o book filtrado.
}

assert.deepStrictEqual(fantasyOrScienceFiction(), expectedResult3);

// 4 - Crie um array ordenado pelos livros com mais de 60 anos de publicação e ordene-o pelo livro mais velho.
// Dica: use as funções filter e sort
const expectedResult4 = [
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: { name: 'H. P. Lovecraft', birthYear: 1890 },
    releaseYear: 1928,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: { name: 'Isaac Asimov', birthYear: 1920 },
    releaseYear: 1951,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
    releaseYear: 1954,
  },
];

function oldBooksOrdered() { // esta funcao visa retornar os livros que tem mais de 60 anos de lancamento por ordem de lancamento
  return books
  .filter(({releaseYear}) => (2021 - releaseYear) > 60) // por isso aplica-se o array de livros filtrado, de forma que em cada iteracao, pega-se a propriedade {releaseYear} e comparamos se a idade do livro (2021 - releaseYear) possui mais de (>) 60 anos. Se possuir, a funcao filter monta um array com este elemebto-livro. 
  .sort((livroA, livroB) => livroA.releaseYear - livroB.releaseYear); // a funcao books.filter retorna um array filtrado com a logica descrita acima, e entao ordenamos este array com sort, de forma crescente de acordo com a propriedade "releaseYear", do livro mais velho para o mais novo, ou seja, da releaseYear menor para a maior.  
}

assert.deepStrictEqual(oldBooksOrdered(), expectedResult4);

// 5 - Crie um array em ordem alfabética apenas com os nomes de todas as pessoas autoras de ficção científica ou fantasia.
const expectedResult5 = [
  'Frank Herbert',
  'George R. R. Martin',
  'Isaac Asimov',
  'J. R. R. Tolkien',
];

function fantasyOrScienceFictionAuthors() {
  return books
  .filter(({genre}) => genre === 'Ficção Científica' || genre === 'Fantasia')
  .map((book) => book.author.name)
  .sort();
}

assert.deepStrictEqual(fantasyOrScienceFictionAuthors(), expectedResult5);

// 6 - Crie um array com o nome de todos os livros com mais de 60 anos de publicação.
const expectedResult6 = [
  'O Senhor dos Anéis',
  'Fundação',
  'O Chamado de Cthulhu',
];

function oldBooks() {
  return books // esta funcao retorna o array com os nomes dos livros de mais de 60 anos
  .filter(({releaseYear}) => (2021 - releaseYear) > 60) // pegamos o array books e retornamos um array contendo apenas aqueles livros cuja data de lancamento seja superior à 60
  .map(({name}) => name); // pegamos o array filtrado acima e aplicamos um .map para retornar apenas um array de nomes desses livros. 
}

assert.deepStrictEqual(oldBooks(), expectedResult6);

// 7 - Encontre o nome do livro escrito pela pessoa cujo nome registrado começa com três iniciais.
// Dica: cada inicial termina com um ponto.
const expectedResult7 = 'O Senhor dos Anéis';

function authorWith3DotsOnName() {
  return books // esta funcao retornará o nome de um único livro cujo nome do autor comeca com 3 iniciais
  .filter((book) => book.author.name[1] === '.' && book.author.name[4] === '.' && book.author.name[7] === '.')[0].name; // para um nome comecar com tres iniciais entao transformemos um nome em um array ficaria assim - [letra, ponto, espaco, letra, ponto, espaco, letra ponto, espaco, ...nome] sendo assim temos que os elementos [1][4]e[7] deste array tem que ser pontos. Então, aplicamos um filter ao array books, de forma a filtrar apenas os livros que possuem um autor cujo nome começa com 3 iniciais, dado que é apenas um livro - 'Encontre 'O' livro' - e dado que filter irá retornar um array, precisamos pegar a propriedade 'name' do único elemento (elemento[0]) deste array como saida final.
}

assert.deepStrictEqual(authorWith3DotsOnName(), expectedResult7);

function authorWith3DotsOnName2() {
  return books
  .find((book) => book.author.name.split(' ') // Utiliza '.find' para retornar o primeiro resultado que bater com a lógica. A lógica é montada da seguinte forma: pegamos o nome do autor e quebramos ele em um array de palavras com split(' ') resultando em ['J.', 'R.', 'R.', 'Tolkein'].
  .filter((word) => word.endsWith('.')).length === 3) // depois filtramos o array por palavras que terminam com '.', retornando este array: ['J.', 'R.', 'R.'], depois medimos o array e comparamos se o tamanho 'length' dele é igual a 3 (já que devem ser 3 letras). Se toda essa lógica passar ... 
  .name; // ... nós pegamos a propriedade 'name' do primeiro livro que atender a esta lógica.
}