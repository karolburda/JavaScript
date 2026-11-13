// Zadanie 5: Konfigurator elementów mebli biurowych
const selectTyp = document.querySelector('#typ-mebla');
const btnDodaj = document.querySelector('#btn-dodaj-konfiguracje');
const kontenerZestawienia = document.querySelector('#zestawienie-mebli');

if (btnDodaj && selectTyp && kontenerZestawienia) {
  btnDodaj.addEventListener('click', function() {
    // Twoje rozwiazanie:
    // 1. Pobierz zaznaczone radio z selektorem 'input[name="material"]:checked'
    // 2. Utwórz kontener 'div' z klasą 'karta-specyfikacji'
    // 3. Utwórz 'h4' z klasą 'tytul-specyfikacji' i tekstem "Skonfigurowany element wyposażenia"
    // 4. Utwórz 'p' z tekstem "Typ: " + typ + " | Wykończenie: " + material
    // 5. Dołącz nagłówek i akapit do karty, a kartę do kontenerZestawienia
  });
}
