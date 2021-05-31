function arrayOfNumbers(vector) {

  let listaPares = [];

  for (let pegaArray in vector) {
    for (let verificaPar in vector[pegaArray]){
      if (vector[pegaArray][verificaPar] %2 == 0) {
      listaPares.push(vector[pegaArray][verificaPar]);
      }
    }
  }
  console.log(listaPares);
}

arrayOfNumbers([[1, 2], [3,4,5,6], [7,8,9,10]]);