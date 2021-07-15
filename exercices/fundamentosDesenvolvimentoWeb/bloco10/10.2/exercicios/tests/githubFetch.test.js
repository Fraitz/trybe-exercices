const { getRepos } = require('../funcoes/githubFetch');

describe('Testando se encontra repositórios', () => {
  it('Repositórios todo-list e meme-generator', async () => {
     const repoTrybe = await getRepos('https://api.github.com/orgs/tryber/repos');

     expect(repoTrybe).toContain('sd-01-week4-5-project-todo-list');
     expect(repoTrybe).toContain('sd-01-week4-5-project-meme-generator');
   });
});