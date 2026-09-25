// ============================================================
// Zadanie 7 – Interaktywny panel produktów (podsumowujące)
// ============================================================
// Połącz wszystkie poznane techniki: getElementById, querySelector,
// querySelectorAll, textContent, style, classList, addEventListener
// ============================================================

// KROK 1 – Wyszukuj i wypisuj elementy
// Wyszukaj wszystkie .karta, wypisz w konsoli ich liczbę
// Dla każdej karty wypisz tytuł (querySelector("h2") wewnątrz karty)


// --- Pomocnicza funkcja: aktualizacja licznika koszyka ---
// Napisz funkcję aktualizujLicznik():
//   - zlicza karty z klasą "w-koszyku"
//   - aktualizuje textContent elementu #licznik-koszyka


// KROK 2 – Przycisk "Dodaj do koszyka" na każdej karcie
// Każdemu .btn-koszyk dodaj nasłuchiwanie "click"
// Po kliknięciu:
//   - pobierz kartę nadrzędną (przycisk jest wewnątrz .karta)
//     wskazówka: przycisk.closest(".karta") lub przycisk.parentElement
//   - przełącz klasę "w-koszyku" na karcie (toggle)
//   - jeśli karta MA klasę "w-koszyku": zmień tekst przycisku na "✓ W koszyku"
//   - jeśli karta NIE MA klasy "w-koszyku": przywróć tekst "Dodaj do koszyka"
//   - wywołaj aktualizujLicznik()


// KROK 3 – Filtrowanie wg kategorii
// Wyszukaj #btn-wszystkie, #btn-elektronika, #btn-akcesoria
// Napisz funkcję filtrujKarty(kategoria):
//   - dla każdej .karta sprawdź atrybut data-kategoria
//   - jeśli kategoria === "wszystkie" LUB karta.dataset.kategoria === kategoria:
//       pokaż kartę (display = "")
//   - w przeciwnym wypadku: ukryj kartę (display = "none")
//   - zaktualizuj klasę "aktywny-filtr" na przyciskach filtru
// Przypisz tę funkcję do każdego przycisku filtru


// KROK 4 – Zaznacz wszystkie / Odznacz wszystkie
// #btn-zaznacz-wszystko: dodaj klasę "w-koszyku" każdej karcie,
//   zaktualizuj teksty przycisków .btn-koszyk i licznik

// #btn-odznacz-wszystko: usuń klasę "w-koszyku" ze wszystkich kart,
//   przywróć teksty przycisków .btn-koszyk i licznik
