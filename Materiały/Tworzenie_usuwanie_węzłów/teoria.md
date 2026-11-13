# Teoria: Tworzenie i usuwanie węzłów w modelu DOM

> ✦ **Materiały wspomagane AI** — treść działu powstała z udziałem narzędzi AI
> według programu i standardów INF.03; przed zajęciami weryfikuje ją nauczyciel.

Drzewo DOM (Document Object Model) jest obiektową reprezentacją dokumentu HTML w pamięci przeglądarki. Do tej pory manipulowaliśmy elementami, które istniały już w kodzie HTML od momentu wczytania strony. W tym module poznasz metody umożliwiające programowe tworzenie zupełnie nowych znaczników w locie, wpinanie ich w dowolne miejsce hierarchii dokumentu oraz ich bezśladowe usuwanie.

---

## 1. Cykl życia węzła: Pamięć vs Widok dokumentu

Tworzenie nowego elementu w JavaScript składa się z trzech odrębnych kroków:
1. **Wyprodukowanie węzła w pamięci podręcznej** (element istnieje w zmiennej JavaScript, lecz nie jest jeszcze widoczny na stronie).
2. **Konfiguracja właściwości elementu** (ustawienie tekstu, klas CSS, atrybutów `id`, `src`, `href`, rejestracja zdarzeń `addEventListener`).
3. **Wpięcie węzła do drzewa DOM** (przekazanie elementu do metody kontenera nadrzędnego, co wywołuje przerysowanie w oknie przeglądarki).

---

## 2. Tworzenie elementów: `document.createElement()` i `document.createTextNode()`

### 2.1. Metoda `document.createElement(tagName)`
Podstawowa metoda fabryczna obiektu `document`. Przyjmuje jako argument nazwę znacznika HTML (np. `'div'`, `'p'`, `'li'`, `'button'`) i zwraca nowo utworzony obiekt elementu.

```javascript
const nowyElement = document.createElement('li');
nowyElement.textContent = 'Książka: Czysty kod';
nowyElement.classList.add('element-listy');
```

- **Po co to jest:** Umożliwia dynamiczne generowanie znaczników HTML w odpowiedzi na działania użytkownika lub w pętli przetwarzającej tablicę danych, bez konieczności ponownego ładowania strony.
- **Typowa pomyłka:** Podawanie nawiasów ostrych w nazwie znacznika, np. `document.createElement('<li>')`. Prawidłowy zapis to sama nazwa bez nawiasów: `document.createElement('li')`. Przeglądarka utworzy nieprawidłowy węzeł `<<li>></<li>>`, który zepsuje strukturę HTML.

### 2.2. Węzły tekstowe: `document.createTextNode(tekst)`
Tworzy samodzielny węzeł tekstowy bez otaczającego go znacznika HTML.

```javascript
const wezelTekstowy = document.createTextNode('Tylko czysty tekst');
```

- **Po co to jest:** Przydaje się w zaawansowanych operacjach na drzewie węzłów, gdy zachodzi potrzeba precyzyjnego dołączenia fragmentu tekstu obok istniejących węzłów potomnych.
- **Typowa pomyłka:** Próba ustawiania klas CSS lub atrybutów na węźle tekstowym (np. `wezelTekstowy.classList.add('aktywny')`). Węzeł tekstowy nie jest elementem (`Element`), lecz węzłem typu `Text`, dlatego nie posiada właściwości takich jak `classList` czy `id`. W codziennej praktyce najczęściej używa się po prostu właściwości `.textContent` na elemencie nadrzędnym.

---

## 3. Bezpieczeństwo i wydajność: `textContent` vs `innerHTML`

Wiele osób początkujących próbuje tworzyć elementy poprzez doklejanie ciągów znaków do `innerHTML`:

```javascript
// ODRADZANA PRAKTYKA:
kontener.innerHTML += '<div class="wpis">' + wpisUzytkownika + '</div>';
```

Dlaczego jest to zła praktyka na egzaminie INF.03 i w profesjonalnym programowaniu?
1. **Zagrożenie XSS (Cross-Site Scripting):** Jeżeli `wpisUzytkownika` zawiera złośliwy kod (np. `<img src="x" onerror="alert(1)">`), przeglądarka go zinterpretuje i wykona.
2. **Niszczenie stanu DOM:** Użycie `+=` na `innerHTML` zmusza przeglądarkę do całkowitego usunięcia wszystkich istniejących wewnątrz dzieci, ponownego sparsowania całego kodu HTML i ponownego utworzenia obiektów. W tym procesie bezpowrotnie giną podpięte wcześniej listenery zdarzeń (`addEventListener`) oraz stan formularzy (np. zaznaczone checkboxy).
3. **Czystość kodu:** Użycie `document.createElement()` wraz z `element.textContent` zapewnia 100% odporności na XSS, ponieważ tekst jest traktowany czysto dosłownie i nigdy nie zostanie zinterpretowany jako kod HTML.

