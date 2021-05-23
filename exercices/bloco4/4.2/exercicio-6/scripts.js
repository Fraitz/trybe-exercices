let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let pares = 0;
let impares = 0;


for (var index = 0; index < numbers.length; index += 1){
    if (numbers[index] % 2 === 0) {
        pares += 1; 
    } else {
        impares +=1;
    }
}

if (impares === 0){
    console.log("Não existe impares");
} else {
    console.log(impares);
}