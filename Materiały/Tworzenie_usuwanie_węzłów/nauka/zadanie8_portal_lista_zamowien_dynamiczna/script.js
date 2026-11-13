// Pobranie elementów DOM portalu (Retencja z modułu 05 - Zero Regresji)
const suwakSzerokosc = document.querySelector("#suwak-szerokosc");
const probnikAkcent = document.querySelector("#probnik-akcent");
const suwakKrycie = document.querySelector("#suwak-krycie");
const btnZatwierdz = document.querySelector("#btn-zatwierdz");
const btnResetPortal = document.querySelector("#btn-reset-portal");

const banerGlowny = document.querySelector("#baner-glowny");
const strefaSla = document.querySelector("#strefa-sla");
const podsumowanie = document.querySelector("#podsumowanie");
const komunikatPodsumowanie = document.querySelector("#komunikat-podsumowanie");

// Logika personalizacji wizualnej (moduł 05)
if (suwakSzerokosc && banerGlowny) {
  suwakSzerokosc.addEventListener("input", () => {
    banerGlowny.style.width = `${suwakSzerokosc.value}px`;
  });
}

if (probnikAkcent && podsumowanie) {
  probnikAkcent.addEventListener("input", () => {
    podsumowanie.style.borderColor = probnikAkcent.value;
    podsumowanie.style.color = probnikAkcent.value;
  });
}

if (suwakKrycie && strefaSla) {
  suwakKrycie.addEventListener("input", () => {
    strefaSla.style.opacity = suwakKrycie.value / 100;
  });
}

if (btnZatwierdz && komunikatPodsumowanie) {
  btnZatwierdz.addEventListener("click", () => {
    komunikatPodsumowanie.textContent = `Podsumowanie konfiguracji: baner ${suwakSzerokosc.value}px, akcent ${probnikAkcent.value}, krycie SLA ${suwakKrycie.value}%`;
  });
}

if (btnResetPortal && banerGlowny && podsumowanie && strefaSla && komunikatPodsumowanie) {
  btnResetPortal.addEventListener("click", () => {
    banerGlowny.style.width = "";
    podsumowanie.style.borderColor = "";
    podsumowanie.style.color = "";
    strefaSla.style.opacity = "";

    suwakSzerokosc.value = "700";
    probnikAkcent.value = "#2563eb";
    suwakKrycie.value = "100";
    komunikatPodsumowanie.textContent = "Podsumowanie konfiguracji: styl domyślny portalu";
  });
}

// =====================================================================
// NOWA FUNKCJONALNOŚĆ MODUŁU 06: DYNAMICZNY REJESTR LICENCJI (DOM)
// =====================================================================
const poleNazwaLicencji = document.querySelector("#nazwa-licencji");
const selectWariant = document.querySelector("#wariant-licencji");
const poleCenaLicencji = document.querySelector("#cena-licencji");
const btnDodajLicencje = document.querySelector("#btn-dodaj-licencje");
const listaZamowien = document.querySelector("#lista-zamowien");
const podsumowanieLicencji = document.querySelector("#podsumowanie-licencji");

let sumaWartosci = 1200; // Początkowa kwota za Pakiet Podstawowy

// Podpięcie obsługi usuwania dla istniejącej pozycji startowej
if (listaZamowien && podsumowanieLicencji) {
  const startowyBtnUsun = listaZamowien.querySelector(".btn-usun-licencje");
  if (startowyBtnUsun) {
    startowyBtnUsun.addEventListener("click", function() {
      sumaWartosci -= 1200;
      if (sumaWartosci < 0) sumaWartosci = 0;
      startowyBtnUsun.closest("li").remove();
      podsumowanieLicencji.textContent = `Łączna wartość aktywnych licencji chmurowych: ${sumaWartosci} zł`;
    });
  }
}

if (btnDodajLicencje && poleNazwaLicencji && poleCenaLicencji && selectWariant && listaZamowien && podsumowanieLicencji) {
  btnDodajLicencje.addEventListener("click", function() {
    const nazwaLicencji = poleNazwaLicencji.value.trim();
    const wariant = selectWariant.value;
    const cena = parseFloat(poleCenaLicencji.value);

    // 1. Walidacja danych wejściowych
    if (nazwaLicencji === "" || isNaN(cena) || cena <= 0) {
      return;
    }

    // 2. Utworzenie elementu 'li' z klasą 'pozycja-zamowienia'
    const li = document.createElement("li");
    li.classList.add("pozycja-zamowienia");

    // 3. Utworzenie elementu 'span' z danymi licencji
    const span = document.createElement("span");
    span.textContent = `${nazwaLicencji} [${wariant}] — ${cena} zł`;

    // 4. Utworzenie przycisku 'button' z klasą 'btn-usun-licencje'
    const btnUsun = document.createElement("button");
    btnUsun.type = "button";
    btnUsun.classList.add("btn-usun-licencje");
    btnUsun.textContent = "Usuń licencję";

    // 5. Rejestracja zdarzenia 'click' na przycisku usuwania
    btnUsun.addEventListener("click", function() {
      sumaWartosci -= cena;
      if (sumaWartosci < 0) sumaWartosci = 0;
      li.remove();
      podsumowanieLicencji.textContent = `Łączna wartość aktywnych licencji chmurowych: ${sumaWartosci} zł`;
    });

    // 6. Dołączenie węzłów do 'li', a 'li' do #lista-zamowien
    li.appendChild(span);
    li.appendChild(btnUsun);
    listaZamowien.appendChild(li);

    // 7. Zwiększenie sumy i aktualizacja elementu #podsumowanie-licencji
    sumaWartosci += cena;
    podsumowanieLicencji.textContent = `Łączna wartość aktywnych licencji chmurowych: ${sumaWartosci} zł`;

    // 8. Wyczyszczenie pól formularza
    poleNazwaLicencji.value = "";
    poleCenaLicencji.value = "";
  });
}