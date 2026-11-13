// Zadanie 3: Menu kawiarni
const poleNazwa = document.querySelector('#nazwa-napoju');
const podglad = document.querySelector('#etykieta-podgladu');
const btnZatwierdz = document.querySelector('#btn-zatwierdz-pozycje');
const listaMenu = document.querySelector('#lista-menu');

if (poleNazwa && podglad) {
  poleNazwa.addEventListener('input', function() {
    // Twoje rozwiazanie: synchronizacja podglądu z polem wpisywania
  });
}

if (btnZatwierdz && listaMenu && poleNazwa) {
  btnZatwierdz.addEventListener('click', function() {
    // Twoje rozwiazanie:
    // 1. Utwórz element 'li'
    // 2. Dodaj klasę 'pozycja-menu'
    // 3. Ustaw tekst i wstaw metodą appendChild do listaMenu
    // 4. Zresetuj pole i etykietę podglądu
  });
}
