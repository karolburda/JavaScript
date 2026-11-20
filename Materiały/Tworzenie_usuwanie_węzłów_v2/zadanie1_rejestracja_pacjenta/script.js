// Zadanie 1 Grupa B
const selectPoradnia = document.querySelector('#wybor-poradni');
const btnZarejestruj = document.querySelector('#btn-zarejestruj');
const rejestrWizyt = document.querySelector('#rejestr-wizyt');


if (btnZarejestruj && selectPoradnia && rejestrWizyt) {
  btnZarejestruj.addEventListener('click', function() {
    const wybranaPoradnia = selectPoradnia.value;
    const nowyWpis = document.createElement('p');
    nowyWpis.classList.add('wpis-medyczny');
    nowyWpis.textContent = `Skierowanie pacjenta do: ${wybranaPoradnia}`;
    rejestrWizyt.appendChild(nowyWpis);
  });
}