let { dogPictures } = require('../functions/dogPicture');

describe('Testa valores de resolve e reject', () => {
  it('Testa Resolve', () => {
    dogPictures = jest.fn().mockResolvedValue('request sucess')
    return expect(dogPictures()).resolves.toBe('request sucess');
    })
  
  it('Testa Reject', () => {
    dogPictures = jest.fn().mockRejectedValue('request failed')
    return expect(dogPictures()).rejects.toBe('request failed');
  })
})