let numero = 8;
let divisores = 0;

console.log(`Número escolhido: ${numero}`);
for (let divisor = 1; divisor <= numero; divisor += 1) {
    if (numero > 1) {
        if (numero%divisor == 0){
            divisores += 1;
        }
    } else {
        console.log("Pela definição, número primo deve ser um número inteiro maior do que '1', certifique-se de ter inserido um número correto");
    }; 
};

if (divisores > 2){
    console.log('O número', numero,'não é primo');
} else {
    console.log('O número', numero,'é primo')
};
