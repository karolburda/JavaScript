// Zadanie 6: Rejestr historii napraw warsztatu
const poleNaprawy = document.querySelector('#opis-naprawy');
const btnDodaj = document.querySelector('#btn-dodaj-naprawe');
const btnResetuj = document.querySelector('#btn-resetuj-historie');
const kontenerHistorii = document.querySelector('#historia-napraw');

if (btnDodaj && poleNaprawy && kontenerHistorii) {
  btnDodaj.addEventListener('click', function() {
    // Twoje rozwiazanie:
    // 1. Sprawdź i usuń element stanu pustego (.stan-pusty)
    // 2. Utwórz element 'div' z klasą 'wpis-naprawy'
    // 3. Wpisz tekst "Naprawa pojazdu: " + nazwaUslugi i dodaj metodą appendChild
  });
}

if (btnResetuj && kontenerHistorii) {
  btnResetuj.addEventListener('click', function() {
    // Twoje rozwiazanie:
    // 1. Wyczyszczenie całej zawartości metodą replaceChildren()
    // 2. Utworzenie 'p' z klasą 'stan-pusty' i tekstem "Brak zarejestrowanych napraw w bieżącej sesji warsztatu."
  });
}
