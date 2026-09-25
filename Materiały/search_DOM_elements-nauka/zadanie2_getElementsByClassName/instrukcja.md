# Zadanie 2 – Wyszukiwanie elementów po klasie CSS

## Cel

Nauczysz się wyszukiwać grupy elementów za pomocą metody `getElementsByClassName()`.
Zastosujesz pętlę do modyfikacji wielu elementów jednocześnie i poznasz specyfikę obiektu HTMLCollection.

---

## Przydatne (teoria)

- `document.getElementsByClassName("nazwaKlasy")` – zwraca **HTMLCollection** wszystkich elementów o podanej klasie. Uwaga: **nie piszemy `.`** przed nazwą klasy.
- HTMLCollection działa **jak tablica** – masz dostęp przez indeks (`kolekcja[0]`, `kolekcja[1]`...) i właściwość `length`.
- HTMLCollection **nie posiada** metody `forEach`! Używaj klasycznej pętli `for`.
- Jeśli chcesz użyć `forEach`, najpierw skonwertuj na tablicę: `Array.from(kolekcja)`.
- `element.style.color` – zmiana koloru tekstu.
- `element.style.backgroundColor` – zmiana koloru tła.
- `element.textContent` – odczyt lub zmiana tekstu elementu.

---

## Kroki – wykonaj po kolei

Otwórz plik `script.js`. Pisz kod pod wskazanymi komentarzami.

### Krok 1 – Znajdź wszystkie karty i wypisz kolekcję w konsoli
Wyszukaj elementy o klasie `"karta"` i zapisz wynik do zmiennej `karty`.  
Wypisz zmienną w konsoli (F12). Sprawdź: ile elementów znaleziono? Jak wyglądają w konsoli?

### Krok 2 – Dostęp do konkretnego elementu w kolekcji
Wypisz w konsoli **pierwszy** i **ostatni** element z kolekcji (użyj indeksowania i właściwości `length`).

### Krok 3 – Pętla: zmień kolor tła wszystkich kart
Za pomocą klasycznej pętli `for` zmień kolor tła (`backgroundColor`) każdej karty.

### Krok 4 – Zaznacz tylko wyróżnione elementy
Wyszukaj elementy o klasie `"wyroznienie"` i zmień kolor ich tekstu.  
Ile elementów zostanie znalezionych?

### Krok 5 – Konwersja i forEach
Wyszukaj ponownie wszystkie elementy o klasie `"karta"`.  
Skonwertuj wynik na tablicę za pomocą `Array.from(...)`.  
Użyj `forEach` do dodania do `textContent` każdej karty informacji o jej numerze  
(wskazówka: w `forEach` masz dostęp do indeksu jako drugi argument).

---

## Oczekiwany efekt

Po uruchomieniu `index.html` w przeglądarce:
- Wszystkie karty mają zmieniony kolor tła.
- Elementy z klasą `wyroznienie` mają wyróżniony kolor tekstu.
- Każda karta zawiera w tekście swój numer (np. "Karta 1 [nr: 0]").
- W konsoli widać HTMLCollection i wypisane elementy.
