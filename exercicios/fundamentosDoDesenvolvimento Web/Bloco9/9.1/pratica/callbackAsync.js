// Este codigo resolve o problema do codigo anterior utilizando o parametro 'callback' na funcao 'adicionaBanda' (note que callBack é a funcao 'imprimeBanda' quando a funcao 'adicionaBanda' é chamada) para poder imprimir todas as bandas, fazendo com que, as bandas fossem imprimidas apenas depois do array bandas receber a banda 'Queen'
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

const adicionaBanda = (nome, callback) => {
  setTimeout(() => {
    bandas.push({name: nome});
    callback();
  }, 2000);
};

adicionaBanda('Queen', imprimeBanda);