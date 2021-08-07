const states = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'RJN', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'];


document.addEventListener('DOMContentLoaded', function() {
  let elems = document.querySelectorAll('select');
  let instances = M.FormSelect.init(elems, 'select-list');
});

const stateCombo = document.querySelector('#state-combo');
for (let i of states) {
  const stateOptions = document.createElement('option');
  stateOptions.value = i;
  stateOptions.innerHTML = i;
  stateCombo.appendChild(stateOptions);
}

document.addEventListener('DOMContentLoaded', function() {
  let elems = document.querySelectorAll('.datepicker');
  let instances = M.Datepicker.init(elems, {
    autoClose: true,
    format: 'dd/mm/yyyy',
  });
});

document.addEventListener('DOMContentLoaded', function() {
  let elems = document.querySelectorAll('.autocomplete');
  let instances = M.Autocomplete.init(elems, {
    limit: '1',
  })
})
