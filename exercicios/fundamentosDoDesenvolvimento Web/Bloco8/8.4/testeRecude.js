const testeArray = [1, 2, 3 ];

const fToquinha = testeArray.reduce((acc, elemento) => {
  acc[`parametro${elemento}`] = elemento * 2;
  return acc;
},{});

console.log(fToquinha);
// console.log(fToquinha2);
