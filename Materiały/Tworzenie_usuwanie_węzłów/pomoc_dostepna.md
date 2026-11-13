Wersja materiału dydaktycznego przygotowana z myślą o uczniach preferujących jednoznaczny, dosłowny przekaz instruktażowy.

Ten przewodnik zawiera wyłącznie proste i dosłowne wskazówki. Każde zadanie wykonuj krok po kroku według poniższej procedury.

---

## 1. Słowniczek pojęć modułu

- **Węzeł (Node):** Pojedynczy element w strukturze strony, na przykład znacznik `<div>`, akapit `<p>` lub sam tekst.
- **createElement:** Polecenie w JavaScript, które tworzy nowy znacznik w pamięci komputera.
- **appendChild:** Polecenie, które wstawia utworzony element na sam koniec wybranego pojemnika na stronie.
- **prepend:** Polecenie, które wstawia utworzony element na sam początek wybranego pojemnika.
- **remove:** Polecenie, które natychmiast usuwa wskazany element ze strony.
- **textContent:** Właściwość przechowująca czysty tekst znajdujący się wewnątrz danego znacznika.

---

## 2. Stała kolejność pracy z każdym zadaniem

1. Otwórz plik `instrukcja.md` w katalogu danego zadania i przeczytaj polecenie.
2. Otwórz plik `script.js` w edytorze kodu.
3. Znajdź linie oznaczone komentarzem `// Twoje rozwiazanie` lub `// KROK 1: ...`.
4. Wpisz wymagany kod JavaScript, zapisz plik i otwórz `index.html` w przeglądarce internetowej.
5. Sprawdź działanie przycisków na stronie.
6. Jeśli program działa niepoprawnie, porównaj swój kod z plikiem w katalogu `rozwiazanie/`.

---

## 3. Dokładny schemat tworzenia elementu (Krok po kroku)

### Krok 1: Wyszukaj pojemnik, do którego dodasz element
Użyj polecenia `querySelector` z identyfikatorem pojemnika.
```javascript
const pojemnik = document.querySelector('#lista-zamowien');
```

### Krok 2: Utwórz nowy znacznik
Podaj nazwę znacznika w cudzysłowie bez nawiasów ostrych.
```javascript
const nowaPozycja = document.createElement('li');
```

### Krok 3: Wpisz tekst do nowego znacznika
Przypisz treść do właściwości `textContent`.
```javascript
nowaPozycja.textContent = 'Nowy produkt';
```

### Krok 4: Umieść element na stronie
Użyj metody `appendChild`, aby element pojawił się w oknie przeglądarki.
```javascript
pojemnik.appendChild(nowaPozycja);
```

---

## 4. Dokładny schemat usuwania elementu

### Krok 1: Wskaż element do usunięcia
Możesz go pobrać za pomocą selektora lub przekazać ze zdarzenia kliknięcia.
```javascript
const staryElement = document.querySelector('.komunikat-stary');
```

### Krok 2: Sprawdź, czy element istnieje na stronie
Instrukcja warunkowa zapobiega powstawaniu błędów.
```javascript
if (staryElement) {
    staryElement.remove();
}
```

---

## 5. Dostępność cyfrowa stron (Zasady a11y)

1. Każde pole formularza `<input>` musi posiadać przypisaną etykietę `<label>` połączoną atrybutem `for` odpowiadającym atrybutowi `id`.
2. Przyciski usuwania muszą mieć czytelny napis, na przykład „Usuń pozycję”, a nie sam samotny symbol krzyżyka.
3. Zachowaj logiczną hierarchię nagłówków na stronie: najpierw główny nagłówek `<h1>`, a wewnątrz sekcji nagłówki `<h2>` oraz `<h3>`.
4. Kolor tekstu dynamicznych komunikatów musi mieć wysoki kontrast względem tła, aby był dobrze widoczny dla każdego użytkownika.
