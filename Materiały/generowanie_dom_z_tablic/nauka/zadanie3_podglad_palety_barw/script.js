// Zadanie 3: Próbnik barw z synchronizacją dwukierunkową

const palety = {
  niebieski: ["#1d4ed8", "#2563eb", "#3b82f6", "#60a5fa", "#93c5fd"],
  szmaragd: ["#047857", "#059669", "#10b981", "#34d399", "#6ee7b7"],
  bursztyn: ["#b45309", "#d97706", "#f59e0b", "#fbbf24", "#fcd34d"]
};
const selectUsluga=document.querySelector("#usluga");
const listaZamowien=document.querySelector("#lista-zamowien");
const podgladWynik=document.querySelector("#wynik");
const podsumowanie=document.querySelector("#podsumowanie");
function generujProbki(){
  if(!listaZamowien || !selectUsluga) return;
  listaZamowien.innerHTML="";
  const wybranaPaleta=selectUsluga.value;
  const kolory = palety[wybranaPaleta] || [];
  kolory.forEach((kolor)=>{
    const div=document.createElement("div");
    div.classList.add("probka-koloru");
    div.style.backgroundColor=kolor;
    div.dataset.kolor=kolor;
    listaZamowien.appendChild(div);
  });
}
if(selectUsluga && listaZamowien && podgladWynik && podsumowanie){
  selectUsluga.addEventListener("change", generujProbki);
  listaZamowien.addEventListener("click", function(event){
    if(event.target.classList.contains("probka-koloru")){
      const wybranyKolor=event.target.dataset.kolor;
      podgladWynik.style.backgroundColor = wybranyKolor;
      podgladWynik.textContent="Podgląd koloru: "+wybranyKolor;
      podsumowanie.textContent="Wybrany odcień: "+wybranyKolor;
    }
  });
  generujProbki();
}
