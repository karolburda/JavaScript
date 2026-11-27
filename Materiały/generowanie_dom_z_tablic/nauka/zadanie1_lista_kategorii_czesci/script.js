// Zadanie 1: Dynamiczne tworzenie listy kategorii z tablicy 1D

const kategorie = [
  "Procesory i chłodzenie",
  "Płyty główne i pamięci RAM",
  "Karty graficzne",
  "Dyski SSD i zasilacze",
  "Obudowy i akcesoria"
];
const btnDodaj=document.querySelector("#btn-dodaj");
const listaZamowien=document.querySelector("#lista-zamowien");
if (btnDodaj && listaZamowien){
  btnDodaj.addEventListener("click", function (){
    listaZamowien.innerHTML="";
    const ul=document.createElement("ul");
    kategorie.forEach((kategoria)=>{
      const li=document.createElement("li");
      li.textContent = kategoria;
      ul.appendChild(li);
    });
    listaZamowien.appendChild(ul);
  });
}