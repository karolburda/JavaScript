# Wyszukiwanie i edycja elementów DOM w JavaScript

## 1. Czym jest DOM?

**DOM (Document Object Model)** to drzewiasty model dokumentu HTML dostępny w przeglądarce.
Gdy przeglądarka wczytuje stronę HTML, buduje **drzewo obiektów** – każdy tag HTML staje się węzłem (node), którym możemy manipulować za pomocą JavaScript.

```
document
└── html
    ├── head
    │   └── title
    └── body
        ├── h1#naglowek
        ├── ul.lista
        │   ├── li.element
        │   └── li.element.aktywny
        └── p
```

Punkt wejścia do drzewa DOM to zawsze obiekt `document`.

---

## 2. Wyszukiwanie elementów

### 2.1 `getElementById(id)` – po atrybucie `id`

Zwraca **pojedynczy** element z podanym `id` lub `null` jeśli nie istnieje.
`id` powinno być unikalne na stronie – to gwarancja, że metoda zwróci dokładnie jeden element.

```javascript
const naglowek = document.getElementById("naglowek");
console.log(naglowek); // <h1 id="naglowek">...</h1>
```

> ⚠️ Uwaga: **nie piszemy `#`** przed nazwą id – to tylko konwencja CSS.

---

### 2.2 `getElementsByClassName(nazwa)` – po klasie CSS

Zwraca **HTMLCollection** (żywą kolekcję) wszystkich elementów posiadających daną klasę.
HTMLCollection jest **żywa** – automatycznie się aktualizuje, gdy DOM się zmienia.

```javascript
const elementy = document.getElementsByClassName("aktywny");
// elementy[0], elementy[1], ... elementy.length
```

> ⚠️ Uwaga: **nie piszemy `.`** przed nazwą klasy.  
> HTMLCollection **nie ma** metod tablicowych jak `forEach` – do iteracji używamy klasycznej pętli `for` lub konwertujemy: `Array.from(elementy)`.

```javascript
// Klasyczna pętla for:
for (let i = 0; i < elementy.length; i++) {
  elementy[i].style.color = "red";
}

// Alternatywnie – konwersja na tablicę:
Array.from(elementy).forEach(el => el.style.color = "red");
```

---

### 2.3 `getElementsByTagName(tag)` – po nazwie tagu

Zwraca **HTMLCollection** wszystkich elementów o podanej nazwie tagu.

```javascript
const paragrafy = document.getElementsByTagName("p");
const listItems = document.getElementsByTagName("li");
```

---

### 2.4 `querySelector(selektor)` – pierwszy pasujący element ⭐

Zwraca **pierwszy** element pasujący do podanego **selektora CSS** lub `null`.  
To jedna z najpotężniejszych metod – akceptuje **dowolny selektor CSS**.

```javascript
// Po id (jak getElementById):
document.querySelector("#naglowek");

// Po klasie (pierwszy pasujący):
document.querySelector(".aktywny");

// Po tagu:
document.querySelector("p");

// Relacja rodzic–dziecko (zagnieżdżenie):
document.querySelector("ul li");
document.querySelector(".karta h2");

// Po atrybucie:
document.querySelector("input[type='text']");
document.querySelector("[data-typ='produkt']");

// Pseudoklasy CSS:
document.querySelector("li:first-child");
document.querySelector("li:last-child");
document.querySelector("tr:nth-child(2)");

// Kombinacje:
document.querySelector("p.opis");          // <p class="opis">
document.querySelector("nav > ul > li");   // bezpośrednie dzieci
```

> 💡 **Klucz do zrozumienia:** Jeśli znasz selektory CSS, znasz już argumenty `querySelector`!

---

### 2.5 `querySelectorAll(selektor)` – wszystkie pasujące elementy ⭐

Zwraca **NodeList** (statyczna lista) **wszystkich** elementów pasujących do selektora CSS.  
NodeList **posiada** metodę `forEach` – można po niej iterować bezpośrednio.

