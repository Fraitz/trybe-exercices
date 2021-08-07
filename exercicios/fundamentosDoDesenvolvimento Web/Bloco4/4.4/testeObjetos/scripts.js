let objeto = {
    chave1: 'Esta eh a chave 1',
    chave2: {
        chave21: 'Esta eh a chave 1 da chave2',
        chave22: 'Esta eh a chave 2 da chave2'
    },
    'chave-kebab': 'Esta é uma chave Kebab Case',
    'chave-kebab2': {
        'chave-kebab21': 'Chave 1 da chave-Objeto Kebab2'
    }
}

let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge' 
  };

  let names2 = ['João','Maria','Jorge'];

console.log(objeto.chave2.chave22);
console.log(objeto['chave-kebab']);
console.log(objeto['chave-kebab2']['chave-kebab21']);

for (let i of names2){
    console.log(i);
}

for (let i in names){
    console.log(names[i]);
}

