function maisRepetido(numeros) {
    let contaRepetidos = 0;
    let numeroRepete = 0;
    let numerosRepetidos = [];

    for (let pickIndex in numeros) {
      let pickedNumber = numeros[pickIndex];
      for (let pickComparar in numeros) {
        if (pickedNumber === numeros[pickComparar]) {
          numeroRepete += 1;
        }
      }
      if (numeroRepete >= contaRepetidos) {
        contaRepetidos = numeroRepete;
        numerosRepetidos.push(numeros[pickIndex]);
      }
      numeroRepete = 0;
    }
    for (let pickRepetido in numerosRepetidos) {
        let pickedRepetido = numerosRepetidos[pickRepetido];
        for(let pickCompararRepetido in numerosRepetidos) {
            let repetidoaComparar = numerosRepetidos[pickCompararRepetido];
            let verificacaoDeRepeticao = 0;
            if (pickedRepetido == repetidoaComparar) {
                verificacaoDeRepeticao += 1;
            }
            if (verificacaoDeRepeticao > 0) {
                numerosRepetidos.splice(numerosRepetidos.indexOf(numerosRepetidos[pickRepetido]),1);
            }
        }
    }
    let mensagem = 'O(s) numero(s) que mais se repete(m) é(são): ' + numerosRepetidos[0];

    for (let text = 1; text < numerosRepetidos.length; text += 1){
        if (numerosRepetidos.length > 1){
            mensagem += ' e ' + numerosRepetidos[text];
        } else if (numerosRepetidos < 0) {
            mensagem = 'Nenhum numero se repete'
        }
    }
    console.log(mensagem);
  }

  maisRepetido([2,2,2,3,3,3,1,1,1,7,7,9,9,9,6,6,8,10,12,10,11,11,11])