const { getRepos } = require('../funcoes/githubFetch');

describe('Testando se encontra repositórios', () => {
  it('Repositórios todo-list e meme-generator', async () => {
     const repoTrybe = await getRepos('https://api.github.com/orgs/tryber/repos');// const que define a resposta da promessa entregue pelo fetch do endpoint passado.

     expect(repoTrybe).toContain('sd-01-week4-5-project-todo-list'); // Espera que a promessa resolvida contenha este repositório
     expect(repoTrybe).toContain('sd-01-week4-5-project-meme-generator'); // Espera que a promessa resolvida contenha este repositório
   });
});