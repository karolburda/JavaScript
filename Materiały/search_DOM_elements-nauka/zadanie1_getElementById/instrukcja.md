# Zadanie 1 – Wyszukiwanie elementu po `id`

## Cel

Nauczysz się wyszukiwać elementy HTML za pomocą metody `getElementById()` i zmieniać ich
zawartość tekstową oraz podstawowe style.

---

## Przydatne (teoria)

- `document.getElementById("nazwaId")` – zwraca element o podanym atrybucie `id` lub `null` jeśli nie istnieje.
- Uwaga: **nie piszemy `#`** przed nazwą id (to tylko notacja CSS).
- `element.textContent = "tekst"` – ustawia nową treść tekstową elementu.
- `element.style.color = "wartość"` – zmienia kolor tekstu (wartości jak w CSS: `"red"`, `"#3498db"`, `"rgb(0,128,0)"`).
- `element.style.backgroundColor = "wartość"` – zmienia kolor tła.
- `console.log(element)` – wyświetla znaleziony element w konsoli przeglądarki (F12).

---

## Kroki – wykonaj po kolei

Otwórz plik `script.js`. Znajdziesz w nim komentarze z numerami kroków. Pisz kod bezpośrednio pod każdym komentarzem.

### Krok 1 – Znajdź nagłówek i wypisz go w konsoli
Wyszukaj element o `id="naglowek"` i zapisz go do zmiennej `naglowek`.  
Następnie wypisz tę zmienną w konsoli.  
Otwórz przeglądarkę (F12 → Console) i sprawdź, czy widzisz element HTML.

### Krok 2 – Zmień tekst nagłówka
Zmień właściwość `textContent` znalezionego elementu na dowolny nowy tekst, np. "Moja pierwsza zmiana DOM".

### Krok 3 – Znajdź akapit i zmień jego kolor
Wyszukaj element o `id="opis"`.  
Zmień kolor jego tekstu na wybrany przez Ciebie kolor.

### Krok 4 – Zmień kolor tła boksu informacyjnego
Wyszukaj element o `id="boks"`.  
Zmień jego kolor tła (`backgroundColor`).

### Krok 5 – Wyszukaj nieistniejący element
Spróbuj wyszukać element o `id="nieistniejacy"`.  
Wypisz wynik w konsoli. Co zwraca metoda, gdy element nie istnieje?  
Zapisz swój wniosek w komentarzu w `script.js`.

---

## Oczekiwany efekt

Po uruchomieniu `index.html` w przeglądarce:
- Nagłówek `h1` ma nowy tekst.
- Akapit ma zmieniony kolor tekstu.
- Boks ma zmieniony kolor tła.
- W konsoli widać wypisany element HTML oraz `null` dla nieistniejącego elementu.
