function inteirosArray(teste){

    let menor = teste[0];
    for (var i = 0; i < teste.length; i+=1){
        if (teste[i] < menor && teste[i]){
            menor = teste[i];
          } else { 
          }
        }
  console.log(menor);
  console.log(teste.indexOf(menor))
}

  inteirosArray([-2, -3, -100, -7, -10, -12]);