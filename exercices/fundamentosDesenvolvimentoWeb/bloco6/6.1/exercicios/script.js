const body = document.querySelector('body');
const botaoEnviar = document.getElementById('enviar');
const botaoResetar = document.getElementById('clear');
const inputsMain = document.querySelector('#inputsMain');
const inputsCareira = document.querySelector('#inputsCarreira');
const nome = document.getElementById("nomeCompleto");
const email = document.getElementById("email");
const cpf = document.getElementById("cpf");
const logradouro = document.getElementById("endereco");
const cidade = document.getElementById("cidade");
let estado = document.getElementById("estados");
let moradia = '';
const resume = document.getElementById("resume");
const cargo = document.getElementById("cargoAtual");
const descricao = document.getElementById("descricaoCargo");
const data = document.getElementById("data");
const divDate = document.getElementById("divDate");

window.onload =  function () {
  let estados = ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RO", "RS", "RR", "SC", "SE", "SP", "TO"];

  let estadosValue = ["Acre", "Alagoas", "Amazonas", "Amapá", "Bahia", "Ceará", "Distrito Federal", "Espírito Santo", "Goías", "Maranhão", "Mato Grosso", "Mato Grosso do Sul", "Minas Gerais", "Pará", "Paraíba", "Paraná", "PE", "Piauí", "Rio de Janeiro", "Rio Grande do Norte", "Rondônia", "Rio Grande do Sul", "Roraima", "Santa Catarina", "Sergipe", "São Paulo", "Tocantins"];

  let inputEstados = document.getElementById("estados");

  for (let i = 0; i < estados.length; i += 1){
    const estado = document.createElement('option')
    inputEstados.appendChild(estado);
    estado.outerHTML = `<option name="${estados[i]}" value="${estadosValue[i]}">${estados[i]}</option>`;
  }
}

function getChecked() {
  const inputs = document.getElementsByTagName('input');
  for (let i = 0; i < inputs.length; i +=1) {
    if (inputs[i].type === "radio") {
      if (inputs[i].checked) {
        moradia = inputs[i];
        console.log(moradia);
      }
    }
  }
}
getChecked();

function dataValida (event) {
  const mensagemObrigatoria0 = document.createElement('p');
  mensagemObrigatoria0.innerHTML = "*Campo obrigatório - padrão dd/mm/aaaa";
  mensagemObrigatoria0.classList.add('obrigatoria');

  const mensagemObrigatoria1 = document.createElement('p');
  mensagemObrigatoria1.innerHTML = "*Você deve usar o padrão dd/mm/aaaa";
  mensagemObrigatoria1.classList.add('obrigatoria');

  const mensagemObrigatoria2 = document.createElement('p');
  mensagemObrigatoria2.innerHTML = "*Dia precisa ser de 1 a 31 - padrão dd/mm/aaaa";
  mensagemObrigatoria2.classList.add('obrigatoria');

  const mensagemObrigatoria3 = document.createElement('p');
  mensagemObrigatoria3.innerHTML = "*Mês precisa ser de 1 a 12 - padrão dd/mm/aaaa";
  mensagemObrigatoria3.classList.add('obrigatoria');

  const mensagemObrigatoria4 = document.createElement('p');
  mensagemObrigatoria4.innerHTML = "*Ano precisa ter 4 dígitos e ser maior que 0 - padrão dd/mm/aaaa";
  mensagemObrigatoria4.classList.add('obrigatoria');

  let dataString = document.getElementById('data').value;
  let dia = dataString.substring(0, 2);
  let barraUm = dataString.substring(2, 3);
  let mes = dataString.substring(3, 5);
  let barraDois = dataString.substring(5, 6)
  let ano = dataString.substring(6);

  
  console.log(event.target.value.length);
  console.log(dia);
  console.log(mes);
  console.log(ano);

    if (dataString === '') {
    divDate.lastElementChild.innerHTML = mensagemObrigatoria0.innerHTML;
    } else if (Number(dia) <= 0 && divDate.lastElementChild.className === "obrigatoria" || Number(dia) > 31 && divDate.lastElementChild.className === "obrigatoria") {
      divDate.lastElementChild.innerHTML = mensagemObrigatoria2.innerHTML;
    } else if (Number(dia) <= 0 && divDate.lastElementChild.className !== "obrigatoria" || Number(dia) > 31 && divDate.lastElementChild.className !== "obrigatoria") { 
      divDate.appendChild(mensagemObrigatoria2);
    } else if (Number(mes) <= 0 && divDate.lastElementChild.className === "obrigatoria"|| Number(mes) > 12 && divDate.lastElementChild.className === "obrigatoria") {
      divDate.lastElementChild.innerHTML = mensagemObrigatoria3.innerHTML;
    } else if (Number(ano) <= 0 && divDate.lastElementChild.className === "obrigatoria") {
      divDate.lastElementChild.innerHTML = mensagemObrigatoria4.innerHTML; 
    } else if(dataString.length !== 10 && divDate.lastElementChild.   className !== "obrigatoria") {
      divDate.appendChild(mensagemObrigatoria1);
    } else if(dataString.length !== 10 && divDate.lastElementChild.className === "obrigatoria") {
      divDate.lastElementChild.innerHTML = mensagemObrigatoria1.innerHTML;
    } else if (dataString.length === 10 && barraUm === '/' && barraDois === '/' && divDate.lastElementChild.className === "obrigatoria") {
      divDate.removeChild(divDate.lastElementChild);
    }
   
}

