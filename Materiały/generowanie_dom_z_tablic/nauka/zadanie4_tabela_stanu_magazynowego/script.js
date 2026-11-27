// Zadanie 4: Tabela stanu magazynowego z warunkowym stylem progowym
const magazyn = [
  { nazwa: "Kabel HDMI 2.1 2m", stan: 18, cena: 29.90 },
  { nazwa: "Zasilacz ATX 650W Gold", stan: 3, cena: 349.00 },
  { nazwa: "Pasta termoprzewodząca 4g", stan: 25, cena: 19.50 },
  { nazwa: "Wentylator PWM 120mm", stan: 4, cena: 39.00 },
  { nazwa: "Klawiatura mechaniczna TKL", stan: 12, cena: 189.00 }
];
const tbody = document.querySelector("#tabela-danych tbody");
const podsumowanie = document.querySelector("#podsumowanie");
if(tbody && podsumowanie) {
  tbody.innerHTML="";
  let krytyczne=0;
  magazyn.forEach((pozycja)=>{
    const tr=document.createElement("tr");
    const tdNazwa=document.createElement("td");
    tdNazwa.textContent=pozycja.nazwa;
    const tdStan=document.createElement("td");
    tdStan.textContent=pozycja.stan+" szt.";
    const tdCena=document.createElement("td");
    tdCena.textContent=pozycja.cena.toFixed(2)+" zł";
    const tdStatus=document.createElement("td");
    if(pozycja.stan<5){
      tr.classList.add("blad-walidacji");
      tdStatus.textContent="Niski stan magazynowy";
      krytyczne++;
    }else{
      tdStatus.textContent="Stan optymalny";
    }
    tr.append(tdNazwa,tdStan,tdCena,tdStatus);
    tbody.appendChild(tr);
  });
  podsumowanie.textContent="Liczba pozycji wymagających zamówienia: "+krytyczne;
}