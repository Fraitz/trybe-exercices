function nomesArray(teste){

    let tamanhoDoMaior = teste[0].length;
    let maiorNome = teste[0];

    for (var i = 0; i < teste.length; i+=1){
        if (teste[i].length > tamanhoDoMaior){
            tamanhoDoMaior = teste[i].length;
            maiorNome = teste[i];
          } else if (teste[i].length == tamanhoDoMaior) {
              maiorNome += " & " + teste[i];
          }
        }
  console.log(maiorNome);
  console.log('Tem ' + tamanhoDoMaior + ' letras');

}

  nomesArray(['José', 'Lucas', 'Fernando', 'Fernanda', 'Fernandu', 'Cairo', 'Joana']);
