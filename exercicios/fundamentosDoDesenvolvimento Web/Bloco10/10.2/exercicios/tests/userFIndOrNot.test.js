const { getUserName } = require('../funcoes/users');

const idReject = 0; // ID a ser testada para os casos em que a promessa deve retornar Rejected

describe('Testando usuários encontrados e não encontrados', () => {
  it('usuário é encontrado', () => {
    return getUserName(5).then(data => expect(data).toEqual('Paul'));
    });

  it('Testa usuário não encontrado', () => {
    expect.assertions(1);
    return getUserName(idReject).catch(data => expect(data).toEqual({error: `User with ${idReject} not found.`}));
  })
});

describe('Testando usuários encontrados e não encontrados [async/await]', () => {
  it('usuário é encontrado [async/await]', async () => {
    expect(await getUserName(5)).toEqual('Paul');
    });

  it('Testa usuário não encontrado [async/await]', async () => {
    expect.assertions(1);
    try {
      await getUserName(idReject);
    } catch (error) {
    expect(error).toEqual({error: `User with ${idReject} not found.`});
    }
  })
})