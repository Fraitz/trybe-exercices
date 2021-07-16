beforeEach(() => console.log('1 - beforeEach')); // Este codigo imprime '1 - beforeEach' antes de cada teste, pois ele é global.
afterEach(() => console.log('1 - afterEach')); // Este codigo imprime '1 - afterEach' depois de cada teste, pois ele é global.

test('', () => console.log('1 - test')); // Este código imprime '1 - test' apenas durante este teste

describe('Scoped / Nested block', () => {
  // Aqui vem '1-beforeEach' pois logo abaixo vem o primeiro código que antecede o próximo teste.
  beforeEach(() => console.log('2 - beforeEach')); // Este é o código que antecede o próximo teste, então ele vem logo após o próximo teste, e se mantém apenas dentro do escopo do 'describe' em que ele está inserido
  afterEach(() => console.log('2 - afterEach')); // Este código vem logo após o próximo teste e se mantém apenas dentro do escopo do 'describe' em que ele está inserido

  test('', () => console.log('2 - test')); // Este código imprime '2 - test' apenas durante este teste
  // aqui vem '2 - afterEach'
  // aqui vem '1 - afterEach'
});

// Ordem impressa
// ----------------
// 1 - beforeEach
// 1 - test
// 1 - afterEach
// 1 - beforeEach
// 2 - beforeEach
// 2 - test
// 2 - afterEach
// 1 - afterEach
