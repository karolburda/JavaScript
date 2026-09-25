# Wyszukiwanie w DOM i zmiana tekstu

HTML po wczytaniu to **drzewo węzłów** (DOM). JavaScript nie „pisze strony od zera” — **znajduje** istniejący element i zmienia jego treść.

To dział **semestru 3**, po literale obiektu. W semestrze 2 robiłeś już pierwszy krok: `document.getElementById("wynik").textContent = ...`. To było wyszukiwanie po `id`, tylko zawsze to samo pudełko. Teraz wybierasz **dowolny** węzeł na stronie.

**Nie** ma tu kliknięć (`addEventListener` — dział 13), **nie** budujemy nowych znaczników (`createElement` — 16). Skrypt stoi **na końcu `body`**, żeby drzewo już istniało.

```html
<h1 id="tytul">Witamy</h1>
<script src="script.js"></script>
```

```js
document.getElementById("tytul").textContent = "Sklep szkolny";
```

Odśwież stronę, żeby skrypt wykonał się ponownie.

---

## 1. `getElementById`

Szuka **jednego** elementu o danym `id`. Bez `#` w argumencie.

```js
const tytul = document.getElementById("tytul");
tytul.textContent = "Nowa nazwa";
```

Jeśli nie ma takiego `id`, wynik to `null`. Zapis `null.textContent = ...` to błąd — najpierw sprawdź, albo pilnuj, żeby `id` w HTML zgadzało się z JS.

`id` na stronie ma być **unikalne**. To nadal najczytelniejszy sposób, gdy element ma `id` (arkusze CKE często tak robią).

---

## 2. `querySelector` — jeden, selektor CSS

Pierwszy pasujący element albo `null`. Argument to **selektor CSS** (jak w arkuszu stylów):

```js
document.querySelector("#tytul");     // to samo co getElementById("tytul")
document.querySelector(".cena");      // pierwsza klasa .cena
document.querySelector("h2");         // pierwszy h2
document.querySelector("nav a");      // pierwszy link wewnątrz nav
```

Tu **jest** `#` i `.` — to składnia selektora, nie nazwa metody.

---

## 3. `querySelectorAll` — wszystkie

Zwraca **NodeList** (lista węzłów), nie pojedynczy element. Nie ma `.textContent` na całej liście — musisz przejść po elementach.

```js
const ceny = document.querySelectorAll(".cena");
for (let i = 0; i < ceny.length; i++) {
  ceny[i].textContent = ceny[i].textContent + " zł";
}
```

`ceny.length` działa. `ceny.forEach(...)` też (na NodeList z `querySelectorAll`). Pętla `for` jest w porządku — ten sam wzorzec co przy tablicach.

Pusta lista to nie `null`: `length === 0`. `querySelector` (bez All) przy braku trafienia daje `null`.

---

## 4. Kombinacje selektorów (to, co warto umieć)

Selektory z HTML/CSS działają tu tak samo. Na zajęciach wystarczą:

| Selektor | Znaczenie |
| -------- | --------- |
| `#id` | konkretny `id` |
| `.klasa` | klasa |
| `p` | znacznik |
| `.a.b` | element z **obiema** klasami |
| `ul li` | `li` **gdziekolwiek wewnątrz** `ul` (potomek) |
| `ul > li` | `li` **bezpośrednie dziecko** `ul` |
| `[type="email"]` | atrybut (np. pole e-mail) |
| `.karta .cena` | `.cena` tylko wewnątrz `.karta` |

Przecinek to kilka niezależnych selektorów: `h1, h2`.

**Nie** na sprawdzianie: `:has()`, `:is()`, rodzeństwo `+` / `~`, skomplikowane `:nth-child`.

Zły selektor = zmieniasz **inny** napis albo nic. Sprawdź w narzędziach deweloperskich, co naprawdę trafiłeś. Typowa pomyłka: `getElementById("#tytul")` z kratką — ta metoda kratki nie chce. Drugą jest `querySelector(".cena")` bez kropki: szuka znacznika o nazwie `cena`, nie klasy.

---

## 5. Szukanie od rodzica (zakres)

`document.querySelectorAll("a")` to **cała strona**. Często chcesz tylko menu:

```js
const menu = document.getElementById("menu");
const linki = menu.querySelectorAll("a");
```

