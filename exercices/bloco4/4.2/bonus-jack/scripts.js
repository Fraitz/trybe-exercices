let firstNumber = Math.ceil(Math.random() * 60);
let secondNumber = Math.ceil(Math.random() * 60);
let thirdNumber = Math.ceil(Math.random() * 60);
let fourthNumber = Math.ceil(Math.random() * 60);
let fifthNumber = Math.ceil(Math.random() * 60);
let sixthNumber = Math.ceil(Math.random() * 60);

// let lotteryNumbers = [firstNumber, secondNumber, thirdNumber, fourthNumber, fifthNumber, sixthNumber];
let lotteryNumbers = [1, 2, 2, 11, 11, 54];

let firstGame = [23, 56, 34, 45, 12, 44];
let secondGame = [24, 57, 35, 46, 13, 45];
let thirdGame = [11, 12, 07, 15, 12, 21];

let allGames = [firstGame, secondGame, thirdGame];

var hits0 = 0;
var hits1 = 0;
var hits2 = 0;

var acertos = new Object();
acertos.hits = [hits0, hits1, hits2];
acertos.numeros = [];


// for (let indexLottery = 0; indexLottery < lotteryNumbers.length; indexLottery += 1) {
//   for (let indexAllGames = 0; indexAllGames < allGames.length; indexAllGames += 1) {
//     for (let indexGame = 0; indexGame <= 6; indexGame += 1) {
//       if (lotteryNumbers[indexLottery] === allGames[indexAllGames][indexGame]) {
//         acertos.hits[indexAllGames] += 1;
//         acertos.numeros.push(allGames[indexAllGames][indexGame]);
//       };
//     };
//   };
// };


for (let indexLottery = 0; indexLottery < lotteryNumbers.length; indexLottery += 1) {
  for (let indexAllGames = 0; indexAllGames < allGames.length; indexAllGames += 1) {
    for (let indexGame = 0; indexGame <= 6; indexGame += 1) {
      if (lotteryNumbers[indexLottery] === allGames[indexAllGames][indexGame]) {
          for (indexEqual = 0; indexEqual <= )
        // if (!acertos.numeros.includes(allGames[indexAllGames][indexGame])) {
        //   acertos.numeros.push(allGames[indexAllGames][indexGame]);
        //   acertos.hits[indexAllGames] += 1;
        } else {
          console.log("Ja tem");
        };
      };
    };
  };
};

console.log(`Numeros sorteados: ${lotteryNumbers}`);
console.log(`Jogo 1: ${firstGame}`);
console.log(`Jogo 2: ${secondGame}`);
console.log(`Jogo 3: ${thirdGame}`);
console.log(acertos.hits, acertos.numeros);