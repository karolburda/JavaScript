# Karta 5: Zgłoszenia (Issues) i ochrona gałęzi main

**Para:** Uczeń A + Uczeń B  

**Gdzie:** to samo **prywatne** wspólne repo z karty 4 (właściciel A, współpracownik B)  
**Cel:** otworzyć i zamknąć zgłoszenia; włączyć ochronę `main` (albo udokumentować, że GitHub nie pozwala) i sprawdzić, że zmiana idzie przez prośbę

Teoria: [00_teoria.md](00_teoria.md) — punkty 10 i 12.

---

## Dane

| Pole | Wpiszcie |
|:---|:---|
| Adres wspólnego prywatnego repo | |
| Login właściciela (A) | |
| Login współpracownika (B) | |

---

## Część A — Zgłoszenie nr 1 (Issue) i automatyczne zamknięcie

### A1 — B tworzy zgłoszenie

1. Oboje wejdźcie na wspólne prywatne repo A.
2. Kliknijcie zakładkę **Issues** (zgłoszenia).
3. Kliknijcie zielony **New issue** (nowe zgłoszenie).
4. **Title** (tytuł) wpiszcie:

`Haslo dnia ma byc wspomniane w README`

5. W polu opisu wklejcie i uzupełnijcie (zamiast `LOGIN-A` wpiszcie prawdziwy login A z małpą):

```markdown
## Problem
W pliku notatka-zespolu.md jest haslo dnia, ale README o tym nie wspomina.

## Co ma powstac
W README.md ma pojawic sie krotka informacja, ze haslo dnia jest w pliku notatka-zespolu.md.

## Kto robi
@LOGIN-A
```

6. Kliknijcie **Create issue**.
7. Spójrzcie na tytuł zgłoszenia — obok jest numer, np. **#1**. Zapiszcie ten numer.

- [ ] Zgłoszenie utworzone  
  Adres zgłoszenia: `_________________________________`  
  Numer (np. 1): `____`

### A2 — A wykonuje zadanie na osobnej gałęzi

1. A przełącza się na gałąź **`main`** (przycisk z nazwą gałęzi u góry).
2. Tworzy nową gałąź o nazwie `issue-readme` od `main`  
   (przycisk gałęzi → wpisz `issue-readme` → **Create branch issue-readme from main**).
3. Sprawdźcie, że u góry widać gałąź **`issue-readme`**.
4. Otwórzcie plik **`README.md`** → ołówek.
5. Na końcu pliku dopiszcie:

```markdown
## Notatka zespolu
Aktualne haslo dnia jest w pliku notatka-zespolu.md.
```

6. Opis: `README wspomina o notatce` → zapis na gałęzi `issue-readme` → **Commit changes**.

### A3 — A otwiera prośbę i łączy ją ze zgłoszeniem

1. A klika **Pull requests** → **New pull request**.
2. **base:** `main`  oraz  **compare:** `issue-readme`
3. **Create pull request**.
4. Tytuł np.: `README: informacja o hasle dnia`
5. W polu opisu **koniecznie** wpiszcie (wstawcie swój numer zgłoszenia zamiast `1`):

`Closes #1`

   To specjalne zdanie dla GitHuba: „po przyjęciu tej prośby zamknij zgłoszenie numer 1”.

6. **Create pull request**.
7. B otwiera tę prośbę, klika **Files changed**, sprawdza dopisek w README, wraca i pisze komentarz `OK`.
8. A lub B klika **Merge pull request** → **Confirm merge**.

### Sprawdzenie

1. Wejdźcie w zakładkę **Issues**.
2. Zgłoszenie nr 1 powinno być **Closed** (zamknięte) — czasem trzeba przełączyć filtr z „Open” na „Closed”.

- [ ] Prośba przyjęta; adres prośby: `_________________________________`  
- [ ] Zgłoszenie nr 1 jest zamknięte (**Closed**)  

---

## Część B — Zgłoszenie nr 2 (zamknięcie ręczne)

1. **B** tworzy kolejne **New issue**.
2. Tytuł: `Sprawdzic historie commitow we dwoje`
3. W opisie jedno zdanie: `Czy oboje widzimy liste commitow w tym repo?`
4. **Create issue**.
5. **A** otwiera to zgłoszenie i dopisuje komentarz: `Sprawdzone — widać.` → **Comment**.
6. **B** na stronie tego zgłoszenia klika **Close issue** (zamknij zgłoszenie).

- [ ] Drugie zgłoszenie zamknięte ręcznie  
  Adres: `_________________________________`

---

## Część C — Włączenie ochrony gałęzi `main`

Robi **A** (właściciel). B może patrzeć.

### Kroki

1. Wejdźcie do wspólnego prywatnego repo → **Settings**.
2. W lewym menu kliknijcie **Branches** (gałęzie).
3. Kliknijcie przycisk w stylu:
   - **Add branch protection rule**, albo  
   - **Add classic branch protection rule**, albo  
   - **Add rule**  
   (GitHub czasem zmienia napis — wybierzcie opcję dodania reguły ochrony).
4. W polu **Branch name pattern** (wzorzec nazwy gałęzi) wpiszcie dokładnie:

`main`

5. Na liście opcji zaznaczcie kratkę:

