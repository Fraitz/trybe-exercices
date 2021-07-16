const fetch = require('node-fetch');

const getRepos = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then((data) => {
      return data.map((repo) => repo.name); // Retorna um array de objetos em que a propriedade 'name' do objeto representa o nome de um repositório
    });
};

module.exports = { getRepos };