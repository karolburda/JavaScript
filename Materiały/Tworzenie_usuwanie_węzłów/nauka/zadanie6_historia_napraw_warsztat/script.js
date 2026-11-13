// Zadanie 6: Rejestr historii napraw warsztatu 
const poleNaprawy = document.querySelector('#opis-naprawy'); 
const btnDodaj = document.querySelector('#btn-dodaj-naprawe'); 
const btnResetuj = document.querySelector('#btn-resetuj-historie'); 
const kontenerHistorii = document.querySelector('#historia-napraw'); 
if (btnDodaj && poleNaprawy && kontenerHistorii) { 
  btnDodaj.addEventListener('click', function() { 
    const nazwaUslugi = poleNaprawy.value.trim(); 
    if (nazwaUslugi !== '') { 
      const stanPusty = kontenerHistorii.querySelector('.stan-pusty'); 
      if (stanPusty) { 
        stanPusty.remove(); 
      } 
      const nowyWpis = document.createElement('div'); 
      nowyWpis.classList.add('wpis-naprawy'); 
      nowyWpis.textContent = 'Naprawa pojazdu: ' + nazwaUslugi; 
      kontenerHistorii.appendChild(nowyWpis);
      poleNaprawy.value = '';
    }
  });
}
if (btnResetuj && kontenerHistorii) { 
  btnResetuj.addEventListener('click', function() { 
    kontenerHistorii.replaceChildren(); 
    const nowyStanPusty = document.createElement('p'); 
    nowyStanPusty.classList.add('stan-pusty'); 
    nowyStanPusty.textContent = 'Brak zarejestrowanych napraw w bieżącej sesji warsztatu'; 
    kontenerHistorii.appendChild(nowyStanPusty);
  });
}