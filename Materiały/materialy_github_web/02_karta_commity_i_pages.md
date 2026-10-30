# Karta 2: Kolejne zmiany i publikacja strony WWW

**Para:** Uczeń A + Uczeń B  

**Gdzie pracujecie:** Wasze **publiczne** repozytorium z karty 1 (to z nazwą `strona-para-…`)  
**Cel na koniec karty:** u każdego działa strona pod adresem GitHub Pages (wklejacie link do karty)

Teoria: [00_teoria.md](00_teoria.md) — punkty 4 i 11.

---

## Dane z karty 1 (przepiszcie)

| | Uczeń A | Uczeń B |
|:---|:---|:---|
| Login | | |
| Adres **publicznego** repo | | |

---

## Część A — Utworzenie pliku strony `index.html`

Robi **każdy** we **własnym** publicznym repo.

### Kroki

1. Wklejcie w przeglądarce adres swojego **publicznego** repo i Enter.
2. Na stronie projektu, nad listą plików, znajdźcie przycisk **Add file** (dodaj plik).
3. Kliknijcie **Add file**, potem z menu **Create new file** (utwórz nowy plik).
4. Na górze pojawi się pole nazwy pliku. Wpiszcie **dokładnie**:

`index.html`

   - same małe litery,  
   - bez spacji,  
   - z kropką przed `html`.

5. W dużym białym polu edytora **skasujcie** ewentualny pusty tekst i wklejcie poniższy kod.  
   W miejscach `[Twoje imię]` i `[Login partnera]` wpiszcie prawdziwe dane.

```html
<!DOCTYPE html>
<html lang="pl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Strona — [Twoje imię]</title>
</head>
<body>
  <h1>Witaj na mojej stronie z GitHuba</h1>
  <p>Autor: [Twoje imię]</p>
  <p>Partner w parze: [Login partnera]</p>
  <p>To jest wersja 1 strony.</p>
</body>
</html>
```

6. Przewińcie na dół strony.
7. W polu opisu wpiszcie: `Dodano index.html — wersja 1`
8. Zostawcie opcję **Commit directly to the `main` branch**.
9. Kliknijcie **Commit changes**.

### Co macie zobaczyć

Na liście plików w repo leżą obok siebie m.in. `README.md` oraz **`index.html`** (na tym samym poziomie — nie w środku żadnego folderu).

### Checklista

- [ ] A: mam plik `index.html` w publicznym repo  
- [ ] B: mam plik `index.html` w publicznym repo  

---

## Część B — Druga zmiana w tym samym pliku

Robi **każdy** u siebie.

### Kroki

1. Na liście plików kliknijcie **`index.html`**.
2. Kliknijcie ikonę **ołówka** (**Edit this file**).
3. Wprowadźcie **wszystkie trzy** poprawki:
   - w nagłówku `<h1>…</h1>` zmieńcie tekst na własny, np. `Moja pierwsza strona na GitHubie`,
   - zaraz pod pierwszym akapitem dopiszcie:

```html
  <h2>O projekcie</h2>
  <p>Ćwiczenie szkolne — GitHub w przeglądarce.</p>
```

   - zdanie `To jest wersja 1 strony.` zmieńcie na `To jest wersja 2 strony.`

4. Na dole: opis `Aktualizacja treści — wersja 2`
5. Znowu **Commit directly to the `main` branch** → **Commit changes**.

### Checklista

- [ ] A: zapisałem wersję 2  
- [ ] B: zapisałem wersję 2  

---

## Część C — Włączenie publikacji strony (GitHub Pages)

Robi **każdy** u siebie, w swoim publicznym repo.

### Kroki

1. Wejdźcie na stronę swojego publicznego repo.
2. Pod nazwą projektu jest rząd zakładek: **Code**, **Issues**, **Pull requests**… Znajdźcie zakładkę **Settings** (ustawienia) i kliknijcie ją.  
   *Uwaga: Settings widać tylko właściciel. Tu jesteście właścicielem swojego repo — OK.*
3. Na lewej liście ustawień znajdźcie sekcję w stylu **Code and automation** / podobną i kliknijcie **Pages** (albo od razu **Pages**, jeśli widać na liście).
4. W części **Build and deployment** (budowanie i publikacja):
   - przy **Source** (źródło) wybierzcie z listy: **Deploy from a branch** (publikuj z gałęzi).
5. Pojawi się wybór gałęzi:
   - pierwsza lista: wybierzcie **`main`**,
   - druga lista (folder): wybierzcie **`/ (root)`** — to znaczy „pliki leżące na wierzchu projektu”, tam gdzie macie `index.html`.
6. Kliknijcie **Save** (zapisz).
7. **Poczekajcie 1 do 3 minut.** Nie zamykajcie od razu karty z wnioskiem „nie działa”.
8. Odświeżcie stronę ustawień Pages (F5). U góry / w ramce powinien pojawić się komunikat z linkiem do Waszej strony (często na zielonym tle), np.:

`Your site is live at https://….github.io/…/`

9. Kliknijcie ten link **albo** skopiujcie go i otwórzcie w nowej karcie przeglądarki.

### Jak wygląda typowy adres

`https://WASZ-LOGIN.github.io/NAZWA-WASZEGO-REPO/`

Przykład: login `anna-nowak`, repo `strona-para-anna` →  
`https://anna-nowak.github.io/strona-para-anna/`

### Co macie zobaczyć

W nowej karcie otwiera się Wasza strona: nagłówek, imię, wersja 2 — **nie** lista plików GitHuba.

### Checklista + linki

- [ ] A: strona się otwiera  
  Adres strony: `_________________________________`
- [ ] B: strona się otwiera  
  Adres strony: `_________________________________`
- [ ] Pokazaliśmy sobie nawzajem strony na żywo  

### Gdy strona się nie otwiera — sprawdźcie po kolei

1. Czy repo jest **Public**? (w Settings → General czasem widać Change visibility)
2. Czy plik nazywa się dokładnie `index.html` (nie `Index.html`, nie `strona.html`)?
3. Czy w Pages wybrano gałąź `main` i folder `/ (root)`?
4. Czy odczekaliście kilka minut i odświeżyliście stronę (klawisze Ctrl i F5 naraz)?

Jeśli nadal nie działa — zawołajcie nauczyciela i pokażcie ekran ustawień Pages.

---

## Część D — Zmiana po publikacji (żeby zobaczyć, że strona się aktualizuje)

Robi **każdy**.

1. Wróćcie do repo → otwórzcie `index.html` → ołówek.
2. Tuż przed zamykającym `</body>` dopiszcie linię:

```html
  <p>Opublikowano przez GitHub Pages.</p>
```

3. Opis zmiany: `Informacja o publikacji na żywo`
4. **Commit changes** na `main`.
5. Poczekajcie ok. 1–2 minuty.
6. Odświeżcie **adres Waszej opublikowanej strony** (ten z części C, nie stronę ustawień).
7. Nowe zdanie powinno być widoczne na dole strony.

### Checklista

- [ ] A: nowe zdanie widać na stronie na żywo  
- [ ] B: nowe zdanie widać na stronie na żywo  

---

## Czy karta 2 jest zaliczona?

U każdego z pary:

1. jest `index.html` w publicznym repo,  
2. są co najmniej dwie zapisane zmiany związane ze stroną,  
3. w karcie jest **działający** adres opublikowanej strony.

**Następna karta:** [03_karta_pull_request_miedzy_repo.md](03_karta_pull_request_miedzy_repo.md)
