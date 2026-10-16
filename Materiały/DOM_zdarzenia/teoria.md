# Zdarzenia w przeglądarce

W [`12_selektory_tresc`](../12_selektory_tresc/) skrypt **od razu** znajdował węzeł i zmieniał `textContent`. Strona nie czekała na ucznia.

**Zdarzenie** to sygnał przeglądarki: klik, znak w polu, wysłanie formularza, najechanie myszą, klawisz. Dopiero wtedy odpalasz ten sam kod co w 12: znajdź (już masz uchwyt) → `textContent` / `value` / `style`.

Nasłuchiwanie:

```js
const btn = document.querySelector("#changeBtn");
btn.addEventListener("click", function () {
  document.querySelector("#text").textContent = "Kliknięto";
});
```

- Pierwszy argument: **nazwa** zdarzenia (`"click"`, nie `"onclick"`).
- Drugi: funkcja. Wywoła ją przeglądarka, gdy zdarzenie nastąpi.
- Można podpiąć **kilka** funkcji do tego samego zdarzenia. Atrybut HTML `onclick="..."` — **nie** (miesza HTML z JS, jedna funkcja nadpisuje drugą).

Funkcja anonimowa albo strzałkowa jest w porządku:

```js
btn.addEventListener("click", () => {
  document.body.style.backgroundColor = "lightblue";
});
```

Skrypt na końcu `body` albo w `<head>` z `defer`. Bez tego `querySelector` w chwili startu często wraca `null`.

---

## 1. Mysz

| Zdarzenie | Kiedy |
| --------- | ----- |
| `click` | klik |
| `dblclick` | podwójny klik |
| `mouseenter` | kursor wjeżdża na element |
| `mouseleave` | kursor zjeżdża |
| `mousemove` | ruch nad elementem (bardzo często — ostrożnie) |

`mouseenter` nie odpala się ponownie przy wjeździe na dziecko wewnątrz elementu. Do „najechania na kafelek” zwykle lepszy niż `mouseover`.

Typowa pomyłka: atrybut HTML `onclick="..."` zamiast `addEventListener`. W HTML zostaje jedna funkcja i mieszasz znaczniki z logiką. Na zajęciach nasłuch jest w `script.js`.

---

## 2. Formularz i pole

| Zdarzenie | Kiedy |
| --------- | ----- |
| `input` | każdy znak / ruch suwaka — na żywo |
| `change` | zatwierdzona zmiana (`select`, checkbox, wyjście z pola tekstowego) |
| `submit` | próba wysłania **formularza** (Enter albo przycisk `type="submit"`) |
| `focus` | wejście do pola |
| `blur` | wyjście z pola (utrata fokusu) |

`submit` wieszaj na **`form`**, nie na przycisku.

Wartość pola tekstowego: `pole.value` (to nie `textContent`). Checkbox: `pole.checked` (`true` / `false`).

### `input` vs `change` vs `blur`

**Po co:** te trzy zdarzenia odpowiadają na inne pytania: „co uczeń pisze właśnie teraz?”, „co ostatecznie wybrał?”, „czy opuścił pole i mogę sprawdzić wpis?”.

`input` odpala się przy **każdym** znaku, skasowaniu literki albo ruchu suwaka. Nadaje się do podglądu na żywo (licznik znaków, filtr listy w trakcie pisania). Nie czekasz na Enter ani na wyjście z pola.

`change` czeka na **zatwierdzoną** zmianę. Na `<select>` i checkboxie zwykle po samym wyborze. Na polu tekstowym — dopiero gdy fokus opuści pole **i** treść się zmieniła względem momentu wejścia. Lista sposobu dostawy, radio, checkbox — typowy przypadek `change`.

`blur` odpala się przy **wyjściu z pola**, niezależnie od tego, czy treść się zmieniła. Walidacja e-maila albo wieku po opuszczeniu inputu to klasyczny `blur`: sprawdzasz `.value` dopiero wtedy, gdy uczeń skończył wpisywać i kliknął gdzie indziej.

**Typowa pomyłka:** wieszać `input` na `select` „bo też się zmienia” — działa, ale na liście wybór zatwierdza się od razu i na sprawdzianie oczekuje się `change`. Druga: walidować przy `input` litery po literze, gdy polecenie mówi o `blur` — wtedy komunikat błędu miga w trakcie pisania zamiast po opuszczeniu pola.

### Odczyt opcji `select`

`select.value` to **wartość atrybutu `value`** wybranej `<option>` (albo treść opcji, gdy `value` nie ma). To właściwość DOM, nie string z HTML.

