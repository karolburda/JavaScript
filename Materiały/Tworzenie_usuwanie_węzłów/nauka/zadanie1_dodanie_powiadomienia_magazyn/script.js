// Zadanie 1: Dodawanie powiadomienia magazynowego
const btnDodaj = document.querySelector('#btn-dodaj');
const listaPowiadomien = document.querySelector('#lista-powiadomien');

if (btnDodaj && listaPowiadomien) {
  btnDodaj.addEventListener('click', function() {
    const nowePowiadomienie = document.createElement('p');
    nowePowiadomienie.classList.add('wpis-powiadomienia');
    nowePowiadomienie.textContent = 'Przyjęto nową dostawę paletową na magazyn główny.';
    listaPowiadomien.appendChild(nowePowiadomienie);
  });
}