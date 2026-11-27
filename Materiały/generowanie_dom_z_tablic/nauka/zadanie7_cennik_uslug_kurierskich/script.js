// Zadanie 7: Kalkulator cennika kurierskiego
const gabaryty = [
  { id: "gabaryt-a", nazwa: "Gabaryt A - Mała paczka", cena: 14.00, imgId: 1060, wymiary: "8 x 38 x 64 cm do 5 kg" },
  { id: "gabaryt-b", nazwa: "Gabaryt B - Średnia paczka", cena: 18.50, imgId: 1062, wymiary: "19 x 38 x 64 cm do 15 kg" },
  { id: "gabaryt-c", nazwa: "Gabaryt C - Duża paczka", cena: 24.00, imgId: 1069, wymiary: "41 x 38 x 64 cm do 25 kg" }
];

let wybranyGabaryt = null;

const listaZamowien = document.querySelector("#lista-zamowien");
const checkEkspres = document.querySelector("#regulamin");
const podsumowanie = document.querySelector("#podsumowanie");

// Twoje rozwiazanie
// KROK 1: Wygeneruj karty za pomocą map() i innerHTML w #lista-zamowien.
//         Każda karta to <article class="karta-gabarytu" data-id="..."> z img (https://picsum.photos/id/{imgId}/300/200),
//         nagłówkiem h3, opisem wymiarów, ceną i buttonem .btn-wybierz
// KROK 2: Napisz funkcję aktualizujPodsumowanie():
//         - sprawdź, czy wybranyGabaryt nie jest null
//         - dolicz 15 zł, jeśli checkEkspres.checked
//         - wypisz: "Wybrano: " + nazwa + " | Koszt wysyłki: " + suma.toFixed(2) + " zł"
// KROK 3: Podepnij zdarzenie click pod #lista-zamowien (delegowanie dla .btn-wybierz):
//         - odszukaj gabaryt po id
//         - zaktualizuj wybranyGabaryt
//         - dodaj klasę .aktywny do wybranej karty, usuń z innych
//         - wywołaj aktualizujPodsumowanie()
// KROK 4: Podepnij zdarzenie change pod checkEkspres
