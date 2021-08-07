let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorente: 'sim'
  };

  let info2 = {
    personagem: 'Tio Patas',
    origem: 'Natal na Montanha do Urso',
    nota: 'O Último MacPatas',
    recorente: 'sim'
  };

  for (let index in info) {
    if ( info[index] !== info2[index]) {
    console.log(info[index] + ' e ' + info2[index]);
    } else {
      console.log("Ambos recorrentes");
    }
  }