# Zadanie 3 – `querySelector()` – potęga selektorów CSS

## Cel

Nauczysz się używać metody `querySelector()` z **różnorodnymi selektorami CSS**, aby precyzyjnie
wyszukiwać elementy w drzewie DOM. Odkryjesz, że znajomość CSS bezpośrednio przekłada się na
umiejętność korzystania z tej metody.

---

## Przydatne (teoria)

- `document.querySelector(selektor)` – zwraca **pierwszy** element pasujący do selektora CSS lub `null`.
- Jako argument podajemy **dowolny selektor CSS** – taki sam jak w arkuszu stylów:
  - Po id: `"#naglowek"`
  - Po klasie: `".aktywny"`
  - Po tagu: `"p"`
  - Po zagnieżdżeniu: `".menu li"`, `".karta h2"`
  - Po atrybucie: `"input[type='text']"`, `"[data-typ]"`, `"[data-typ='produkt']"`
  - Po pseudoklasach: `"li:first-child"`, `"li:last-child"`, `"tr:nth-child(2)"`
  - Kombinacje: `"p.uwaga"` (paragraf z klasą), `"nav > ul > li"` (bezpośrednie dzieci)
- Szukanie **wewnątrz elementu** (nie całego dokumentu):  
  `const kontener = document.querySelector(".lista");`  
  `const pierwszyLi = kontener.querySelector("li");`
- `element.textContent` – zmiana tekstu.
- `element.style.color` / `element.style.backgroundColor` – zmiana koloru.

---

## Nawiązanie do CSS

💡 Pamiętasz selektory CSS z poprzednich zajęć? Wszystkie działają tu tak samo!  
Jeśli w CSS napisałbyś `.menu li:first-child { color: red; }`,  
to w JS napiszesz `document.querySelector(".menu li:first-child").style.color = "red";`

---

## Kroki – wykonaj po kolei

Otwórz plik `script.js` i uzupełniaj kod pod kolejnymi komentarzami.

### Krok 1 – Selektor po `id` i po tagu
- Znajdź nagłówek `h1` używając selektora po `id`.
- Zmień jego tekst.
- Znajdź **pierwszy** paragraf na stronie używając selektora po tagu `"p"`.
- Zmień kolor jego tekstu.

### Krok 2 – Selektor po klasie
- Znajdź element z klasą `"baner"` i zmień jego kolor tła.
- Znajdź element z klasą `"baner"` a wewnątrz niego element `span`.
  - Zmień tekst tego `span`.

### Krok 3 – Selektor zagnieżdżony (relacja rodzic–dziecko)
- Znajdź **pierwszy** element `li` wewnątrz listy `.menu` (selektor: `".menu li"`).
- Zmień kolor tekstu tego elementu.
- Znajdź bezpośredniego potomka `>` – pierwszy `li` będący bezpośrednim dzieckiem `ul.menu` (selektor: `"ul.menu > li"`).
- Sprawdź w konsoli – czy to ten sam element?

### Krok 4 – Selektor po atrybucie
- Znajdź pole `input` z atrybutem `type="text"` i zmień jego `placeholder`.
- Znajdź element z atrybutem `data-typ="vip"` i zmień kolor jego tła.

### Krok 5 – Pseudoklasy CSS
- Znajdź **pierwsze** `li` w liście `.produkty` używając `:first-child`. Zmień kolor tekstu.
- Znajdź **ostatnie** `li` używając `:last-child`. Zmień kolor tła.
- Znajdź **drugie** `li` używając `:nth-child(2)`. Pogrub tekst (`fontWeight`).

### Krok 6 – Wyszukiwanie wewnątrz elementu (kontekst)
- Znajdź element `.profil` i zapisz do zmiennej.
- Na tym elemencie wywołaj `querySelector("h2")` i zmień tekst nagłówka profilu.
- Na tym samym elemencie wywołaj `querySelector("p")` i zmień kolor tekstu.

---

## Oczekiwany efekt

Strona wyraźnie zmienia wygląd po załadowaniu: nagłówki, kolory, teksty i style są 
modyfikowane przez JS, każda modyfikacja wykonana innym rodzajem selektora.
