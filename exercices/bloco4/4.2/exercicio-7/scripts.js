let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 200, 27];
let menor = numbers[0];

for (var index = 0; index < numbers.length; index += 1){
    if (numbers[index] < menor) {
        menor = numbers[index]; 
    } else {
        menor = menor;
    }
}

console.log(menor);