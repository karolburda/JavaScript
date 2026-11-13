// Zadanie 3: Menu kawiarni
const poleNazwa = document.querySelector('#nazwa-napoju');
const podglad = document.querySelector('#etykieta-podgladu');
const btnZatwierdz = document.querySelector('#btn-zatwierdz-pozycje');
const listaMenu = document.querySelector('#lista-menu');

if (poleNazwa && podglad) {
  poleNazwa.addEventListener('input', function() {
    const wartosc = poleNazwa.value;
    
    if (wartosc.trim() !== '') {
      podglad.textContent = 'Podgląd pozycji: ' + wartosc;
    } else {
      podglad.textContent = 'Podgląd: Czekam na wpisanie nazwy napoju...';
    }
  });
}
if (btnZatwierdz && listaMenu && poleNazwa && podglad) {
  btnZatwierdz.addEventListener('click', function() {
    const nazwaNapoju = poleNazwa.value;
    if (nazwaNapoju.trim() !== '') {
      const nowaPozycja = document.createElement('li');
      nowaPozycja.classList.add('pozycja-menu');
      nowaPozycja.textContent = 'Napój deserowy: ' + nazwaNapoju;
      listaMenu.appendChild(nowaPozycja);
      poleNazwa.value = '';
      podglad.textContent = 'Podgląd: Czekam na wpisanie nazwy napoju...';
    }
  });
}