// Zadanie 7 Grupa B
const selectBadanie = document.querySelector('#wybor-badania');
const poleCena = document.querySelector('#cena-badania');
const btnDodaj = document.querySelector('#btn-dodaj-badanie');
const listaBadan = document.querySelector('#lista-badan');
const sumaBadan = document.querySelector('#suma-badan');

let suma = 0;

if (btnDodaj && selectBadanie && poleCena && listaBadan && sumaBadan) {
  btnDodaj.addEventListener('click', function() {
    // Twoje rozwiazanie
    const nazwaBadania = selectBadanie.value;
    const cena = parseFloat(poleCena.value);

    

    const pozycja = document.createElement('li');
    pozycja.classList.add('pozycja-badania');

    
    const opis = document.createElement('span');
    opis.textContent = `${nazwaBadania} - ${cena} zł`;


    const btnUsun = document.createElement('button');
    btnUsun.type = 'button';
    btnUsun.classList.add('btn-zrezygnuj-badanie');
    btnUsun.textContent = 'Zrezygnuj z badania';

    btnUsun.addEventListener('click', function() {
      suma -= cena;
      pozycja.remove();
      sumaBadan.textContent = `Łączny koszt badań laboratoryjnych: ${suma} zł`;
    });

    pozycja.appendChild(opis);
    pozycja.appendChild(btnUsun);
    listaBadan.appendChild(pozycja);

    suma += cena;
    sumaBadan.textContent = `Łączny koszt badań laboratoryjnych: ${suma} zł`;

    poleCena.value = '';
  });
}