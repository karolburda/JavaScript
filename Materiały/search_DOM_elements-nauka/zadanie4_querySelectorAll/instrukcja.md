# Zadanie 4 – `querySelectorAll()` – wszystkie pasujące elementy

## Cel

Nauczysz się używać `querySelectorAll()` z różnorodnymi selektorami CSS, aby wyszukiwać
**zbiory elementów** i modyfikować je w pętli. Odkryjesz różnicę między NodeList a HTMLCollection.

---

## Przydatne (teoria)

- `document.querySelectorAll(selektor)` – zwraca **NodeList** ze **wszystkimi** pasującymi elementami.
- Zwraca **statyczną** NodeList (nie aktualizuje się po zmianie DOM).
- NodeList **posiada** metodę `forEach` – nie trzeba konwertować!
- Akceptuje **dowolny selektor CSS**, w tym:
  - `"p"` – wszystkie paragrafy
  - `".produkt"` – wszystkie elementy klasy
  - `"li:nth-child(odd)"` / `"li:nth-child(even)"` – co drugi element
  - `"[data-typ]"` – elementy z danym atrybutem (bez wartości)
  - `"[data-typ='vip']"` – elementy z konkretną wartością atrybutu
  - `".karta, .panel"` – lista selektorów (operator `,` – alternatywa)
  - `"ul > li"` – bezpośrednie dzieci
  - `".sekcja p"` – paragrafy wewnątrz .sekcja
- `nodeList.length` – liczba elementów w NodeList.
- Konwersja na tablicę (gdy potrzebne metody `.map`, `.filter` itd.): `Array.from(nodeList)`.

---

## Kroki – wykonaj po kolei

### Krok 1 – Wszystkie paragrafy
Wyszukaj wszystkie elementy `<p>` na stronie.
Wypisz w konsoli NodeList i jej długość (`length`).
Za pomocą `forEach` zmień kolor tekstu każdego paragrafu.

### Krok 2 – Elementy po klasie
Wyszukaj wszystkie elementy z klasą `"wiersz"`.
W każdym z nich zmień kolor tła (użyj `forEach`).
Sprawdź: ile elementów znaleziono?

### Krok 3 – Pseudoklasa `:nth-child(odd/even)` – naprzemienne kolorowanie
Wyszukaj wszystkie nieparzyste wiersze tabeli: `"table tr:nth-child(odd)"`.
Zmień ich kolor tła na jeden kolor.
Wyszukaj parzyste: `"table tr:nth-child(even)"`.
Zmień ich kolor tła na inny kolor.
Efekt: klasyczne „zebra stripes" (paskowanie tabeli).

### Krok 4 – Selektor po atrybucie `data-*`
Wyszukaj wszystkie elementy posiadające **jakikolwiek** atrybut `data-priorytet` (selektor: `"[data-priorytet]"`).
Wypisz je w konsoli.
Następnie wyszukaj elementy z `data-priorytet="wysoki"` i zmień ich kolor obramowania (border).

### Krok 5 – Lista selektorów (operator `,`)
Wyszukaj jednocześnie elementy z klasą `"kategoria-a"` i `"kategoria-b"`
używając jednego wywołania `querySelectorAll` z operatorem `,`.
Zmień kolor tekstu wszystkich znalezionych elementów.

### Krok 6 – Bezpośrednie dzieci (`>`)
Wyszukaj tylko bezpośrednie dzieci `li` elementu `ul#glowna-lista` (selektor: `"ul#glowna-lista > li"`).
Zmień ich kolor tekstu.
Sprawdź w konsoli – czy zagnieżdzone `li` z `ul.podlista` zostały wybrane?

### Krok 7 – Konwersja NodeList na tablicę
Wyszukaj wszystkie elementy `.produkt` i skonwertuj NodeList na tablicę (`Array.from`).
Użyj `filter()` aby wyfiltrować tylko te, których `textContent` zawiera słowo „VIP" (`includes`).
Wypisz przefiltrowane elementy w konsoli.

---

## Oczekiwany efekt

- Tabela ma naprzemienne kolory wierszy.
- Paragrafy mają zmieniony kolor tekstu.
- Elementy VIP są wyróżnione obramowaniem.
- W konsoli widać wyniki wyszukiwań i przefiltrowaną listę.
