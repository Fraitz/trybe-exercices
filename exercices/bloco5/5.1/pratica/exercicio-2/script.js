let body = document.querySelector('body');

body.style.backgroundColor = '#e9f1ed';


// Fim do body
// Inicio do header

let header = document.querySelector('#header-container');

header.style.backgroundColor = '#248453';

let headerH1 = document.querySelector('#header-container h1');

headerH1.style.margin = "0px"

// Fim do header
// Inicio dos quadros à esquerda 

// Div Title

let tituloDivsEmergencia = document.querySelectorAll('.emergency-tasks div h3');

tituloDivsEmergencia[0].style.backgroundColor = 'purple';

tituloDivsEmergencia[0].style.margin = '10px 0px';

tituloDivsEmergencia[0].style.display = 'inline-block';

tituloDivsEmergencia[1].style.backgroundColor = 'purple';

// Div Emergencia Pai

let divsEmergencia = document.querySelectorAll('.emergency-tasks div');

divsEmergencia[0].style.backgroundColor = '#f356';

divsEmergencia[1].style.backgroundColor = '#f356';

// Fim dos quadros à esquerda
// Início dos quadros à direitable

//Div Titles

let tituloDivNeutral = document.querySelectorAll('.no-emergency-tasks h3');

tituloDivNeutral[0].style.backgroundColor = 'black';

tituloDivNeutral[0].style.margin = '10px 0px';

tituloDivNeutral[0].style.display = 'inline-block';

tituloDivNeutral[1].style.backgroundColor = 'black';

// Div Não Emergencia Pai

let divNeutral = document.querySelectorAll('.no-emergency-tasks div');

divNeutral[0].style.backgroundColor = '#d2cf52';

divNeutral[1].style.backgroundColor = '#d2cf52';

// Fim dos quadros à direitable
// Início do Footer

let rodape = document.querySelector('#footer-container');

rodape.style.backgroundColor = "#192f1e";
