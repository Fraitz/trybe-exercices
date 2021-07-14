// Neste exemplo, como a funcao 'adicionaBanda' é executada em um tempo maior do que a funcao 'imprimeBanda', o array 'bandas' acaba não recebendo a banda 'Queen' antes da função 'imprimeBandas' entrar em execução, e por isso a banda 'Queen' não aparece no console.
const bandas = [ 
  {name: 'Iron Maiden'},
  {name: 'Megadeth'},
];

const imprimeBanda = () => {
  setTimeout(() => {
    bandas.forEach((banda, index) => {
      console.log(index,banda.name)
    });
  }, 1000);
};

const adicionaBanda = (nome) => {
  setTimeout(() => {
    bandas.push({name: nome});
  }, 2000);
};

adicionaBanda('Queen');
imprimeBanda();