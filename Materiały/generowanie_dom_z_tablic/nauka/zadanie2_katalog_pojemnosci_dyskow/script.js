// Zadanie 2: Filtrowanie dysków SSD według pojemności

const dyski = [
    { nazwa: "GoodRam CX400", pojemnosc: 256, cena: 95 },
    { nazwa: "Kingston NV2", pojemnosc: 500, cena: 160 },
    { nazwa: "Crucial BX500", pojemnosc: 480, cena: 145 },
    { nazwa: "Lexar NM620", pojemnosc: 1000, cena: 290 },
    { nazwa: "Samsung 980 Pro", pojemnosc: 2000, cena: 580 }
  ];
  const suwakIlosc=document.querySelector("#ilosc");
  const podsumowanie=document.querySelector("#podsumowanie");
  const listaZamowien=document.querySelector("#lista-zamowien");
  function renderujDyski(maxPojemnosc){
    listaZamowien.innerHTML="";
    const przefiltrowane=dyski.filter((dysk)=>dysk.pojemnosc<=maxPojemnosc);
    przefiltrowane.forEach((dysk)=>{
      const div=document.createElement("div");
      div.classList.add("karta-dysku");
      div.textContent=`${dysk.nazwa}-${dysk.pojemnosc}GB(${dysk.cena}zł)`;
      listaZamowien.appendChild(div);
    });
  }
  if(suwakIlosc && podsumowanie && listaZamowien){
    suwakIlosc.addEventListener("input", function(){
      const wartosc=Number(suwakIlosc.value);
      podsumowanie.textContent=`Maksymalna pojemność:${wartosc}GB`;
      renderujDyski(wartosc);
    });
    renderujDyski(Number(suwakIlosc.value));
  }