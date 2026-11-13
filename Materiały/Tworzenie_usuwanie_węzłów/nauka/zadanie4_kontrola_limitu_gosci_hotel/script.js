// Zadanie 4: Kontrola limitu gości hotelowych
const poleNazwisko = document.querySelector('#nazwisko-goscia');
const btnZamelduj = document.querySelector('#btn-zamelduj');
const listaGosci = document.querySelector('#lista-gosci');
const kontenerKomunikatu = document.querySelector('#komunikat-limitu');

if (btnZamelduj && poleNazwisko && listaGosci && kontenerKomunikatu) {
  btnZamelduj.addEventListener('click', function() {
    // Twoje rozwiazanie:
    // 1. Sprawdź czy poleNazwisko nie jest puste
    // 2. Sprawdź czy listaGosci.children.length >= 5
    //    - Jeśli tak: wyświetl ostrzeżenie w kontenerKomunikatu
    //    - Jeśli nie: utwórz element 'li', nadaj klasę 'wpis-rezerwacji',
    //      wstaw tekst "Gość hotelowy: " + nazwisko i dołącz metodą appendChild
  });
}