Gdy potrzebujesz **widocznego napisu** na liście (to, co uczeń widzi w rozwijanym menu), bierzesz wybraną opcję przez indeks:

```js
const napis = select.options[select.selectedIndex].text;
// albo .textContent — na option zwykle to samo
```

**Po co:** w HTML `value` bywa skrótem (`"kurier"`), a na stronie masz wypisać „Kurier ekspresowy”. Wtedy `value` nie wystarczy — potrzebujesz `.text` / `.textContent` wybranej opcji.

**Typowa pomyłka:** wypisać `select.value` i zdziwić się, że w komunikacie jest kod opcji zamiast ładnego tekstu. Albo czytać `textContent` z całego `<select>` — dostaniesz sklejkę wszystkich opcji, nie tylko wybranej.

### Właściwości DOM a dział 14

Na sprawdzianie często ustawiasz albo czytasz `.disabled`, `.src`, `.value`, `.checked`. To **właściwości obiektu w DOM** — piszesz `przycisk.disabled = true` albo `obraz.src = "lampa_on.png"`, bez `setAttribute`.

**Po co:** żeby zdarzenie z tego działu miało skutek na stronie (wyłączyć przycisk po kliknięciu, podmienić źródło obrazka). Pełny zestaw atrybutów HTML (`getAttribute` / `setAttribute`, `data-*`, `hidden` jako atrybut) jest w dziale [`14_atrybuty`](../14_atrybuty/). Tu wystarczy wiedzieć, że `.disabled` i `.src` to mostek do 14 — nie „wiszą w próżni”.

**Typowa pomyłka:** mylić `btn.disabled = true` z klasą CSS albo z `style`. Albo szukać w teorii 13 pełnej listy atrybutów zamiast iść do 14.

`submit` na przycisku nic nie złapie, jeśli Enter wyśle formularz — stąd nasłuch na całym `<form>`.

Pełna obsługa formularza (`preventDefault` jako temat, radio, walidacja) jest w dziale [`19_formularze`](../../aplikacja/19_formularze/). Tu `preventDefault` pojawia się tylko po to, żeby wynik JS nie zniknął po Enter.

---

## 3. Klawiatura

`keydown` / `keyup` — zwykle na `document` albo na polu.

`e.key` to nazwa klawisza: `"Enter"`, `"ArrowUp"`, `"a"`.

```js
document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    // ...
  }
});
```

---

## 4. Obiekt `event` (`e`)

Przeglądarka przekazuje obiekt zdarzenia do funkcji.

**`e.target`** — węzeł, na którym zdarzenie **naprawdę** zaszło (kliknięte `li`, niekoniecznie `ul`, na którym wisi nasłuch).

```js
lista.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.textContent = e.target.textContent + " ✓";
  }
});
```

Jedno nasłuchiwanie na rodzicu zamiast pętli po każdym dziecku — **delegacja**. `tagName` jest WIELKIMI LITERAMI (`"LI"`).

**`e.preventDefault()`** — zatrzymuje domyślną akcję przeglądarki. Przy `submit` bez tego strona się **przeładuje** i zniknie wynik JS. Przy linku — nie wejdzie pod `href`.

```js
form.addEventListener("submit", (e) => {
  e.preventDefault();
  // dalej: odczyt pól, textContent komunikatu
});
```

---

## 5. `DOMContentLoaded` i `scroll`

`DOMContentLoaded` — HTML sparsowany (gdy skrypt jest w `head` **bez** `defer`). U nas skrypt na końcu / `defer`, więc zwykle niepotrzebne.

`scroll` — przewijanie; na start nie na sprawdzianie.

---

## 6. Problem → narzędzie

- **Po kliknięciu zmień napis** → `click` + `textContent` (jak 12, tylko w funkcji)
- **Podgląd w trakcie pisania** → `input` + `e.target.value`
- **Lista / select zatwierdzony** → `change` + `select.value` (albo `.options[…].text` na widoczny napis)
- **Sprawdzenie po wyjściu z pola** → `blur` + `pole.value`
- **Formularz bez przeładowania** → `submit` na `form` + `preventDefault`
- **Który element z listy** → nasłuch na rodzicu + `e.target`
- **Strzałki / Enter** → `keydown` + `e.key`
- **Wyłącz przycisk / zmień obrazek** → `.disabled` / `.src` (właściwość DOM; reszta atrybutów → 14)

Atrybuty HTML w pełnym zestawie (`data-*`, `getAttribute`, `hidden`) — dział 14. Nowe węzły — 16; na sprawdzianie B6 wolno `createElement` do jednego `li`.
