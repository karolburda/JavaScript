// Zadanie 5: Konfigurator elementów mebli biurowych 
const selectTyp = document.querySelector('#typ-mebla'); 
const btnDodaj = document.querySelector('#btn-dodaj-konfiguracje'); 
const kontenerZestawienia = document.querySelector('#zestawienie-mebli'); 
if (btnDodaj && selectTyp && kontenerZestawienia) { 
  btnDodaj.addEventListener('click', function() { 
    const zaznaczonyMaterial = document.querySelector('input[name="material"]:checked'); 
    if (zaznaczonyMaterial) { const typMebla = selectTyp.value; 
      const materialMebla = zaznaczonyMaterial.value; 
      const karta = document.createElement('div'); karta.classList.add('karta-specyfikacji'); 
      const tytul = document.createElement('h4'); tytul.classList.add('tytul-specyfikacji'); 
      tytul.textContent = 'Skonfigurowany element wyposażenia'; 
      const opis = document.createElement('p'); 
      opis.textContent = 'Typ: ' + typMebla + ' | Wykończenie: ' + materialMebla; 
      karta.appendChild(tytul); karta.appendChild(opis);
      kontenerZestawienia.appendChild(karta); 
    } 
  }); 
}