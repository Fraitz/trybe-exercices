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

const adicionaBanda = (nomeDaBanda) => {
	  return new Promise((resolve, reject) =>  {// retorno uma promessa
	  if (bandas.length < 3) {
      setTimeout(() => {
	  	    bandas.push({name: nomeDaBanda});
	  			resolve(); // promessa retornada com sucesso
	  	  }, 1000);
      } else {
        reject(`O show não permite mais de ${bandas.length} bandas`);
      }
    });
	};

  adicionaBanda('Queen') // adiciona a banda 'Queen' no array bandas1
	.then(() => adicionaBanda('Led Zeppelin')) // só então adiciona a banda ''Led Zeppelin' no array bandas;
	.then(() => imprimeBanda()) // E só então eu imprimo o array bandas
  .catch((error) => console.log(error))
  .finally(() => console.log('bandas adicionadas'));

// const assincornaSemERRO = async () => {
//   await adicionaBanda('Queen'); 
//   await adicionaBanda('Led Zepplin'); 
//   await imprimeBanda();
// }

//   const assincrona = async () => {
//   try {
//     await adicionaBanda('Queen'); 
//     // await adicionaBanda('Led Zepplin'); 
//     imprimeBanda();
//   }
//   catch(error){
//     console.log(error);
//   }
// }

// assincrona()

// assincrona().catch(error => console.log(error));
