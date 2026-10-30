# Karta 3: Kopia projektu partnera i prośba o przyjęcie zmian

**Para:** Uczeń A + Uczeń B  

**Gdzie:** Wasze **publiczne** repozytoria ze stroną (z kart 1–2)  
**Cel:** każdy wyśle partnerowi prośbę o przyjęcie zmian; partner ją przyjmie; na stronie partnera widać Wasz wkład

Teoria: [00_teoria.md](00_teoria.md) — punkty 6 i 8 (Fork, Pull Request).

Na tej karcie celowo używamy przycisków angielskich: **Fork**, **Pull request**, **Merge**. Obok zawsze jest polskie znaczenie.

---

## Role — dwa przebiegi

Zrobicie to **dwa razy**, z zamianą ról:

| Przebieg | Kto robi kopię i wysyła prośbę | Kto przegląda i przyjmuje |
|:---:|:---|:---|
| 1 | Uczeń A | Uczeń B |
| 2 | Uczeń B | Uczeń A |

---

## Dane (z poprzednich kart)

| | Uczeń A | Uczeń B |
|:---|:---|:---|
| Login | | |
| Adres publicznego repo | | |
| Adres opublikowanej strony | | |

---

# Przebieg 1 — A dodaje coś do strony B

## Krok 1 — A robi kopię (Fork) projektu B

1. **Uczeń A** wkleja w przeglądarce adres **publicznego repo Ucznia B** (z tabeli) i Enter.
2. Sprawdźcie pasek adresu: ma być login **B**, nie Wasz.
3. W prawym górnym obszarze strony projektu (obok Watch / Star) kliknijcie przycisk **Fork** (zrób kopię na moje konto).
4. Na kolejnej stronie zostawcie domyślne ustawienia i kliknijcie **Create fork** (utwórz kopię).
5. Poczekajcie. Otworzy się **kopia** projektu.  
   W pasku adresu powinno być mniej więcej:

`https://github.com/LOGIN-A/nazwa-repo-B`

   Nad listą plików często widać napis w stylu: *forked from LOGIN-B/…* (skopiowane z konta B).

### Checklista

- [ ] A: mam kopię (fork) projektu B  
  Adres kopii: `_________________________________`

---

## Krok 2 — A zmienia plik **w swojej kopii** (nie u B!)

1. Upewnijcie się, że jesteście na adresie **kopii A** (login A w URL).
2. Kliknijcie plik **`index.html`**.
3. Kliknijcie **ołówek** (Edit this file).
4. Znajdźcie linię `</body>` (blisko końca pliku). **Nad** tą linią wklejcie:

```html
  <section>
    <h2>Wkład od partnera</h2>
    <p>Tę sekcję dodał: [tu wpisz login A] przez prośbę o przyjęcie zmian.</p>
  </section>
```

5. Przewińcie na dół do ramki **Commit changes**.
6. W opisie wpiszcie: `Dodano sekcję wkładu od partnera`
7. Zaznaczcie opcję **Create a new branch for this commit and start a pull request**  
   (utwórz nową gałąź i zacznij prośbę o przyjęcie zmian).  
   W polu nazwy gałęzi wpiszcie: `wklad-od-partnera`
8. Kliknijcie **Propose changes** (zaproponuj zmiany) — albo **Commit changes**, jeśli tak nazywa się przycisk.

### Co dalej zwykle robi GitHub

Często od razu otwiera się ekran tworzenia **Open a pull request**.  
Jeśli tak — przejdźcie do kroku 3B.  
Jeśli nie — zróbcie krok 3A.

---

## Krok 3A — Ręczne otwarcie prośby (gdy GitHub sam nie otworzył formularza)

1. Będąc nadal w **swojej kopii** (fork A), kliknijcie zakładkę **Pull requests**.
2. Kliknijcie zielony **New pull request**.
3. Jeśli GitHub pokazuje porównanie „w obrębie jednego repo”, kliknijcie link **compare across forks** (porównaj między kopiami) — zwykle nad listami wyboru gałęzi.
4. Ustawcie listy **dokładnie tak**:

| Pole na ekranie | Co wybrać | Znaczenie |
|:---|:---|:---|
| **base repository** | repo **B** (oryginał, login B) | *dokąd* mają trafić zmiany |
| **base** | `main` | gałąź docelowa u B |
| **head repository** | Wasz **fork** (login A) | *skąd* biorą się zmiany |
| **compare** | `wklad-od-partnera` | Wasza gałąź z poprawką |

5. Powinien pojawić się podgląd zmian (zielone linie = dodane). Jeśli nie ma zmian — źle ustawione listy; poprawcie i sprawdźcie z partnerem.
6. Kliknijcie **Create pull request**.
7. Tytuł np.: `Dodano sekcję wkładu od partnera`
8. W dużym polu opisu napiszcie 2–3 zdania po polsku: co dodaliście i że to ćwiczenie szkolne.
9. Ponownie **Create pull request**.

