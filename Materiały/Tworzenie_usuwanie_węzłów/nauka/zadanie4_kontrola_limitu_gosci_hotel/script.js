// Zadanie 4: Kontrola limitu gości hotelowych
const poleNazwisko = document.querySelector('#nazwisko-goscia'); 
const btnZamelduj = document.querySelector('#btn-zamelduj'); 
const listaGosci = document.querySelector('#lista-gosci'); 
const kontenerKomunikatu = document.querySelector('#komunikat-limitu'); 
if (btnZamelduj && poleNazwisko && listaGosci && kontenerKomunikatu) { 
  btnZamelduj.addEventListener('click', function() { 
    const nazwisko = poleNazwisko.value.trim(); 
    if (nazwisko === '') { 
      kontenerKomunikatu.innerHTML = ''; 
      const ostrzezenie = document.createElement('p'); 
      ostrzezenie.classList.add('komunikat-ostrzezenie'); 
      ostrzezenie.textContent = 'Wprowadź poprawne nazwisko gościa przed zatwierdzeniem'; 
      kontenerKomunikatu.appendChild(ostrzezenie); 
      return; 
    }
    if (listaGosci.children.length >= 5) { 
      kontenerKomunikatu.innerHTML = ''; 
      const ostrzezenie = document.createElement('p'); 
      ostrzezenie.classList.add('komunikat-ostrzezenie'); 
      ostrzezenie.textContent = 'Osiągnięto limit miejsc! Brak wolnych pokoi w obiekcie'; 
      kontenerKomunikatu.appendChild(ostrzezenie); 
      return; 
    }
    const nowyWpis = document.createElement('li'); 
    nowyWpis.classList.add('wpis-rezerwacji'); 
    nowyWpis.textContent = 'Gość hotelowy: ' + nazwisko; 
    listaGosci.appendChild(nowyWpis); poleNazwisko.value = '';
    kontenerKomunikatu.innerHTML = ''; }); 
  }
