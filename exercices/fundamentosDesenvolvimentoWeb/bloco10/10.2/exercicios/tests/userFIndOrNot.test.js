const { findUserById, getUserName } = require('../funcoes/users');

describe('Testando usuários encontrados e não encontrados', () => {
  it('usuário é encontrado', () => {
    return getUserName(5).then(data => expect(data).toEqual('Paul'));
    });

  it('Testa usuário não encontrado', () => {
    expect.assertions(1);
    const id = 0;
    return getUserName(id).catch(data => expect(data).toEqual({error: `User with ${id} not found.`}));
  })
});

describe('Testando usuários encontrados e não encontrados [async/await]', () => {
  it('usuário é encontrado [async/await]', async () => {
    expect(await getUserName(5)).toEqual('Paul');
    });

  it('Testa usuário não encontrado [async/await]', async () => {
    expect.assertions(1);
    const id = 4;
    const id1 = 5;
    const id2 = 0;
    try {
      await getUserName(id);
      await getUserName(id1);
      await getUserName(id2);
    } catch (error) {
    expect(error).toEqual({error: `User with ${id2} not found.`});
    }
  })
})