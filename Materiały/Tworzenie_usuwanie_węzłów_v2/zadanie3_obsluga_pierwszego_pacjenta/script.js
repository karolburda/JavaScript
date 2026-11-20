// Zadanie 3 Grupa B
const btnPrzyjmij = document.querySelector('#btn-przyjmij-pierwszego');
const poczekalnia = document.querySelector('#poczekalnia-zabiegowa');
const komunikat = document.querySelector('#komunikat-poczekalnia');

if (btnPrzyjmij && poczekalnia && komunikat) {
  btnPrzyjmij.addEventListener('click', function() {
    // Twoje rozwiazanie
    if (poczekalnia.firstElementChild) {
      poczekalnia.firstElementChild.remove();
    } else {
      komunikat.textContent = 'Wszyscy pacjenci w kolejce zostali już przyjęci.';
    }
  });
}