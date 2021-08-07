const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByName = (name) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const arrayAnimals = Animals.filter((animal) => animal.name === name);
      if (arrayAnimals.length !== 0) {
        return resolve(Animals.find((animal) => animal.name === name));
      };

      return reject('Nenhum animal com esse nome!');
    }, 100);
  })
);

const findAnimalByAge = (age) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const arrayAnimals = Animals.filter((animal) => animal.age === age);
      if (arrayAnimals.length !== 0) {
        return resolve(Animals.find((animal) => animal.age === age));
      };

      return reject('Nenhum animal com essa idade!');
    }, 100);
  })
);

const getAnimalByName = (name) => (
  findAnimalByName(name).then(animal => animal)
);

const getAnimalByAge = (age) => (
  findAnimalByAge(age).then(animal => animal)
);

module.exports = { 
  getAnimalByName,
  getAnimalByAge,
}