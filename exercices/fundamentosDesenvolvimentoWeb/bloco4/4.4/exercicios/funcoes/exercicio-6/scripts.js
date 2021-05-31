function inteiro (numero) {
let soma = numero;
    for (let somador = 1; somador < numero; somador += 1) {
        soma += somador;
    }

    console.log(soma);

}

inteiro(5);