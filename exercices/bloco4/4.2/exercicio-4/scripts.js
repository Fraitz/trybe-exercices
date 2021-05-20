let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;

for (let indice = 0; indice < numbers.length; indice += 1) {
    soma = soma + numbers[indice]; 
}


console.log(soma);
console.log(soma/numbers.length);

if (soma/numbers.length > 20){
    console.log("Valor maior que 20");
} else {
    console.log("Valor menor que 20");
}