const name = "Fraitz";
const birthCity = "Erros";
let birthYear = 1992;

let patientId = 50;
let isEnrolled = true;
const patientInfo = {
  firstName: 'Ana',
  lastName: 'Santos',
};
const patientEmail = 'ana@email.com';

let base = 5;
let altura = 8;
let area = base * altura;
let perimetro = base * 2 + altura * 2;

let notaCandidato = 20;
let resultado;

if (notaCandidato > 70){
    resultado = "aprovado";
} else if (notaCandidato < 50 && notaCandidato >= 50) {
    resultado = "em recuperacao";
} else { resultado = "reprovado";
}

switch (resultado) {
    case "aprovado":
        console.log("aprovado");
    break;
    case "em recuperacao":
        console.log("em recuperacao");
    break;
    case "reprovado":
        console.log("uma lástima");
    break;
    default:
        console.log("nao se aplica");

}

//console.log (name);
//console.log (birthCity);
//console.log (birthYear);
//console.log(typeof patientId);
//console.log(typeof isEnrolled);
//console.log(typeof patientInfo);
//console.log(typeof patientEmail);
//console.log(area);
//console.log(perimetro);
