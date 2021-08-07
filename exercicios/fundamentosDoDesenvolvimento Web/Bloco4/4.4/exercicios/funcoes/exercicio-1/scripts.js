function palindromoMaldito (palavra) {

    let palavraContrario = '';
    for (let index = palavra.length - 1; index >= 0; index -= 1) {
        palavraContrario += palavra[index];
    };

    if (palavraContrario == palavra) {
        console.log("Palindromo");
    } else {
        console.log("Não é Palindromo");
    };
    console.log(palavraContrario);
    console.log(palavra);
};

palindromoMaldito('pente');