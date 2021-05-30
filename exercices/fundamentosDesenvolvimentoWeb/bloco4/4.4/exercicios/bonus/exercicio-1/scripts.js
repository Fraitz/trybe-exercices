function rome(algarismo) {

  let listAlgarismos = {
    I: 1,
    II: 2,
    III: 3,
    IV: 4,
    V: 5,
    VI: 6,
    VII: 7,
    VIII: 8,
    IX: 9,
    X: 10,
    XX: 20,
    XXX: 30,
    XL: 40, 
    L: 50,
    LX: 60,
    LXX: 70,
    LXXX: 80,
    XC: 90,
    CD: 400,
    D: 500,
    CM: 900,
    M: 1000
  };

  let numerosDoArray = [];
  let somaArray = 0;

  for (let calculadora in algarismo) {

    numerosDoArray[calculadora] = listAlgarismos[algarismo[calculadora]];
  }

  console.log('O algarismo romano é: ' + algarismo);
  console.log('O array dos números romanos é: [' + numerosDoArray + ']');

  for (let calcRomano = 0; calcRomano < numerosDoArray.length; calcRomano += 2) {
    let contadorLocal = 0;
    if (numerosDoArray[calcRomano] < numerosDoArray[calcRomano + 1]) {
      contadorLocal = numerosDoArray[calcRomano + 1] - numerosDoArray [calcRomano];
      somaArray += contadorLocal;
      contadorLocal = 0;
    } else if (numerosDoArray[calcRomano] >= numerosDoArray[calcRomano + 1]) {
      contadorLocal = numerosDoArray[calcRomano] + numerosDoArray [calcRomano + 1];
      somaArray += contadorLocal;
      contadorLocal = 0;
    } else {
      contadorLocal = numerosDoArray[calcRomano];
      somaArray += contadorLocal;
      contadorLocal = 0;
    }
  }

  console.log('O número romano convertido para número arábico é: ' + somaArray);

}

rome('DDDMXXVIIIVVVVV');