const fetch = require('node-fetch'); 
let jokes = require('../functions/bonus');

jest.mock('node-fetch');

test('consegue acessar uma piada', () => {
  const data = {
    "id": "7h3oGtrOfxc",
    "joke": "Whiteboards ... are remarkable.",
    "status": 200
  };

  fetch.mockImplementation(() => Promise.resolve({
    json: () => Promise.resolve(data),
  }));

  return jokes()
    .then((data) => expect(data.joke).toEqual("Whiteboards ... are remarkable."));
});