# Teoria: Dynamiczne generowanie widoku DOM na podstawie tablic i kolekcji danych

> ✦ **Materiały wspomagane AI** — treść działu powstała z udziałem narzędzi AI
> według programu i standardów INF.03; przed zajęciami weryfikuje ją nauczyciel.

## 1. Idea dynamicznego renderowania interfejsu użytkownika
W nowoczesnych aplikacjach internetowych widok strony (HTML) nie jest na stałe zakodowany w pliku źródłowym. Zamiast tego interfejs powstaje dynamicznie w przeglądarce na podstawie **struktur danych** przechowywanych w pamięci (tablic i obiektów).
Kiedy dane ulegają zmianie (np. po dodaniu produktu lub zmianie kryteriów wyszukiwania), skrypt JavaScript ponownie generuje odpowiednie elementy drzewa DOM.

---

## 2. Dynamiczne tworzenie list z tablic jednowymiarowych

Podstawowym scenariuszem jest wygenerowanie listy numerowanej (`<ol>`) lub punktowanej (`<ul>`) na podstawie prostej tablicy ciągów znaków lub liczb.

```javascript
const uslugi = ['Wymiana oleju', 'Diagnostyka silnika', 'Geometria zawieszenia'];
const lista = document.querySelector('#lista-zamowien');

// Krok 1: Wycyszczenie kontenera przed renderowaniem
lista.innerHTML = '';

// Krok 2: Iteracja i tworzenie węzłów
uslugi.forEach((usluga) => {
  const li = document.createElement('li');
  li.textContent = usluga;
  lista.appendChild(li);
});
```

**Po co to jest:**  
Czyszczenie kontenera (`lista.innerHTML = ''`) oraz iteracja po tablicy pozwalają na wygenerowanie dokładnie tylu elementów `<li>`, ile aktualnie znajduje się w zbiorze danych, eliminując konieczność ręcznego pisania powtarzalnego kodu HTML.

**Typowa pomyłka:**  
Zapomnienie o wyczyszczeniu kontenera przed pętlą. Przy wielokrotnym kliknięciu przycisku renderującego nowe elementy zostaną dopisane na końcu istniejącej listy, powielając jej zawartość.

---

## 3. Generowanie tabel danych na podstawie tablic obiektów

Gdy dysponujemy tablicą obiektów (rekordów), każdy obiekt odpowiada jednemu wierszowi (`<tr>`), a jego właściwości — poszczególnym komórkom (`<td>`).

```javascript
const produkty = [
  { id: 101, nazwa: 'Klocki hamulcowe', cena: 180, dostepny: true },
  { id: 102, nazwa: 'Tarcze hamulcowe', cena: 320, dostepny: false },
  { id: 103, nazwa: 'Płyn hamulcowy', cena: 45, dostepny: true }
];

const tbody = document.querySelector('#tabela-danych tbody');
tbody.innerHTML = '';

produkty.forEach((produkt) => {
  const tr = document.createElement('tr');

  const tdId = document.createElement('td');
  tdId.textContent = produkt.id;

  const tdNazwa = document.createElement('td');
  tdNazwa.textContent = produkt.nazwa;

  const tdCena = document.createElement('td');
  tdCena.textContent = produkt.cena.toFixed(2) + ' zł';

  const tdStatus = document.createElement('td');
  tdStatus.textContent = produkt.dostepny ? 'Dostępny' : 'Brak w magazynie';

  tr.append(tdId, tdNazwa, tdCena, tdStatus);
  tbody.appendChild(tr);
});
```

**Po co to jest:**  
Metoda `tr.append(...)` pozwala przekazać wiele utworzonych węzłów `<td>` za jednym razem, co przyspiesza i uczytelnia budowanie struktury wiersza tabeli.

**Typowa pomyłka:**  
Wstawianie wartości bezpośrednio do właściwości `innerHTML` komórki zamiast użycia `textContent`. Użycie `textContent` jest bezpieczniejsze i chroni stronę przed nieoczekiwanym zinterpretowaniem znaków specjalnych jako kodu HTML.

---

## 4. Optymalizacja renderowania: `DocumentFragment`

Gdy tablica zawiera setki lub tysiące elementów, dołączanie każdego węzła pojedynczo przez `tbody.appendChild(tr)` bezpośrednio do dokumentu powoduje wielokrotne przeliczanie układu strony (tzw. reflow i repaint). Rozwiązaniem jest bufor w pamięci: `DocumentFragment`.

```javascript
const fragment = document.createDocumentFragment();

produkty.forEach((produkt) => {
  const tr = document.createElement('tr');
  const tdNazwa = document.createElement('td');
  tdNazwa.textContent = produkt.nazwa;
  tr.appendChild(tdNazwa);
  
  // Dołączamy wiersz do bufora w pamięci (poza widocznym drzewem DOM)
  fragment.appendChild(tr);
});

// Jednorazowe wstawienie całej paczki wierszy do żywego drzewa DOM
tbody.appendChild(fragment);
```