- **Po co to jest:** Stosowanie `document.createElement()` i `.textContent` gwarantuje pełne bezpieczeństwo danych wprowadzanych przez użytkownika oraz zachowuje istniejące listenery zdarzeń wewnątrz kontenera.
- **Typowa pomyłka:** Zapominanie o ustawieniu `.textContent` i pozostawianie pustego znacznika, bądź używanie `innerHTML` do wstawiania pojedynczego słowa.

---

## 4. Wstawianie elementów do drzewa DOM

Po skonfigurowaniu elementu w pamięci należy umieścić go w wybranym węźle rodzica.

### 4.1. `rodzic.appendChild(dziecko)`
Dołącza przekazany węzeł jako **ostatnie dziecko** wskazanego elementu rodzica.

```javascript
const lista = document.querySelector('#lista-zamowien');
const nowyPunkt = document.createElement('li');
nowyPunkt.textContent = 'Mysz bezprzewodowa USB';

lista.appendChild(nowyPunkt);
```

- **Po co to jest:** Standardowa, uniwersalna metoda dodawania elementów na koniec listy lub kontenera.
- **Typowa pomyłka:** Próba przekazania ciągu tekstowego zamiast węzła, np. `lista.appendChild('zwykły tekst')`. Metoda `appendChild` akceptuje wyłącznie obiekty węzłów (`Node`). Przekazanie tekstu spowoduje błąd wykonania `TypeError: Failed to execute 'appendChild' on 'Node': parameter 1 is not of type 'Node'`.

### 4.2. `rodzic.prepend(elementLubTekst)`
Wstawia jeden lub wiele węzłów (albo ciągów znaków) na sam **początek** kontenera rodzica (przed jego pierwszym obecnym dzieckiem).

```javascript
const komunikat = document.createElement('div');
komunikat.classList.add('powiadomienie');
komunikat.textContent = 'Najnowsze powiadomienie!';

kontener.prepend(komunikat);
```

- **Po co to jest:** Idealne do kanałów wiadomości, logów aktywności lub powiadomień, gdzie najnowsze wpisy mają pojawiać się na samej górze.
- **Typowa pomyłka:** Pomylenie `prepend` z `appendChild` i dziwienie się, że elementy pojawiają się w odwróconej kolejności.

### 4.3. `rodzic.insertBefore(nowyWezel, wezelOdniesienia)`
Wstawia `nowyWezel` bezpośrednio przed wskazanym węzłem `wezelOdniesienia`. Jeżeli `wezelOdniesienia` ma wartość `null`, element zostanie wstawiony na sam koniec (identycznie jak `appendChild`).

```javascript
const lista = document.querySelector('#lista-zamowien');
const pierwszyElement = lista.firstElementChild;

const waznyPunkt = document.createElement('li');
waznyPunkt.textContent = 'Pilne zamówienie VIP';

lista.insertBefore(waznyPunkt, pierwszyElement);
```

- **Po co to jest:** Pozwala precyzyjnie kontrolować kolejność i wstawiać elementy w środek istniejącej listy, np. według daty lub alfabetycznie.
- **Typowa pomyłka:** Odwrotna kolejność argumentów: podanie najpierw elementu odniesienia, a potem nowego elementu. Składnia to zawsze: `rodzic.insertBefore(NOWY, STARY_PUNKT_ODNIESIENIA)`.

---

## 5. Klonowanie elementów: `element.cloneNode(deep)`

Gdy potrzebujemy powielić skomplikowaną strukturę HTML (np. szablon wiersza tabeli lub kartę artykułu), możemy skorzystać z metody klonowania.

```javascript
const wzorzecKarty = document.querySelector('.karta-szablon');
// true oznacza głębokie klonowanie (wraz ze wszystkimi dziećmi i tekstem)
const nowaKarta = wzorzecKarty.cloneNode(true);

nowaKarta.querySelector('.tytul').textContent = 'Nowy tytuł';
kontener.appendChild(nowaKarta);
```

- **Po co to jest:** Przyspiesza tworzenie powtarzalnych, rozbudowanych bloków HTML z zachowaniem ich struktury i stylów.
- **Typowa pomyłka:** Wywołanie `cloneNode(false)` lub `cloneNode()` bez parametru i oczekiwanie, że sklonuje się cała zawartość. Płytki klon (`false`) kopiuje jedynie sam znacznik otwierający i zamykający, gubiąc całe wnętrze oraz teksty. Aby sklonować dzieci, należy bezwzględnie przekazać `true`. Pamiętaj też, że `cloneNode` nie kopiuje listenerów zdarzeń podpiętych przez `addEventListener`.

---

## 6. Usuwanie węzłów z drzewa DOM

