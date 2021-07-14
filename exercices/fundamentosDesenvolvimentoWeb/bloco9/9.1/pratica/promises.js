const callback = (resolve, reject) => { // sendo 'resolve' um callback q
  //...codigo a ser executado
  const error = false; //'Erro no Sistema'
  const result = 'Tudo certo'; //'Tudo certo'
  
  if (error) reject(error);
  if (!error) resolve(result); //
};

const promessa = new Promise(callback); // Promise é uma funcao que

// promessa.then((result) => {
  // console.log(result);
// }).catch((error) => {
//   console.log(error);
// })
// o código acima faz exatamente o mesmo que o código abaixo
promessa
  .then(console.log)
  .then(() => {
    console.log('Tudo certo mesmo!!!');
  })
  .catch(console.log)
  .finally(() => {
    console.log('Finalizado');
  });

// para aplicacoes web usa-se o console.error também