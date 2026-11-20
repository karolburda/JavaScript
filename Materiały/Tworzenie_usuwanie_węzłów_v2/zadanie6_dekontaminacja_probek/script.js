// Zadanie 6 Grupa B
const poleMaterialu = document.querySelector('#opis-materialu');
const btnWprowadz = document.querySelector('#btn-wprowadz-material');
const btnSterylizuj = document.querySelector('#btn-sterylizuj-komore');
const rejestr = document.querySelector('#rejestr-komory');

if (btnWprowadz && poleMaterialu && rejestr) {
  btnWprowadz.addEventListener('click', function() {
    // Twoje rozwiazanie
    const opis = poleMaterialu.value.trim();
    if (opis !== '') {
      const stanSterylny = rejestr.querySelector('.stan-sterylny');
      if (stanSterylny) {
        stanSterylny.remove();
      }

      
      const nowyWpis = document.createElement('div');
      nowyWpis.classList.add('wpis-skazenia');
      nowyWpis.textContent = `Zgłoszenie materiału biologicznego: ${opis}`;
      rejestr.appendChild(nowyWpis);







      poleMaterialu.value = '';
    }
  });
}

if (btnSterylizuj && rejestr) {
  btnSterylizuj.addEventListener('click', function() {
    // Twoje rozwiazanie
    rejestr.innerHTML = '';

    const komunikatSterylny = document.createElement('p');
    komunikatSterylny.classList.add('stan-sterylny');
    komunikatSterylny.textContent = 'Komora zdekontaminowana. Pełna sterylność mikrobiologiczna.';
    rejestr.appendChild(komunikatSterylny);
  });
}