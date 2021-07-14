const novoArray = [];
const filtrarPessoas = (array) =>{ array.forEach((pessoa) => {
  if (pessoa.bornIn > 1900 && pessoa.bornIn < 2001 && pessoa.nationality === 'Australian') {
    novoArray.push(pessoa);
  }
}); return novoArray };

filtrarPessoas(people);
console.log(novoArray);

console.log(filtrarPessoas(people));