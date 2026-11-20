# Sprawdzian praktyczny: Tworzenie i usuwanie węzłów DOM

**Czas trwania:** do 80 minut  
**Punktacja:** Zadania 1–6: 6 × 10 pkt = 60 pkt. Zadanie 7: zadanie dodatkowe na ocenę celującą (poza pulą podstawową).  
**Forma pracy:** Praca samodzielna w edytorze kodu. Rozwiązania zapisuj w plikach `script.js` w katalogach poszczególnych zadań.

---

## Oficjalna Ściąga składniowa (Dozwolone API sprawdzianu)

Poniższe zestawienie stanowi jedyne dozwolone źródło wiedzy składniowej podczas trwania sprawdzianu. W treściach zadań nie występują fragmenty kodu ani nazwy metod API.

### 1. Tworzenie i wstawianie nowych elementów
- `document.createElement(nazwaZnacznika)` — tworzy w pamięci nowy obiekt elementu HTML o podanej nazwie znacznika (np. `'li'`, `'p'`, `'div'`).
- `kontener.appendChild(nowyElement)` — wstawia przekazany węzeł jako ostatnie dziecko wybranego kontenera nadrzędnego.
- `kontener.prepend(nowyElement)` — umieszcza przekazany węzeł na samym początku kontenera (przed pierwszym istniejącym dzieckiem).
- `kontener.insertBefore(nowyElement, wezelOdniesienia)` — wstawia nowy węzeł bezpośrednio przed wskazanym elementem odniesienia.

### 2. Konfiguracja właściwości węzła
- `element.textContent = wartoscTekstowa` — bezpiecznie ustawia lub odczytuje czystą zawartość tekstową elementu.
- `element.classList.add(nazwaKlasy)` — dodaje klasę stylów CSS do listy klas elementu.
- `element.classList.remove(nazwaKlasy)` — usuwa wskazaną klasę CSS z elementu.
- `element.classList.contains(nazwaKlasy)` — zwraca wartość logiczną określającą obecność danej klasy.

### 3. Usuwanie elementów z drzewa dokumentu
- `element.remove()` — natychmiast usuwa wskazany element z drzewa dokumentu.
- `rodzic.removeChild(dziecko)` — tradycyjna metoda odpinająca wskazany element potomny od jego rodzica.
- `kontener.replaceChildren()` — usuwa wszystkie elementy potomne znajdujące się wewnątrz kontenera.

### 4. Badanie struktury potomków
- `kontener.children` — kolekcja zawierająca wyłącznie elementy potomne kontenera.
- `kontener.children.length` — liczba elementów potomnych.
- `kontener.firstElementChild` / `kontener.lastElementChild` — odwołanie do pierwszego lub ostatniego elementu potomnego.

---

## Zasady organizacyjne i ocena
1. Każde zadanie posiada plik `index.html`, `style.css` oraz szablon `script.js`.
2. Ocenie podlega logiczne działanie skryptu, manipulacja węzłami DOM oraz obsługa zdarzeń.
3. Przed oddaniem sprawdź konsolę przeglądarki (`F12`), aby wyeliminować błędy wykonania.
