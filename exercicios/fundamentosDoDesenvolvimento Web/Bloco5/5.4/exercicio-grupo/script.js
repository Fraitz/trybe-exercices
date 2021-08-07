window.onload = function() {
  let basePyramid = 9;
  let numberOfLines = (basePyramid + 1) / 2; // 5
  let controlLeft = numberOfLines; // 5
  let controlRight = numberOfLines; // 5
  let lines = document.querySelectorAll(".line");

  updateVisit();

  fillTriangle(lines);
  
  // Atualiza a quantidade de visitar no site, utilizando o LocalStorage
  function updateVisit() {
    if (typeof (Storage) != "undefined") {
      let count = parseInt(localStorage.valor);
      if(localStorage.valor !== undefined) {
        count+=1;
        localStorage.valor = count;
        document.getElementById("count").innerHTML = count;
      } else {
        localStorage.valor = 1;
        document.getElementById("count").innerHTML = 1;
      }
    } else {
      document.write("Sem suporte para Web Storage");
    }  
  }

  // Passa por todos as linhas (div com class line) e preenche o triangulo
  function fillTriangle(lines) {
    for(let index = 0; index < lines.length; index += 1) {
      fillLine(lines[index]);
      controlRight += 1;
      controlLeft -= 1;
    }
  }
  
  // Preenche uma linha
  function fillLine(divLine) {
    for (let lineColumn = 1; lineColumn <= basePyramid; lineColumn += 1) {
      if(lineColumn >= controlLeft && lineColumn <= controlRight) {
        let box = createBox("box");
        divLine.appendChild(box);
      } else {
        divLine.appendChild(createBox("box-empty"));
      }
    }
  }
  
  // Cria uma caixa com base nas diferentes classes
  function createBox(className) {
    let box = document.createElement("div");
    box.className = className;
    return box;
  }
}