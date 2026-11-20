// Zadanie 4 Grupa B
const btnPowiel = document.querySelector('#btn-powiel-stanowisko');
const planLab = document.querySelector('#plan-laboratorium');
const wzorzec = document.querySelector('.stanowisko-wzorzec');

if (btnPowiel && planLab && wzorzec) {
  btnPowiel.addEventListener('click', function() {
    // Twoje rozwiazanie
    const sklonowaneStanowisko = wzorzec.cloneNode(true);
    planLab.appendChild(sklonowaneStanowisko);
  });
}