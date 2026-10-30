# Karta 4: Współpracownik, gałęzie i konflikt

**Para:** Uczeń A + Uczeń B  

**Gdzie pracujecie:** **jedno** wspólne repo — prywatne repo **Ucznia A** z karty 1  
**Cel:** B dostaje dostęp; uczycie się gałęzi; celowo robicie i naprawiacie konflikt

Teoria: [00_teoria.md](00_teoria.md) — punkty 5, 6, 7 i 9.

---

## Role na tej karcie (nie zmieniajcie)

| Rola | Kto |
|:---|:---|
| Właściciel projektu | **Uczeń A** |
| Współpracownik (zaproszony) | **Uczeń B** |

*(Jeśli zostanie czas po zaliczeniu, nauczyciel może kazać powtórzyć na prywatnym repo B — to nie jest wymagane.)*

---

## Dane

| Pole | Wpiszcie |
|:---|:---|
| Adres prywatnego repo A (będzie wspólne) | |
| Login A | |
| Login B | |

---

## Część A — A zaprasza B do prywatnego repo

### Robi tylko A

1. A otwiera swoje **prywatne** repo (`zespol-prywatne-…`) — wkleja adres z karty 1.
2. Klika zakładkę **Settings** (ustawienia).
3. W lewym menu klika **Collaborators** (czasem dłuższa nazwa: **Collaborators and teams**).
4. GitHub może poprosić o ponowne wpisanie hasła albo potwierdzenie logowania — zróbcie to.
5. Kliknijcie **Add people** (dodaj osoby).
6. W polu wyszukiwania wpiszcie **dokładny login B** (tak jak na GitHubie, bez literówek).
7. Kliknijcie właściwą osobę na liście.
8. Kliknijcie przycisk dodania do repozytorium (np. **Add LOGIN to this repository**).
9. Jeśli pojawia się wybór uprawnień, zostawcie domyślne (zwykle możliwość zapisu / *Write*).

- [ ] A: zaproszenie do B zostało wysłane  

### Robi tylko B

1. B otwiera pocztę szkolną **albo** na GitHubie klika ikonę **dzwonka** (powiadomienia) w prawym górnym rogu.  
   Można też wejść na: `https://github.com/notifications`
2. Znajdźcie zaproszenie do repo A.
3. Kliknijcie **Accept invitation** (zaakceptuj zaproszenie) / **Accept**.

### Test (razem)

1. B wkleja w przeglądarce **ten sam adres** prywatnego repo A co A.
2. B powinien **zobaczyć pliki** (już nie ma komunikatu o braku dostępu).

- [ ] B: zaakceptowałem zaproszenie  
- [ ] B: widzę pliki prywatnego repo A  

---

## Część B — Wspólny plik do ćwiczeń

Robi **A** (B patrzy na ten sam ekran albo odświeża stronę u siebie).

1. W prywatnym repo A: **Add file** → **Create new file**.
2. Nazwa pliku: `notatka-zespolu.md`
3. Wklejcie treść:

```markdown
# Notatka zespołu

Hasło dnia: JABLKO
Status: start
```

*(Piszemy `JABLKO` bez polskiego znaku — mniej problemów przy kopiowaniu.)*

4. Na dole opis: `Dodano notatka-zespolu.md`
5. Zostawcie zapis na `main` → **Commit changes**.

- [ ] Plik `notatka-zespolu.md` widać na liście plików  

---

## Część C — Dwie gałęzie i scalenie bez konfliktu (rozgrzewka)

Cel: każda osoba dopisuje **inną nową linię na końcu** pliku. Potem obie linie mają trafić na `main`.

### C1 — B tworzy gałąź `zmiana-B`

1. B jest na stronie prywatnego repo A.
2. U góry nad listą plików kliknijcie przycisk z nazwą gałęzi (zwykle napis **`main`**).
3. W polu wyszukiwania wpiszcie: `zmiana-B`
4. Kliknijcie **Create branch zmiana-B from main** (utwórz gałąź zmiana-B od main).
5. Sprawdźcie: przycisk gałęzi u góry pokazuje teraz **`zmiana-B`** (nie `main`).
6. Otwórzcie `notatka-zespolu.md` → ołówek.
7. Na **końcu** pliku dopiszcie nową linię:

`Autor zmiany B: [login B]`

8. Opis: `Wpis B na galezi zmiana-B`
9. Zaznaczcie **Commit directly to the `zmiana-B` branch`** (zapis na gałęzi zmiana-B).
10. **Commit changes**.

- [ ] B: mam commit na gałęzi `zmiana-B`  

### C2 — A tworzy gałąź `zmiana-A`

1. A na tej samej stronie repo klika przycisk gałęzi i wybiera **`main`** (wraca na main).
2. Znowu klika przycisk gałęzi, wpisuje `zmiana-A`, tworzy **Create branch zmiana-A from main**.
3. U góry ma być widać **`zmiana-A`**.
4. Edytuje `notatka-zespolu.md` i na końcu dopisuje **inną** linię:

`Autor zmiany A: [login A]`

5. Opis: `Wpis A na galezi zmiana-A` → zapis na gałęzi `zmiana-A` → **Commit changes**.

- [ ] A: mam commit na gałęzi `zmiana-A`  

### C3 — Scalenie obu gałęzi do `main` (robi A)

**Najpierw gałąź B:**

1. A klika zakładkę **Pull requests** → **New pull request**.
2. Ustawcie: **base:** `main`  oraz  **compare:** `zmiana-B`
3. Kliknijcie **Create pull request**.
4. Tytuł: `Scalenie zmiana-B`
5. Znowu **Create pull request**.
6. Kliknijcie **Merge pull request** → **Confirm merge**.

**Potem gałąź A:**

7. Znowu **New pull request**.
8. **base:** `main`  oraz  **compare:** `zmiana-A`
9. Utwórzcie prośbę i zróbcie **Merge pull request** → **Confirm merge**.

### Sprawdzenie

1. Przełączcie się na gałąź **`main`**.
2. Otwórzcie `notatka-zespolu.md`.
3. Na końcu powinny być **obie** linie: od A i od B.

- [ ] Na `main` widać wpis A i wpis B  

Jeśli przy drugiej prośbie GitHub zgłosi konflikt — zawołajcie nauczyciela. Przy dopisywaniu **różnych nowych linii** zwykle konfliktu nie ma.

---

## Część D — Konflikt zrobiony celowo

Teraz obie osoby zmienią **tę samą linię** hasła na **inne** słowa. To ma wywołać konflikt.

### D1 — Wspólny start na `main` (robi A)

1. A przełącza gałąź na **`main`**.
2. Edytuje `notatka-zespolu.md` i ustawia treść **dokładnie** na:

```markdown
# Notatka zespołu

