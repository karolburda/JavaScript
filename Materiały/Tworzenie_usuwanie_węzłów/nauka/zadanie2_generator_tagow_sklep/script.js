// Zadanie 2: Kreator etykiet sklepowych
const poleRabatu = document.querySelector('#wartosc-rabatu');
const btnDodaj = document.querySelector('#btn-dodaj-etykiete');
const kontenerEtykiet = document.querySelector('#kontener-etykiet');

if (btnDodaj && poleRabatu && kontenerEtykiet) {
  btnDodaj.addEventListener('click', function() {
    // Twoje rozwiazanie:
    // 1. Odczytaj wartość z pola poleRabatu
    // 2. Utwórz element 'span'
    // 3. Dodaj klasę 'etykieta-rabatu'
    // 4. Ustaw textContent: "Rabat specjalny: -" + wartosc + "% na całą kategorię"
    // 5. Użyj kontenerEtykiet.prepend(...) aby dodać element na początek
  });
}
