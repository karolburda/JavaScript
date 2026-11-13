# Szybka pomoc ogólna: Tworzenie i usuwanie węzłów

Podręczna ściąga składniowa i organizacyjna do pracy na lekcji w module 06.

---

## 1. Struktura katalogu zadania

Każde zadanie w katalogu `nauka/` posiada przygotowane pliki startowe oraz folder ze wzorcowym rozwiązaniem.

| Ścieżka | Rola pliku |
|:--------|:-----------|
| `zadanie_X/index.html` | Struktura szkieletu HTML, formularze, przyciski akcji i kontenery wyjściowe. |
| `zadanie_X/style.css` | Gotowe style CSS, klasy aktywne i układ graficzny. |
| `zadanie_X/script.js` | Szablon kodu JavaScript z komentarzami `// KROK ...` lub `// TODO` do samodzielnego uzupełnienia. |
| `zadanie_X/rozwiazanie/` | Kompletne, w 100% działające rozwiązanie referencyjne (zajrzyj dopiero po własnej próbie!). |

---

## 2. Ściąga składniowa metod modułu

```javascript
// 1. Tworzenie elementu w pamięci
const nowyEl = document.createElement('nazwa_znacznika'); // np. 'li', 'div', 'button'

// 2. Konfiguracja zawartości i klas
nowyEl.textContent = 'Treść widoczna dla użytkownika';
nowyEl.classList.add('nazwa-klasy');
nowyEl.id = 'unikalne-id';

// 3. Wstawianie do drzewa DOM
rodzic.appendChild(nowyEl);                // Na koniec rodzica (ostatnie dziecko)
rodzic.prepend(nowyEl);                    // Na początek rodzica (pierwsze dziecko)
rodzic.insertBefore(nowyEl, przedElement); // Bezpośrednio przed wskazanym dzieckiem

// 4. Klonowanie elementu
const kopia = elementWzorcowy.cloneNode(true); // true = ze wszystkimi dziećmi

// 5. Usuwanie elementów
element.remove();                          // Nowoczesne usunięcie samego siebie
rodzic.removeChild(dziecko);               // Tradycyjne usunięcie dziecka z rodzica

// 6. Czyszczenie kontenera
kontener.replaceChildren();                // Błyskawiczne usunięcie wszystkich dzieci
```

---

## 3. Identyfikatory i selektory projektu Capstone (Zadanie 8)

Podczas realizacji zadania 8 (System zamówień / Magazyn) korzystaj ściśle z poniższego kontraktu DOM:
- `#nazwa-produktu` – pole tekstowe nazwy zamawianego towaru
- `#cena-produktu` – pole numeryczne z ceną jednostkową
- `#kategoria-produktu` – pole wyboru `<select>` kategorii
- `#btn-dodaj` – przycisk dodania pozycji do listy zamówień
- `#btn-wyczysc` – przycisk wyczyszczenia całego zamówienia
- `#lista-zamowien` – kontener `<ul>` przechowujący dynamicznie dodawane pozycje `<li>`
- `#suma-zamowienia` – element prezentujący aktualną sumę kwotową
- `#komunikat-status` – pole wyświetlające informacje o poprawnym dodaniu lub błędzie

---

## 4. Szybkie przypomnienie techniczne (Checklista ucznia)
1. **Narzędzia deweloperskie (DevTools):** Otwórz konsolę klawiszem `F12` (zakładka *Console* oraz *Elements*). Badaj drzewo DOM po kliknięciu przycisków, aby upewnić się, że nowe węzły faktycznie pojawiają się w strukturze.
2. **Ścieżki do plików:** Pamiętaj, że plik `script.js` jest podpięty w tym samym katalogu przez `<script src="script.js" defer></script>`.
3. **Wypis semestru 3:** W tym semestrze pracujemy na pełnym DOM API — zapomnij o `document.write`. Używamy `querySelector`, `addEventListener`, `createElement` i manipulacji właściwościami węzłów.
4. **Błędy składniowe:** Jeżeli po kliknięciu przycisku nic się nie dzieje, w 90% przypadków w konsoli pojawił się czerwony błąd `Uncaught TypeError: Cannot read properties of null` (oznacza to literówkę w ID elementu w `querySelector`).