---

## Krok 3B — Gdy GitHub od razu pokazał formularz prośby

1. Sprawdźcie napis nad formularzem: prośba ma iść **do repo B**, nie „do siebie”.
2. Uzupełnijcie tytuł i krótki opis po polsku.
3. Kliknijcie **Create pull request**.

### Checklista po kroku 3

- [ ] A: prośba jest otwarta  
  Adres prośby (URL z paska): `_________________________________`

**Ważne:** od tej chwili **przyjmuje zmiany Uczeń B** (właściciel oryginału). A już nie klika Merge u siebie „na ślepo”.

---

## Krok 4 — B przegląda i przyjmuje prośbę

1. **Uczeń B** wchodzi na **swoje** publiczne repo (login B w adresie).
2. Klika zakładkę **Pull requests**.
3. Powinna leżeć otwarta prośba od A — kliknijcie jej tytuł.
4. Kliknijcie zakładkę **Files changed** (zmienione pliki).  
   Przejrzyjcie zielone linie — czy to ta sekcja „Wkład od partnera”.
5. Wróćcie do zakładki **Conversation** (rozmowa).
6. Napiszcie krótki komentarz, np. `OK, przyjmuję` i wyślijcie komentarz (przycisk **Comment**).
7. Jeśli zmiana jest w porządku, kliknijcie zielony **Merge pull request** (przyjmij i scal).
8. Potwierdźcie przyciskiem **Confirm merge** (potwierdź scalenie).
9. Gdy GitHub zaproponuje **Delete branch** — możecie kliknąć (sprzątanie); nie jest to obowiązkowe.

### Co macie zobaczyć

- Prośba ma status zmergowany / *Merged*.
- W repo **B** w pliku `index.html` na gałęzi `main` widać sekcję dodaną przez A.

### Checklista

- [ ] B: obejrzałem zmiany w **Files changed**  
- [ ] B: kliknąłem **Merge pull request** i potwierdziłem  
- [ ] W `index.html` u B widać wkład A  

---

## Krok 5 — Sprawdzenie strony na żywo (razem)

1. Odczekajcie 1–3 minuty.
2. Otwórzcie **adres opublikowanej strony Ucznia B** (z tabeli / karty 2).
3. Odświeżcie stronę (Ctrl+F5).
4. Na stronie B powinna być sekcja „Wkład od partnera”.

- [ ] Strona B pokazuje wkład z prośby A  

---

# Przebieg 2 — zamiana ról (B dodaje coś do strony A)

Zróbcie **to samo**, tylko:

1. **B** wchodzi na publiczne repo **A** → **Fork** → **Create fork**.
2. **B** w swojej kopii edytuje `index.html` i **nad** `</body>` dodaje np.:

```html
  <p><strong>Data współpracy:</strong> [wpiszcie dzisiejszą datę]</p>
```

3. Zapis na nowej gałęzi (np. nazwa `data-wspolpracy`) i utworzenie **Pull request** **do repo A**.
4. **A** wchodzi w swoje **Pull requests**, przegląda **Files changed**, pisze komentarz, klika **Merge pull request**.
5. Po chwili odświeżacie **stronę A** na żywo — widać datę.

### Checklista przebiegu 2

- [ ] B: adres mojej kopii (fork) repo A: `_________________________________`  
- [ ] B: adres prośby do A: `_________________________________`  
- [ ] A: prośba przejrzana i przyjęta (Merge)  
- [ ] Strona A na żywo pokazuje wkład B  

---

## Tabela dla nauczyciela

| | Adres prośby (URL) | Przyjęta? (tak/nie) |
|:---|:---|:---|
| Prośba A → projekt B | | |
| Prośba B → projekt A | | |

---

## Typowe problemy (czytajcie, gdy utkniecie)

| Co widać | Co zrobić |
|:---|:---|
| Nie ma przycisku **Fork** | Czy jesteście zalogowani? Czy to na pewno **publiczne** repo partnera? |
| Prośba idzie „do mojego forka”, nie do partnera | Użyjcie **compare across forks** i ustawcie **base repository** = oryginał partnera |
| Nie mogę kliknąć **Merge** | Merge klika **właściciel** oryginalnego repo (ten, do którego idzie prośba) |
| Strona na żywo bez nowej sekcji | Odczekajcie kilka minut; sprawdźcie, czy w `index.html` na `main` u właściciela zmiana już jest |

---

## Czy karta 3 jest zaliczona?

1. Są **dwie** prośby (A→B oraz B→A) z adresami w tabeli.  
2. Obie są przyjęte (Merge).  
3. Na obu stronach na żywo widać wkład partnera.

**Następna karta:** [04_karta_kolaborant_galezie_konflikty.md](04_karta_kolaborant_galezie_konflikty.md)
