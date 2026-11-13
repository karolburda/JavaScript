// Zadanie 7: Kalkulator zamówień serwisu komputerowego 
const poleNazwa = document.querySelector('#nazwa-uslugi'); 
const poleCena = document.querySelector('#cena-uslugi'); 
const btnDodaj = document.querySelector('#btn-dodaj-usluge'); 
const listaUslug = document.querySelector('#lista-uslug'); 
const podsumowanieKosztu = document.querySelector('#podsumowanie-kosztu'); 
let lacznyKoszt = 0;
if (btnDodaj && poleNazwa && poleCena && listaUslug && podsumowanieKosztu) { 
  btnDodaj.addEventListener('click', function() { 
    const nazwaUslugi = poleNazwa.value.trim(); 
    const cenaUslugi = parseFloat(poleCena.value); 
    if (nazwaUslugi === '' || isNaN(cenaUslugi) || cenaUslugi <= 0) {
      return; 
    }
    const li = document.createElement('li');
    li.classList.add('pozycja-serwisowa');
    const span = document.createElement('span'); 
    span.textContent = nazwaUslugi + ' - ' + cenaUslugi + ' zł'; 
    const btnUsun = document.createElement('button'); 
    btnUsun.classList.add('btn-usun-pozycje'); 
    btnUsun.textContent = 'Usuń pozycję';
    btnUsun.addEventListener('click', function() { 
      lacznyKoszt -= cenaUslugi;
      li.remove();
      podsumowanieKosztu.textContent = 'Łączny koszt zamówionych usług serwisowych: ' + lacznyKoszt + ' zł';
    });
    li.appendChild(span); 
    li.appendChild(btnUsun); 
    listaUslug.appendChild(li);
    lacznyKoszt += cenaUslugi;
    podsumowanieKosztu.textContent = 'Łączny koszt zamówionych usług serwisowych: ' + lacznyKoszt + ' zł';
    poleNazwa.value = '';
    poleCena.value = '';
  });
}