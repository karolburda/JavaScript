// Zadanie 2 Grupa B
const btnAlarm = document.querySelector('#btn-zglos-alarm');
const kolejkaSor = document.querySelector('#kolejka-sor');

if (btnAlarm && kolejkaSor) {
  btnAlarm.addEventListener('click', function() {
    const wybranyKod = document.querySelector('input[name="kod-pilnosci"]:checked');
    if (wybranyKod) {
      const nowyAlert = document.createElement('li');
      nowyAlert.classList.add('wpis-sor-pilny');
      nowyAlert.textContent = `ALERT MEDYCZNY KOD: ${wybranyKod.value}`;
      kolejkaSor.prepend(nowyAlert);
    }
  });
}
