function inteirosArray(teste){

    let maior = teste[0];
    for (var i = 0; i < teste.length; i+=1){
        if (teste[i] > maior && teste[i]){
            maior = teste[i];
          } else { 
          }
        }
  console.log(maior);
  console.log(teste.indexOf(maior))
}

  inteirosArray([-2, -3, -100, -7, -10, -12]);