```javascript
// Wszystkie paragrafy:
document.querySelectorAll("p");

// Wszystkie elementy klasy:
document.querySelectorAll(".produkt");

// Pseudoklasy:
document.querySelectorAll("li:nth-child(odd)");
document.querySelectorAll("li:nth-child(even)");

// Po atrybucie data-*:
document.querySelectorAll("[data-typ]");
document.querySelectorAll("[data-typ='produkt']");

// Lista selektorów (operator ,):
document.querySelectorAll(".karta, .panel");

// Zagnieżdżone:
document.querySelectorAll(".menu li");

// Bezpośrednie dzieci:
document.querySelectorAll("ul > li");
```

**Iterowanie po NodeList:**

```javascript
const elementy = document.querySelectorAll(".produkt");

// forEach (NodeList obsługuje forEach bezpośrednio):
elementy.forEach(el => {
  el.style.backgroundColor = "yellow";
});

// Klasyczna pętla for:
for (let i = 0; i < elementy.length; i++) {
  elementy[i].style.color = "blue";
}
```

---

### 2.6 Porównanie metod wyszukiwania

| Metoda | Zwraca | Selektor CSS? | forEach? | Żywa? |
|--------|--------|:----:|:----:|:----:|
| `getElementById` | Jeden element lub `null` | Nie | – | – |
| `getElementsByClassName` | HTMLCollection | Nie | ❌ | ✅ |
| `getElementsByTagName` | HTMLCollection | Nie | ❌ | ✅ |
| `querySelector` | Jeden element lub `null` | ✅ | – | – |
| `querySelectorAll` | NodeList (statyczna) | ✅ | ✅ | ❌ |

---

## 3. Edycja elementów

### 3.1 Zmiana tekstu

```javascript
const el = document.getElementById("naglowek");

// textContent – tekst bez interpretacji HTML (bezpieczniejsze):
el.textContent = "Nowy tytuł strony";

// innerHTML – interpretuje tagi HTML:
el.innerHTML = "<strong>Pogrubiony</strong> tytuł";
```

> ⚠️ Używaj `innerHTML` ostrożnie – nigdy nie wstawiaj do niego danych od użytkownika!

---

### 3.2 Zmiana koloru i stylu

Dostęp przez właściwość `element.style`:

```javascript
const akapit = document.querySelector("p");

akapit.style.color = "red";                    // kolor tekstu
akapit.style.backgroundColor = "lightyellow";  // kolor tła
akapit.style.fontSize = "20px";                // rozmiar czcionki
akapit.style.fontWeight = "bold";              // pogrubienie
akapit.style.border = "2px solid navy";        // ramka
akapit.style.display = "none";                 // ukrycie elementu
```

> 💡 Właściwości CSS zapisane przez myślnik (np. `background-color`) w JS piszemy **camelCase** (`backgroundColor`).

---

### 3.3 Zarządzanie klasami CSS (`classList`)

Zamiast zmieniać style inline, często lepiej operować na klasach CSS:

```javascript
const el = document.querySelector(".karta");

el.classList.add("aktywny");        // dodaje klasę
el.classList.remove("ukryty");      // usuwa klasę
el.classList.toggle("zaznaczony");  // dodaje jeśli nie ma, usuwa jeśli ma
el.classList.contains("aktywny");   // zwraca true/false
el.classList.replace("stara", "nowa"); // zamienia klasę
```

---

## 4. Szukanie wewnątrz elementu (kontekst wyszukiwania)

`querySelector` i `querySelectorAll` można wywoływać **nie tylko na `document`**, ale na dowolnym elemencie – wtedy szukają tylko wewnątrz niego:

```javascript
const karta = document.querySelector(".karta");

// Szuka tylko wewnątrz elementu .karta:
const tytul = karta.querySelector("h2");
const opisy = karta.querySelectorAll("p");
```

To pozwala na precyzyjne wyszukiwanie w złożonych strukturach HTML.

---

## 5. Sprawdzanie wyników w konsoli

Zawsze sprawdzaj wyniki w **narzędziach deweloperskich** przeglądarki (F12 → Console):

```javascript
const el = document.getElementById("naglowek");
console.log(el);           // wyświetla element
console.log(el.textContent); // wyświetla tekst elementu

const lista = document.querySelectorAll("li");
console.log(lista.length); // liczba znalezionych elementów
```
