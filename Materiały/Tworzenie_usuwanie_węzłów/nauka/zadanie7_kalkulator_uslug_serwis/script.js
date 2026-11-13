// Zadanie 7: Kalkulator zamówień serwisu komputerowego
const poleNazwa = document.querySelector('#nazwa-uslugi');
const poleCena = document.querySelector('#cena-uslugi');
const btnDodaj = document.querySelector('#btn-dodaj-usluge');
const listaUslug = document.querySelector('#lista-uslug');
const podsumowanieKosztu = document.querySelector('#podsumowanie-kosztu');

let lacznyKoszt = 0;

if (btnDodaj && poleNazwa && poleCena && listaUslug && podsumowanieKosztu) {
  btnDodaj.addEventListener('click', function() {
    // Twoje rozwiazanie:
    // 1. Odczytaj nazwę i cenę usługi
    // 2. Utwórz element 'li' z klasą 'pozycja-serwisowa'
    // 3. Utwórz 'span' z tekstem usługi i ceny
    // 4. Utwórz 'button' z klasą 'btn-usun-pozycje' i tekstem "Usuń pozycję"
    // 5. Podepnij zdarzenie 'click' pod przycisk usuwania:
    //    - odejmij cenę od sumy lacznyKoszt
    //    - wywołaj li.remove()
    //    - zaktualizuj tekst w podsumowanieKosztu: "Łączny koszt zamówionych usług serwisowych: " + lacznyKoszt + " zł"
    // 6. Dołącz elementy do 'li', a 'li' do listaUslug
    // 7. Zwiększ lacznyKoszt i zaktualizuj podsumowanieKosztu
  });
}
