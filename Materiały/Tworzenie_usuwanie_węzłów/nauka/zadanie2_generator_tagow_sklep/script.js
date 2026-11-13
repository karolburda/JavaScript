// Zadanie 2: Kreator etykiet sklepowych
const poleRabatu = document.querySelector('#wartosc-rabatu');
const btnDodaj = document.querySelector('#btn-dodaj-etykiete');
const kontenerEtykiet = document.querySelector('#kontener-etykiet');

if (btnDodaj && poleRabatu && kontenerEtykiet) {
  btnDodaj.addEventListener('click', function() {
    const wartosc = poleRabatu.value;
    if (wartosc.trim() !== '') {
      const nowaEtykieta = document.createElement('span');
      nowaEtykieta.classList.add('etykieta-rabatu');
      nowaEtykieta.textContent = 'Rabat specjalny: -' + wartosc + '% na całą kategorię';
      kontenerEtykiet.prepend(nowaEtykieta);
    }
  });
}