# Karta 1: Konto szkolne i dwa repozytoria

**Para:** Uczeń A + Uczeń B  

**Gdzie klikacie:** tylko strona [github.com](https://github.com)  
**Cel na koniec karty:** każdy ma konto, **1 projekt publiczny** i **1 projekt prywatny**, w każdym po jednej własnej zapisanej zmianie

Najpierw przeczytajcie w teorii: [00_teoria.md](00_teoria.md) — punkty 1, 2 i 3.

---

## Dane pary (wypełnijcie długopisem / na komputerze)

| | Uczeń A | Uczeń B |
|:---|:---|:---|
| Imię i nazwisko | | |
| Login na GitHubie | | |
| Adres profilu (wklejcie z paska przeglądarki) | `https://github.com/`…… | `https://github.com/`…… |

---

## Część A — Logowanie kontem szkolnym GM

Robi **każdy** na swoim komputerze.  
Jeśli macie jeden komputer na parę: A robi wszystko u siebie, potem **wylogowanie**, potem B.

### Kroki

1. Otwórzcie przeglądarkę i wpiszcie adres: `https://github.com`
2. Kliknijcie **Sign in** (zaloguj się) — zwykle w prawym górnym rogu.  
   Jeśli nie macie jeszcze konta: **Sign up** (zarejestruj się) i wybierzcie logowanie przez **Google** albo **Microsoft** — **tak, jak każe nauczyciel (konto GM)**.
3. Dokończcie logowanie / rejestrację według okienek GitHuba (e-mail szkolny, ewentualnie wybór loginu).
4. Gdy jesteście na stronie głównej GitHuba, spójrzcie w **prawy górny róg**. Powinien być widoczny Wasz avatar (okrągła ikona) albo inicjał.
5. Kliknijcie ten avatar → w menu powinna być Wasza nazwa (login). Zapiszcie login w tabeli na górze karty.
6. Powiedzcie sobie nawzajem na głos: „Mój login to …”

### Co macie zobaczyć

- Jesteście zalogowani.
- Znacie **swój** login i login partnera.

### Checklista

- [ ] A: zalogowany na konto GM, login wpisany w tabeli  
- [ ] B: zalogowany na konto GM, login wpisany w tabeli  
- [ ] A i B: znamy nawzajem swoje loginy  

---

## Część B — Publiczne repozytorium (każdy swoje)

**Repozytorium** = projekt na GitHubie (patrz teoria).

**Nazwa projektu (wpiszcie zamiast IMIE swoje imię małymi literami):**

`strona-para-IMIE`

Przykłady: `strona-para-anna`, `strona-para-bartek`  
Bez spacji. Bez polskich znaków w nazwie (ą→a, ł→l).

### Kroki (A robi u siebie, potem B u siebie — te same punkty)

1. W prawym górnym rogu kliknijcie znak **+** (plus).
2. Z menu wybierzcie **New repository** (nowe repozytorium).
3. W polu **Repository name** wpiszcie nazwę, np. `strona-para-anna`.
4. Pod nazwą znajdźcie wybór widoczności:
   - zaznaczcie kółko przy **Public** (publiczne).
5. Znajdźcie kratkę **Add a README file** (dodaj plik README) i **zaznaczcie ją**.  
   Dzięki temu projekt nie będzie pusty — od razu powstanie plik `README.md`.
6. Na dole strony kliknijcie zielony przycisk **Create repository** (utwórz repozytorium).
7. Poczekajcie, aż otworzy się strona projektu. Skopiujcie cały adres z paska przeglądarki (zaczyna się od `https://github.com/…`) i wklejcie poniżej.

### Co macie zobaczyć

- Na stronie projektu widać plik `README.md`.
- Przy nazwie projektu nie ma kłódki (albo jest oznaczenie Public) — projekt jest publiczny.

### Checklista + linki

- [ ] A: mam publiczne repo  
  Adres: `_________________________________`
- [ ] B: mam publiczne repo  
  Adres: `_________________________________`

---

## Część C — Prywatne repozytorium (każdy swoje)

**Nazwa:**

`zespol-prywatne-IMIE`

Przykład: `zespol-prywatne-anna`

### Kroki (znowu: A u siebie, B u siebie)

1. Znak **+** → **New repository**.
2. Wpiszcie nazwę `zespol-prywatne-…`.
3. Zaznaczcie kółko przy **Private** (prywatne).
4. Zaznaczcie kratkę **Add a README file**.
5. Kliknijcie **Create repository**.
6. Skopiujcie adres projektu z paska przeglądarki.

### Sprawdzenie, że naprawdę jest prywatne

1. A kopiuje adres **swojego prywatnego** repo.
2. B (zalogowany na **swoim** koncie) wkleja ten adres w przeglądarce i Enter.
3. B **nie powinien** zobaczyć plików projektu. Zamiast tego zwykle jest komunikat, że nie ma dostępu albo strona 404.
4. Potem zamiana: B daje A adres swojego prywatnego repo — A też nie powinien wejść.

### Checklista + linki

- [ ] A: mam prywatne repo  
  Adres: `_________________________________`
- [ ] B: mam prywatne repo  
  Adres: `_________________________________`
- [ ] Sprawdziliśmy: partner **bez zaproszenia** nie otwiera prywatnego projektu  

---

## Część D — Pierwsza własna zmiana (commit) w README

Robicie to **cztery razy**: A w publicznym, A w prywatnym, B w publicznym, B w prywatnym.

### Kroki (dla jednego repo — potem powtórzcie w drugim)

1. Wejdźcie na stronę wybranego repo (wklejcie jego adres).
2. Na liście plików kliknijcie nazwę pliku **`README.md`** (otworzy się podgląd).
3. W prawym górnym obszarze treści pliku znajdźcie ikonę **ołówka** — po najechaniu zwykle widać **Edit this file** (edytuj ten plik). Kliknijcie ołówek.
4. Na końcu tekstu (na dole edytora) dopiszcie dokładnie takie linie (uzupełnijcie kropki):

```markdown
## Autor
Imię: ...
Klasa: ...
Partner (login): ...
```

5. Przewińcie stronę **na dół**. Zobaczycie ramkę **Commit changes**.
6. W polu tytułu (większe pole u góry ramki) wpiszcie opis, np.:

`Dodano dane autora w README`

7. Upewnijcie się, że zaznaczone jest coś w stylu:  
   **Commit directly to the `main` branch**  
   (zapisz wprost na głównej gałęzi `main`).  
   Na tej karcie tak ma zostać.
8. Kliknijcie zielony przycisk **Commit changes**.

### Jak sprawdzić, że się udało

1. Na stronie repo kliknijcie u góry zakładkę z liczbą commitów albo link w stylu **N commits** / zegar historii (zależy od wyglądu GitHuba).
2. Albo: wejdźcie znowu w `README.md` — Wasze dopiski powinny być widoczne.

### Checklista

- [ ] A: zapisana zmiana w repo **publicznym**  
- [ ] A: zapisana zmiana w repo **prywatnym**  
- [ ] B: zapisana zmiana w repo **publicznym**  
- [ ] B: zapisana zmiana w repo **prywatnym**  

---

## Czy karta 1 jest zaliczona?

Tak, jeśli:

1. Oboje macie konta GM i wpisane loginy.  
2. Każdy ma 1 repo publiczne i 1 prywatne (z adresami w karcie).  
3. W każdym z tych czterech repo jest Wasza zmiana w `README.md` (nie tylko pusty README z chwili tworzenia).

**Następna karta:** [02_karta_commity_i_pages.md](02_karta_commity_i_pages.md)
