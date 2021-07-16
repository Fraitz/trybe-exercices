const uppercase = (str, callback) => {
  callback(str.toUpperCase());
};

// Se eu passo a palavra Maravilhoso como 'str'
// Então lá dentro ficará callback('MARAVILHOSO')
// E callback pode ser qualquer função que eu quiser

//Aplicações
uppercase('Bee', (palavra, escola = 'Trybe') => {
  console.log(escola.length > `${palavra}Dev`.length)
});

uppercase('Bee', palavra => {
  console.log(`${palavra}Dev`.length === 6)
});

module.exports = { uppercase }
