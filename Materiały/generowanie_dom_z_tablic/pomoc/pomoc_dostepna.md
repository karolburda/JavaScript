# Pomoc dydaktyczna: Przewodnik krok po kroku

Wersja materiału dydaktycznego przygotowana z myślą o uczniach preferujących jednoznaczny, dosłowny przekaz instruktażowy.

## 1. Słowniczek pojęć tego działu

- **Pętla renderująca** — instrukcja powtarzająca operację tworzenia elementów HTML dla każdego elementu znajdującego się w tablicy.
- **Węzeł potomny** — nowy element HTML tworzony w pamięci za pomocą metody `document.createElement()`.
- **Bufor DocumentFragment** — wirtualny pojemnik w pamięci podręcznej, który gromadzi wiele elementów przed ich wspólnym wstawieniem na stronę.
- **Interpolacja tekstu** — wstawianie wartości zmiennych wewnątrz szablonu HTML za pomocą zapisu `${zmienna}`.

---

## 2. Kolejność postępowania podczas pracy z zadaniem

Wykonuj czynności dokładnie w poniższej kolejności:

1. Otwórz plik `instrukcja.md` znajdujący się w folderze danego zadania.
2. Przeczytaj sekcję dotyczącą celu zadania oraz wymaganych identyfikatorów elementów.
3. Otwórz plik `index.html` w edytorze kodu i odszukaj komentarze `<!-- KROK N: ... -->`.
4. Otwórz plik `script.js` i odszukaj miejsce oznaczone komentarzem `// Twoje rozwiazanie`.
5. Uruchom plik `index.html` w przeglądarce internetowej i przetestuj działanie aplikacji.
6. W przypadku wątpliwości porównaj swój kod z plikami w folderze `rozwiazanie/`.

---

## 3. Algorytm generowania elementów w drzewie dokumentu

Wykonaj kolejne kroki w kodzie JavaScript:

### Krok 1: Pobranie kontenera docelowego
Wyszukaj element na stronie, w którym mają pojawić się nowe dane.
Użyj metody `document.querySelector('#lista-zamowien')` lub `document.querySelector('#tabela-danych')`.

### Krok 2: Opróżnienie zawartości kontenera
Usuń wszystkie stare elementy z kontenera.
Wpisz instrukcję `kontener.innerHTML = ""` bezpośrednio przed rozpoczęciem przetwarzania danych.

### Krok 3: Przejście przez elementy tablicy
Zastosuj pętlę `dane.forEach((element) => { ... })` lub `for (const element of dane) { ... }`.
Wewnątrz pętli masz dostęp do bieżącego elementu kolekcji.

### Krok 4: Utworzenie nowego elementu
Utwórz nowy znacznik HTML za pomocą `const wiersz = document.createElement('tr')`.
Nigdy nie twórz elementów bez przypisania ich do zmiennej.

### Krok 5: Uzupełnienie treści i atrybutów
Wpisz tekst do elementu za pomocą właściwości `wiersz.textContent`.
W przypadku grafiki uzupełnij właściwości `img.src` oraz `img.alt`.

### Krok 6: Wstawienie elementu do dokumentu
Dołącz utworzony element do kontenera za pomocą instrukcji `kontener.appendChild(wiersz)`.
Zapisz plik i odśwież widok strony w przeglądarce.

---

## 4. Zasady dostępności cyfrowej (a11y) w dynamicznym widoku

- Każdy generowany obrazek `<img>` musi posiadać niepusty atrybut `alt` opisujący jego treść.
- Tabele generowane z tablic obiektów muszą posiadać sekcję `<thead>` z nagłówkami `<th>`.
- Wszystkie przyciski akcji generowane w pętli muszą zawierać zrozumiały tekst informujący o ich funkcji.
- Formularze powiązane z filtrowaniem danych muszą posiadać etykiety `<label>` powiązane z polami za pomocą atrybutu `for`.