**Require a pull request before merging**  
(wymagaj prośby o przyjęcie zmian przed scaleniem)

6. Jeśli pod spodem widać **Require approvals** (wymagaj akceptacji) — zaznaczcie i ustawcie liczbę na **1**.  
   Jeśli tej opcji nie ma albo jest szara — pomińcie ją i idźcie dalej.
7. Przewińcie na dół i kliknijcie **Create** albo **Save changes** (zapisz).
8. Gdy GitHub prosi o hasło — potwierdźcie.

### Gdy nie da się włączyć ochrony w prywatnym repo

Na darmowym koncie część ochrony bywa zablokowana w prywatnym projekcie.

Zróbcie wtedy plan B:

1. Wejdźcie w **publiczne** repo A (`strona-para-…` z karty 2).
2. Powtórzcie te same kroki ochrony dla gałęzi `main`.
3. W tabeli poniżej napiszcie, że ochrona jest na publicznym repo.

| Pytanie | Wasza odpowiedź |
|:---|:---|
| Ochrona włączona gdzie? (prywatne / publiczne / nie udało się) | |
| Które kratki udało się zaznaczyć? | |
| Co GitHub napisał, jeśli blokował opcję? | |

- [ ] Reguła dla `main` jest zapisana **albo** wypełniliśmy tabelę (plan B / brak opcji)  

---

## Część D — Test: czy ochrona działa

Cel: sprawdzić, że nie zapisujecie już „od razu na main”, tylko przez gałąź i prośbę.

Wykonujcie test w tym repo, w którym **udało się** włączyć ochronę (prywatne albo publiczne z planu B).

### D1 — Próba zapisu wprost na main

1. Przełączcie się na gałąź **`main`**.
2. Otwórzcie dowolny plik tekstowy (np. `README.md`) → ołówek.
3. Dopiszcie na końcu jedną niewinną linię, np.:

`Test ochrony galezi.`

4. Na dole **zaznaczcie** opcję:

**Commit directly to the `main` branch`**

5. Kliknijcie **Commit changes**.

### Co może się stać (jedna z możliwości jest OK)

- GitHub **odmawia** i pokazuje komunikat o ochronie gałęzi, **albo**
- GitHub **nie pozwala** wybrać zapisu na `main` i każe utworzyć nową gałąź, **albo**
- pojawia się inny komunikat blokujący bezpośredni zapis.

Zapiszcie poniżej **własnymi słowami**, co zobaczyliście:  
`_______________________________________________________________`

- [ ] Wykonaliśmy próbę bezpośredniego zapisu na `main` i opisaliśmy wynik  

### D2 — Poprawna droga: gałąź + prośba

1. Jeśli zmiana nie weszła: znowu edytujcie plik (albo kontynuujcie, jeśli GitHub już zaproponował nową gałąź).
2. Przy zapisie wybierzcie **Create a new branch** i nazwę: `test-ochrony`
3. Utwórzcie **Pull request** do `main` (jak na poprzednich kartach).
4. Jeśli ochrona wymaga akceptacji drugiej osoby: B otwiera prośbę → **Review changes** (jeśli widać) → wybiera **Approve** (zaakceptuj) → potwierdza.  
   Jeśli nie ma Approve: B pisze komentarz `OK` — a potem mergujecie, o ile GitHub pozwala.
5. **Merge pull request** → **Confirm merge**.

- [ ] Zmiana weszła na `main` **przez prośbę**  
  Adres tej prośby: `_________________________________`

---

## Część E — Podsumowanie całego zestawu (para)

Odznaczcie, co udało się zrobić na github.com:

- [ ] Logowanie kontem szkolnym GM  
- [ ] Repozytorium publiczne i prywatne  
- [ ] Zapisywanie zmian (commit) w przeglądarce  
- [ ] Publikacja strony (GitHub Pages)  
- [ ] Kopia (fork) + prośba o przyjęcie zmian między publicznymi repo  
- [ ] Współpracownik (Collaborator)  
- [ ] Gałęzie i scalanie  
- [ ] Rozwiązanie konfliktu  
- [ ] Zgłoszenia Issues (otwarcie, `Closes #`, zamknięcie ręczne)  
- [ ] Ochrona gałęzi `main` (lub zapisana próba / plan B)

### Linki zbiorcze dla nauczyciela

| Element | Adres URL |
|:---|:---|
| Publiczne repo A + strona na żywo | |
| Publiczne repo B + strona na żywo | |
| Wspólne prywatne repo | |
| Jedna prośba z karty 3 (A↔B) | |
| Zgłoszenie zamknięte przez `Closes #` | |
| Prośba z testu ochrony `main` | |

---

## Czy karta 5 jest zaliczona?

1. Jedno zgłoszenie zamknięte dzięki `Closes #…` po Merge.  
2. Drugie zgłoszenie zamknięte przyciskiem **Close issue**.  
3. Ochrona `main` włączona **albo** jasno opisany brak opcji + plan B.  
4. Pokazaliście, że na chronione `main` zmiana wchodzi przez prośbę.

---

## Koniec zestawu

Wróćcie do [README.md](README.md). Oddajcie nauczycielowi wypełnione karty i listę linków.
