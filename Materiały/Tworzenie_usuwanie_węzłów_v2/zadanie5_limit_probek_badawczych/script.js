// Zadanie 5 Grupa B
const poleProbki = document.querySelector('#nr-probki');
const btnZaladuj = document.querySelector('#btn-zaladuj-probke');
const komora = document.querySelector('#komora-wirowki');
const statusWirowki = document.querySelector('#status-wirowki');

if (btnZaladuj && poleProbki && komora && statusWirowki) {
  btnZaladuj.addEventListener('click', function() {
    // Twoje rozwiazanie
    if (komora.children.length >= 6) {
      statusWirowki.textContent = 'Osiągnięto limit wirówki! Maksymalnie 6 próbek w rotorze.';
      statusWirowki.classList.add('alarm-rotora');
      return;
    }


    
    const nrProbki = poleProbki.value.trim();
    if (nrProbki !== '') {
      const nowaFiolka = document.createElement('li');
      nowaFiolka.classList.add('fiolka-badawcza');
      nowaFiolka.textContent = `Próbka laboratoryjna ID: ${nrProbki}`;
      komora.appendChild(nowaFiolka);

      poleProbki.value = '';
      statusWirowki.textContent = '';
      statusWirowki.classList.remove('alarm-rotora');
    }
  });
}