// Zadanie 5: Konfigurator stanowisk z zależnością wieloargumentową
const pakietyWyposazenia = {
  programista: [
    { nazwa: "Monitor 27 cali 4K IPS", cena: 1400 },
    { nazwa: "Fotel ergonomiczny z podparciem lędźwiowym", cena: 950 },
    { nazwa: "Stacja dokująca USB-C Thunderbolt", cena: 650 }
  ],
  ksiegowosc: [
    { nazwa: "Monitor 24 cale FHD z filtrem niebieskiego światła", cena: 650 },
    { nazwa: "Klawiatura numeryczna bezprzewodowa", cena: 140 },
    { nazwa: "Niszczarka dokumentów poziom P-4", cena: 420 }
  ],
  grafik: [
    { nazwa: "Monitor 32 cale z kalibracją barw DCI-P3", cena: 2800 },
    { nazwa: "Tablet graficzny z piórkiem indukcyjnym", cena: 890 },
    { nazwa: "Ramię obrotowe na dwa monitory", cena: 350 }
  ]
};
const selectUsluga=document.querySelector("#usluga");
const inputIlosc=document.querySelector("#ilosc");
const btnDodaj=document.querySelector("#btn-dodaj");
const listaZamowien=document.querySelector("#lista-zamowien");
const podsumowanie=document.querySelector("#podsumowanie");
if (btnDodaj && selectUsluga && inputIlosc && listaZamowien && podsumowanie){
  btnDodaj.addEventListener("click", function(){
    const profil=selectUsluga.value;
    let liczbaStanowisk=parseInt(inputIlosc.value, 10);
    if(isNaN(liczbaStanowisk) || liczbaStanowisk<1){
      liczbaStanowisk=1;
    }
    listaZamowien.innerHTML="";
    let suma=0;
    const elementy=pakietyWyposazenia[profil] || [];
    elementy.forEach((element)=>{
      const koszt=element.cena*liczbaStanowisk;
      suma+=koszt;
      const div=document.createElement("div");
      div.classList.add("element-zestawu");
      div.textContent=`${element.nazwa} x ${liczbaStanowisk} - łączny koszt:${koszt} zł`;
      listaZamowien.appendChild(div);
    });
    podsumowanie.textContent=`Łączna wartość zamówienia: ${suma.toFixed(2)} zł dla stanowisk w liczbie: ${liczbaStanowisk}`;
  });
}