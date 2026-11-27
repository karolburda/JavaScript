// Zadanie 6: Historia napraw warsztatowych z mechanizmem resetu
const naprawyPoczatkowe = [
  { usluga: "Wymiana klocków i tarcz hamulcowych", pojazd: "Ford Focus MK3", koszt: 420 },
  { usluga: "Serwis klimatyzacji i ozonowanie", pojazd: "Toyota Yaris", koszt: 210 },
  { usluga: "Wymiana rozrządu i pompy wody", pojazd: "Volkswagen Passat B8", koszt: 850 }
];
let naprawyRobocze = [...naprawyPoczatkowe];
const tbody = document.querySelector("#tabela-danych tbody");
const podsumowanie = document.querySelector("#podsumowanie");
const btnDodaj = document.querySelector("#btn-dodaj");
const btnUsun = document.querySelector("#btn-usun");
function renderujTabele() {
  if(!tbody || !podsumowanie) return;
  tbody.innerHTML="";
  naprawyRobocze.forEach((zlecenie)=>{
    const tr=document.createElement("tr");
    const tdUsluga=document.createElement("td");
    tdUsluga.textContent=zlecenie.usluga;
    const tdPojazd=document.createElement("td");
    tdPojazd.textContent=zlecenie.pojazd;
    const tdKoszt=document.createElement("td");
    tdKoszt.textContent=zlecenie.koszt+" zł";
    tr.appendChild(tdUsluga);
    tr.appendChild(tdPojazd);
    tr.appendChild(tdKoszt);
    tbody.appendChild(tr);
  });
  podsumowanie.textContent="Zarejestrowane zlecenia w kolejce warsztatu: "+naprawyRobocze.length;
}
if(tbody && podsumowanie && btnDodaj && btnUsun){
  btnDodaj.addEventListener("click", function(){
    naprawyRobocze.push({
      usluga:"Diagnostyka komputerowa i adaptacja",
      pojazd:"Skoda Octavia",
      koszt:150
    });
    renderujTabele();
  });
  btnUsun.addEventListener("click", function(){
    naprawyRobocze=[...naprawyPoczatkowe];
    renderujTabele();
  });
  renderujTabele();
}