Drugi `querySelector` wołasz **na elemencie**, nie na `document`. To ta sama metoda, węższy start.

---

## 6. Starsze metody `getElements*`

Zobaczysz je w starym kodzie i na części arkuszy. Działają, ale **nie** są równoległym kursem.

```js
document.getElementsByClassName("cena"); // bez kropki!
document.getElementsByTagName("p");
document.getElementsByName("email");     // atrybut name — rzadko
```

Wynik to **HTMLCollection** (żywa lista: gdy DOM się zmieni, kolekcja sama się aktualizuje). `querySelectorAll` daje **statyczny** NodeList (migawka z chwili wywołania).

Na zajęciach: `getElementById` + `querySelector` / `All`. `getElementsByClassName` — jedno ćwiczenie, żeby rozpoznać zapis **bez** `.`.

---

## 7. `textContent` — domyślny zapis tekstu

```js
el.textContent = "Nowy napis";
const obecny = el.textContent; // odczyt
```

Wstawia **zwykły tekst**. Znaki `<`, `>` widać dosłownie, nie stają się znacznikami. Działa też na elemencie schowanym (`display: none`).

Kilka linii w jednym elemencie: sklejaj z `"\n"` (w CSS wtedy `white-space: pre-wrap`). Albo zmieniaj **osobne** elementy (nagłówek, cena, status) — to częstsze w DOM.

Obiekt / tablica w `textContent` znowu da `[object Object]` — składaj string z pól, jak w semestrze 2.

---

## 8. `innerText` i `innerHTML` — nie trzy równoważne narzędzia

### `innerHTML`

Przeglądarka **parsuje** string jako HTML:

```js
el.innerHTML = "<b>hit</b>";       // na stronie: hit (pogrubiony)
el.textContent = "<b>hit</b>";     // na stronie: dosłownie <b>hit</b>
```

Pułapki: `el.innerHTML += "..."` przebudowuje dzieci i **zrywa** podpięte zdarzenia (gdy już będą — dział 13). Tekst z `prompt` we `innerHTML` to ryzyko XSS (wstrzyknięcie skryptu).

W tym dziale: **jedno** ćwiczenie porównawcze. W pozostałych zadaniach zostajesz przy `textContent`. Składanie znaczników stringiem — nie; nowe węzły w dziale 16.

### `innerText`

Patrzy na **to, co byłoby widać**: pomija `display: none`, uwzględnia CSS, jest wolniejszy (wymaga layoutu). W tutorialach bywa. Na zajęciach **nie** wybieraj go zamiast `textContent`.

| | `textContent` | `innerText` | `innerHTML` |
| - | ------------- | ----------- | ----------- |
| Znaczniki w stringu | dosłownie | dosłownie | jako HTML |
| Ukryty element | działa | często pusty / inny | działa |
| Domyślnie u nas | **tak** | nie | tylko świadomie |

---

## 9. Typowe błędy

- `querySelector(".cena").textContent` gdy nic nie ma → błąd na `null`.
- `querySelectorAll(".cena").textContent = ...` → NodeList nie ma `textContent`.
- `getElementById("#tytul")` albo `getElementsByClassName(".cena")` — zbędne `#` / `.`.
- Skrypt w `<head>` **bez** `defer` — `getElementById` zbyt wcześnie, drzewa jeszcze nie ma. U nas skrypt na końcu `body`.
- `document.write` po wczytaniu strony zamazuje dokument — **nie** wracaj do niego.

---

## 10. Problem → narzędzie

- **Jeden element z `id`** → `getElementById` albo `querySelector("#…")`
- **Pierwszy pasujący (klasa, złożony selektor)** → `querySelector`
- **Wszystkie pasujące** → `querySelectorAll` + pętla
- **Tylko wewnątrz bloku** → najpierw rodzic, potem `rodzic.querySelectorAll`
- **Zmiana napisu** → `textContent`
- **Pokazać, że HTML vs tekst** → porównaj z `innerHTML` (ćwiczenie)

Dalej: [`13_zdarzenia`](../13_zdarzenia/) — ten sam uchwyt, ale zmiana **po kliknięciu**. Atrybuty: [`14_atrybuty`](../14_atrybuty/).
