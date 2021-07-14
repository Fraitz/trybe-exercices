let usuario = {
  nome: "John",
  idade: 30
};

// loop sobre chave-e-valores
for (let [chave, valor] of Object.entries(usuario)) {
  console.log(`${chave}:${valor}`); // nome:John, idade:30
}