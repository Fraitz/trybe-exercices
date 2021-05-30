function palavraFinal(word,ending) {
  if (word.length >= ending.length && word == String && ending == String) {
    console.log(word.endsWith(ending));
  } else if (word !== String || ending !== String) {
    console.log('O Input ' + ending + ' e o input ' + word + ' tem que ser Strings!');
  } else {
    console.log('A palavra ' + ending + ' tem que ser menor que ' + word);
  }
};

palavraFinal(10, 9);