Haslo dnia: JABLKO
Status: gotowi do konfliktu
```

3. Opis: `Reset przed konfliktem` → zapis na `main` → **Commit changes**.

- [ ] Na `main` hasło to znowu JABLKO  

### D2 — Oba przygotowują gałęzie **zanim** ktokolwiek scali

**Kolejność jest ważna. Najpierw obie gałęzie, dopiero potem scalanie.**

#### Uczeń A — gałąź `konflikt-A`

1. Z `main` utwórzcie gałąź `konflikt-A` (jak wcześniej: przycisk gałęzi → wpisz nazwę → Create branch … from main).
2. Na `konflikt-A` edytujcie plik: zmieńcie linię hasła na:

`Haslo dnia: GRUSZKA`

3. Opis: `Haslo GRUSZKA` → commit na `konflikt-A`.

#### Uczeń B — gałąź `konflikt-B`

1. B klika przycisk gałęzi i wybiera **`main`**.  
   **Sprawdźcie:** hasło na main nadal ma być **JABLKO** (jeszcze nikt nie scalił GRUSZKI).
2. Z `main` B tworzy gałąź `konflikt-B`.
3. Na `konflikt-B` zmienia tę **samą** linię na:

`Haslo dnia: SLIWKA`

4. Opis: `Haslo SLIWKA` → commit na `konflikt-B`.

- [ ] A: gotowa gałąź `konflikt-A` (GRUSZKA)  
- [ ] B: gotowa gałąź `konflikt-B` (SLIWKA)  
- [ ] **Nikt jeszcze nie robił Merge do main**  

### D3 — Pierwsze scalenie (bez konfliktu)

1. A tworzy Pull request: **base** `main` ← **compare** `konflikt-A`.
2. **Merge pull request** → **Confirm merge**.
3. Na `main` hasło powinno być teraz **GRUSZKA**.

- [ ] `konflikt-A` jest wciągnięte do `main`  

### D4 — Drugie scalenie (tu pojawia się konflikt)

1. A (lub B) tworzy Pull request: **base** `main` ← **compare** `konflikt-B`.
2. GitHub powinien pokazać, że nie da się scalić automatycznie — widać komunikat o **konflikcie** (*conflict*).
3. Kliknijcie przycisk **Resolve conflicts** (rozwiąż konflikty).

- [ ] Widzimy ekran rozwiązywania konfliktu  

### D5 — Naprawa konfliktu w przeglądarce (razem)

1. W edytorze konfliktu zobaczycie znaczniki podobne do:

```text
<<<<<<< konflikt-B
Haslo dnia: SLIWKA
=======
Haslo dnia: GRUSZKA
>>>>>>> main
```

2. **Usuńcie całkowicie** trzy rodzaje znaczników:
   - linię zaczynającą się od `<<<<<<<`
   - linię zawierającą tylko `=======`
   - linię zaczynającą się od `>>>>>>>`
3. Zostawcie **jedną** wybraną linię hasła, np.:

`Haslo dnia: SLIWKA`

   (albo GRUSZKA — byle para świadomie wybrała jedno).

4. Kliknijcie **Mark as resolved** (oznacz jako rozwiązane).
5. Kliknijcie **Commit merge** (zatwierdź scalenie konfliktu) — nazwa przycisku bywa bardzo podobna.
6. Wróćcie do widoku prośby (Pull request).
7. Kliknijcie **Merge pull request** → **Confirm merge**.

### Sprawdzenie

1. Gałąź **`main`**, plik `notatka-zespolu.md`.
2. Jest **jedno** hasło — to, które wybraliście.

- [ ] Konflikt rozwiązany i prośba przyjęta  
- [ ] Finalne hasło na `main`: `________________`  

---

## Część E — Dwie odpowiedzi własnymi słowami

1. Czym różni się praca jako **współpracownik w jednym repo** od **kopii (fork) + prośba o przyjęcie zmian** z karty 3?  
   `_______________________________________________________________`

2. Dlaczego konflikt pojawił się przy drugiej gałęzi, a nie przy pierwszej?  
   `_______________________________________________________________`

---

## Czy karta 4 jest zaliczona?

1. B jest współpracownikiem prywatnego repo A (widzi pliki).  
2. Na `main` były scalone gałęzie z rozgrzewki (wpisy A i B).  
3. Jest rozwiązany konflikt i wpisane finalne hasło.

**Następna karta:** [05_karta_issues_i_ochrona_galezi.md](05_karta_issues_i_ochrona_galezi.md)