function interrompido(event) {
  event.preventDefault();
}

function verificacoes() {
  if (nome.value === '') {
    alert ("Preencha o seu nome");
  } else if (email.value === '') {
    alert ("Preencha o e-mail");
  } else if (cpf.value === '') {
    alert ("Preencha o CPF");
  } else if (logradouro.value === '') {
    alert ("Preencha o Logradouro");
  } else if (cidade.value === '') {
    alert ("Preencha a Cidade");
  } else if (resume.value === '') {
    alert ("Preencha o seu Resumo");
  } else if (cargo.value === '') {
    alert ("Preencha o Cargo Atual");
  } else if (descricao.value === '') {
    alert ("Preencha a Descrição do Cargo Atual");
  } else if (data.parentElement.parentElement.lastElementChild.className === "obrigatoria") {
    alert ("Preencha a Data de Início");
  }
}

function informaErros(event) {
  const mensagemObrigatoria = document.createElement('p');
  if (event.target.value === '' && event.target.parentElement.parentElement.lastElementChild.className !== "obrigatoria") {
    mensagemObrigatoria.innerHTML = "*Preenchimento Obrigatorio"
    mensagemObrigatoria.classList.add('obrigatoria');
    event.target.parentElement.parentElement.appendChild(mensagemObrigatoria);
  }
}

function removeInfoErro(event) {
  const mensagemObrigatoria = document.createElement('p');
  if (event.target.value !== '' && event.target.parentElement.parentElement.lastElementChild.className === "obrigatoria" && event.target.id !== "data") {
    event.target.parentElement.parentElement.removeChild(event.target.parentElement.parentElement.lastElementChild)
  } else if (event.target.value === '' && event.target.parentElement.parentElement.lastElementChild.className !== "obrigatoria" && event.target.id !== "data") {
    mensagemObrigatoria.innerHTML = "*Preenchimento Obrigatorio"
    mensagemObrigatoria.classList.add('obrigatoria');
    event.target.parentElement.parentElement.appendChild(mensagemObrigatoria);
  }
}

function montaDiv() {
  const obrigatoriosAtivos = document.querySelectorAll('.obrigatoria');
  if (obrigatoriosAtivos.length === 0 && body.lastElementChild.className !== "cvMontado") {
    const divMontada = document.createElement('div');
    divMontada.innerHTML = `<h2>Meu currículo</h2>
    <hr>
    <h3>Informações Pessoais</h3>
    <p>${nome.value},CPF:${cpf.value} - ${email.value}</p><br>
    <p>Endereço:${logradouro.value},${cidade.value}/${estado}, ${moradia.value}</p>
    <hr>
    <h4>Informações Profissionais</h4>
    <hr>
    <p>${resume.value}</p><br>
    <p>cargo atual: ${cargo.value}</p><br>
    <p>Descrição: ${descricao.value}</p><br>
    <p>Início em: ${data.value}</p>`
    divMontada.classList.add('cvMontado');
    body.appendChild(divMontada);
  }
}

function removeDiv() {

}

function defineEstado(event) {
  estado = event.target.value;
  console.log(estado);
}

data.addEventListener('keyup', dataValida);
botaoEnviar.addEventListener('click', interrompido);
botaoEnviar.addEventListener('click', verificacoes);
inputsMain.addEventListener('click', informaErros);
inputsCareira.addEventListener('click', informaErros);
inputsMain.addEventListener('keyup', removeInfoErro);
inputsCareira.addEventListener('keyup', removeInfoErro);
botaoEnviar.addEventListener('click', montaDiv);
botaoResetar.addEventListener('click', removeDiv);
estado.addEventListener('change', defineEstado);