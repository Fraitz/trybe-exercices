const numbers = [19, 21, 30, 3, 45, 22, 15]; //array a ser consultado

const acheDivisorDe5e3 = (numero) => numero % 15 ===0; //retorna true ou false

console.log(numbers.find(acheDivisorDe5e3)); //modo mais longo de utilizar o .find

console.log(numbers.find((numero) => numero % 15 === 0)); //modo refatorado