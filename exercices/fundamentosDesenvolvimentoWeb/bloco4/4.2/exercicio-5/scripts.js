let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 200, 27];
let maior = numbers[0];

for (var index = 0; index < numbers.length; index += 1){
    if (numbers[index] > maior) {
        maior = numbers[index]; 
    } else {
        maior = maior;
    }
}

console.log(maior);