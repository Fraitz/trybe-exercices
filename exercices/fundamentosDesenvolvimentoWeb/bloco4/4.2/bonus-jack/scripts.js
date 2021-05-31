let firstNumber = Math.ceil(Math.random() * 60);
let secondNumber = Math.ceil(Math.random() * 60);
let thirdNumber = Math.ceil(Math.random() * 60);
let fourthNumber = Math.ceil(Math.random() * 60);
let fifthNumber = Math.ceil(Math.random() * 60);
let sixthNumber = Math.ceil(Math.random() * 60);

let lotteryNumbers = [firstNumber, secondNumber, thirdNumber, fourthNumber, fifthNumber, sixthNumber];

let firstGame = [23, 56, 34, 45, 12, 44];
let secondGame = [24, 57, 35, 46, 13, 45];
let thirdGame = [11, 12, 07, 15, 14, 21];

let allGames = [firstGame, secondGame, thirdGame];

var acertos = new Object();
acertos.hits0 = 0;
acertos.hits1 = 0;
acertos.hits2 = 0;
acertos.hits = [acertos.hits0, acertos.hits1, acertos.hits2];
acertos.numeros = [];


for (let indexLottery = 0; indexLottery < lotteryNumbers.length; indexLottery += 1) {
  for (let indexAllGames = 0; indexAllGames < allGames.length; indexAllGames += 1) {
    for (let indexGame = 0; indexGame <= 6; indexGame += 1) {
      if (lotteryNumbers[indexLottery] === allGames[indexAllGames][indexGame]) {
        if (!acertos.numeros.includes(allGames[indexAllGames][indexGame])) {
          acertos.numeros.push(allGames[indexAllGames][indexGame]);
          acertos.hits[indexAllGames] += 1;
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
console.log(`Numeros acertados: ${acertos.numeros}`);

console.log(`Acertos do Jogo 1: ${acertos.hits[0]}`);
console.log(`Acertos do Jogo 2: ${acertos.hits[1]}`);
console.log(`Acertos do Jogo 3: ${acertos.hits[2]}`);