### 6.1. Nowoczesna metoda: `element.remove()`
Wywoływana bezpośrednio na elemencie, który chcemy skasować.

```javascript
const wpisDoUsuniecia = document.querySelector('#powiadomienie-stare');
if (wpisDoUsuniecia) {
    wpisDoUsuniecia.remove();
}
```

- **Po co to jest:** Najwygodniejszy i najbardziej czytelny sposób usuwania dowolnego elementu bez konieczności odwoływania się do jego rodzica.
- **Typowa pomyłka:** Próba przekazania selektora jako argumentu, np. `document.remove('#element')`. Metoda `.remove()` nie przyjmuje selektorów — musi być wywołana na konkretnym pobranym obiekcie węzła.

### 6.2. Klasyczna metoda: `rodzic.removeChild(dziecko)`
Wymaga referencji do rodzica oraz referencji do dziecka, które ma zostać odpięte z drzewa.

```javascript
const lista = document.querySelector('#lista-zamowien');
const ostatnieDziecko = lista.lastElementChild;

if (ostatnieDziecko) {
    lista.removeChild(ostatnieDziecko);
}
```

- **Po co to jest:** Tradycyjna metoda obecna we wszystkich specyfikacjach DOM poziomu 1–3, często spotykana w starszych arkuszach egzaminacyjnych CKE.
- **Typowa pomyłka:** Próba usunięcia elementu, który nie jest bezpośrednim dzieckiem danego rodzica. Powoduje to błąd `NotFoundError: Failed to execute 'removeChild' on 'Node': The node to be removed is not a child of this node`.

### 6.3. Czyszczenie całej zawartości kontenera
Gdy chcemy usunąć wszystkie dzieci z danego kontenera (np. wyczyścić koszyk lub listę wyników):

```javascript
const kontener = document.querySelector('#lista-zamowien');
kontener.replaceChildren(); // Nowoczesny standard: usuwa wszystkie dzieci
// LUB pętla:
while (kontener.firstChild) {
    kontener.removeChild(kontener.firstChild);
}
```

- **Po co to jest:** Pozwala jednym poleceniem zresetować stan widoku przed wygenerowaniem nowej listy.
- **Typowa pomyłka:** Używanie `kontener.innerHTML = ''` w aplikacjach, gdzie podpięte były złożone referencje, co może prowadzić do wycieków pamięci w starszych silnikach przeglądarek. Metoda `replaceChildren()` jest semantyczna i szybka.

---

## 7. Podpinanie zdarzeń do dynamicznych elementów

Gdy tworzymy elementy w locie (np. listę zadań lub pozycje koszyka z przyciskiem „Usuń”), musimy zadbać o to, aby przyciski te reagowały na kliknięcie. Mamy do wyboru dwie strategie:

### Strategia A: Rejestracja listenera podczas tworzenia elementu
Podpinamy zdarzenie do przycisku w tym samym momencie, w którym tworzymy go w pamięci.

```javascript
function dodajPozycje(nazwaProduktu) {
    const li = document.createElement('li');
    li.textContent = nazwaProduktu + ' ';

    const btnUsun = document.createElement('button');
    btnUsun.textContent = 'Usuń';
    btnUsun.addEventListener('click', function() {
        li.remove(); // Przycisk pamięta swoje nadrzędne li dzięki domknięciu (closure)
    });

    li.appendChild(btnUsun);
    document.querySelector('#lista-zamowien').appendChild(li);
}
```

- **Po co to jest:** Zapewnia prostą, modularną budowę komponentu — każdy element sam odpowiada za swoje zachowanie.
- **Typowa pomyłka:** Próba wyszukiwania przycisków przez `document.querySelectorAll('button')` na początku skryptu, zanim dynamiczne elementy w ogóle zostały utworzone. Taki selektor nie znajdzie elementów, które powstaną dopiero później!

### Strategia B: Delegacja zdarzeń na kontenerze nadrzędnym
Podpinamy tylko jeden listener do statycznego kontenera (który istnieje w HTML od początku), a kliknięty element sprawdzamy za pomocą właściwości `event.target`.

```javascript
const lista = document.querySelector('#lista-zamowien');

lista.addEventListener('click', function(event) {
    if (event.target.classList.contains('btn-usun')) {
        const calyWiersz = event.target.closest('li');
        if (calyWiersz) {
            calyWiersz.remove();
        }
    }
});
```

- **Po co to jest:** Znacząco oszczędza pamięć przy tysiącach elementów i eliminuje potrzebę ręcznego podpinania setek osobnych listenerów.
- **Typowa pomyłka:** Brak sprawdzenia `event.target`, co powoduje wykonanie akcji usunięcia nawet wtedy, gdy użytkownik kliknął w czyste pole tekstowe listy zamiast w przycisk usuwania.