**Po co to jest:**  
`DocumentFragment` to lekki, niewidoczny kontener w pamięci RAM, który po wstawieniu do dokumentu ulega „rozpakowaniu” — do drzewa DOM trafiają wyłącznie jego dzieci, a sama przeglądarka wykonuje tylko jedno przeliczenie geometrii strony.

**Typowa pomyłka:**  
Próba ponownego użycia tego samego obiektu `DocumentFragment` bez ponownego wypełnienia. Po wywołaniu `tbody.appendChild(fragment)` fragment staje się pusty, ponieważ wszystkie jego węzły potomne zostały przeniesione do docelowego elementu.

---

## 5. Szablony HTML i literały szablonowe (`innerHTML`)

Alternatywnym i bardzo popularnym sposobem generowania widoku jest złożenie kodu HTML jako ciągu znaków za pomocą literałów szablonowych (ang. *template literals* z użyciem grawisów `` `...` ``) oraz metody `map()` połączonej z `join('')`.

```javascript
const kontenerKarty = document.querySelector('#katalog-kart');

const htmlKarty = produkty.map((produkt) => `
  <article class="karta-produktu">
    <h3>${produkt.nazwa}</h3>
    <p class="cena">Cena: ${produkt.cena} zł</p>
    <button class="btn-akcja" data-id="${produkt.id}">Kup teraz</button>
  </article>
`).join('');

kontenerKarty.innerHTML = htmlKarty;
```

**Po co to jest:**  
Literały szablonowe pozwalają na zapis wielowierszowego, czytelnego kodu HTML zbliżonego do standardowych szablonów witryny, unikając dziesiątek wywołań `document.createElement()`.

**Typowa pomyłka:**  
Zapomnienie o wywołaniu `.join('')` na końcu tablicy wynikowej metody `.map()`. Wstawienie samej tablicy do `innerHTML` spowoduje niepożądane pojawienie się przecinków między elementami na stronie.

---

## 6. Generowanie kart z mediami i atrybutami dynamicznymi

W arkuszach egzaminacyjnych INF.03 często pojawia się zadanie wyrenderowania kafelków ze zdjęciami oraz opisem.

```javascript
const artykuly = [
  { id: 1, tytul: 'Warsztat mobilny', imgId: 101, opis: 'Szybki dojazd do klienta.' },
  { id: 2, tytul: 'Diagnostyka komputerowa', imgId: 102, opis: 'Nowoczesny sprzęt OBD2.' }
];

const katalog = document.querySelector('#katalog');
katalog.innerHTML = '';

artykuly.forEach((art) => {
  const card = document.createElement('div');
  card.className = 'karta-uslugi';

  const img = document.createElement('img');
  img.src = `https://picsum.photos/id/${art.imgId}/300/200`;
  img.alt = art.tytul;
  img.width = 300;
  img.height = 200;

  const h4 = document.createElement('h4');
  h4.textContent = art.tytul;

  const p = document.createElement('p');
  p.textContent = art.opis;

  card.append(img, h4, p);
  katalog.appendChild(card);
});
```

**Po co to jest:**  
Przypisanie właściwości `width`, `height` oraz `alt` jest kluczowe dla dostępności cyfrowej (a11y) oraz zapobiega skakaniu układu strony (*Cumulative Layout Shift*) podczas ładowania grafiki.

**Typowa pomyłka:**  
Podawanie wymiarów jako ciągów z dopiskiem `'px'` we właściwościach obiektu DOM (`img.width = '300px'`). Właściwości `width` i `height` elementu HTMLImageElement przyjmują wartości liczbowe w pikselach.

---

## 7. Obsługa zdarzeń na elementach generowanych dynamicznie

Elementy tworzone w pętli mogą posiadać własne procedury obsługi zdarzeń. Istnieją dwie główne strategie:

### Sposób 1: Podpinanie nasłuchiwacza bezpośrednio podczas tworzenia elementu
```javascript
const btn = document.createElement('button');
btn.textContent = 'Szczegóły';
btn.addEventListener('click', () => {
  pokazSzczegoly(produkt.id);
});
```

### Sposób 2: Delegowanie zdarzeń na nadrzędnym kontenerze
W przypadku generowania interfejsu przez `innerHTML` nasłuchiwacz umieszcza się na statycznym elemencie nadrzędnym, weryfikując cel kliknięcia za pomocą właściwości `event.target`.

```javascript
const lista = document.querySelector('#lista-zamowien');

lista.addEventListener('click', (event) => {
  const przycisk = event.target.closest('button.btn-usun');
  if (!przycisk) return;

  const idDoUsuniecia = Number(przycisk.dataset.id);
  usunPozycje(idDoUsuniecia);
});
```

**Po co to jest:**  
Delegowanie zdarzeń pozwala zarejestrować pojedynczy nasłuchiwacz na elemencie nadrzędnym, który bez problemu obsłuży kliknięcia nawet w setki elementów utworzonych później w skrypcie.

**Typowa pomyłka:**  
Próba pobrania wygenerowanych przycisków za pomocą `document.querySelectorAll()` przed momentem ich wstawienia do drzewa DOM. Wyszukiwanie selektorem zwróci wtedy pustą listę węzłów (`NodeList`).
