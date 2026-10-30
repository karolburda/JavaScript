# Teoria: GitHub tylko w przeglądarce

Przeczytajcie ten plik **razem w parze** zanim zaczniecie karty pracy. Nie musicie uczyć się na pamięć — wracajcie tutaj, gdy w karcie pojawi się nieznane słowo.

---

## Jak czytać angielskie napisy

GitHub jest po angielsku. W materiałach:

| W tekście | Znaczenie |
|:---|:---|
| **Commit changes** | przycisk o takiej nazwie na stronie |
| *(zatwierdź zmiany)* | tłumaczenie po polsku |

Nie musicie znać angielskiego — wystarczy klikać przyciski o podanych nazwach.

---

## 1. Czym jest GitHub?

**GitHub** to strona internetowa ([github.com](https://github.com)), na której trzymacie projekty (np. stronę HTML) i **historię zmian**: kto co zmienił i kiedy.

Na tych zajęciach:

- pracujecie **tylko w przeglądarce**,
- **nie** instalujecie programu o nazwie Git,
- **nie** wpisujecie komend w terminalu.

**Po co to Wam.** Możecie otworzyć projekt na innym komputerze w szkole i współpracować w parze bez przesyłania plików mailem.

---

## 2. Konto i login (konto szkolne GM)

**Konto** — Wasze konto użytkownika na GitHubie.

**Login** (nazwa użytkownika) — krótka nazwa widoczna w adresie, np.:

`https://github.com/anna-nowak`

Na zajęciach logujecie się **kontem szkolnym GM** (Google lub Microsoft szkoły — powie nauczyciel). Dzięki temu wiadomo, że to konto z zajęć, a nie prywatne z domu.

**Po co.** Bez konta nie utworzycie własnego projektu na GitHubie.

**Częsty błąd.** Jesteście zalogowani na **cudze** konto (np. kolega nie wylogował się na wspólnych komputerach). Zawsze sprawdźcie mały obrazek / inicjał w **prawym górnym rogu** strony.

---

## 3. Repozytorium (projekt na GitHubie)

**Repozytorium** (krótko: **repo**) — jeden projekt na GitHubie: pliki + historia zmian.

Wyobraźcie sobie **teczkę projektu w internecie**, której GitHub pilnuje wersji.

### Publiczne i prywatne

| Rodzaj | Kto może obejrzeć | Do czego użyjecie na zajęciach |
|:---|:---|:---|
| **Public** (publiczne) | Każdy, kto zna adres | Publikacja strony WWW; ćwiczenie „kopii” i prośby o zmiany |
| **Private** (prywatne) | Tylko właściciel i osoby zaproszone | Wspólna praca w parze po zaproszeniu |

**Częsty błąd.** Wrzucanie do publicznego repo haseł, numerów telefonów, danych osobowych. Na zajęciach piszcie tylko przykładowe treści szkolne.

---

## 4. Commit — zapisanie zmiany w historii

**Commit** (czyt. „komit”) — **jeden zapisany krok** historii projektu.

Żeby powstał commit na github.com:

1. Tworzycie lub zmieniacie plik na stronie.
2. Na dole klikacie **Commit changes** (zatwierdź zmiany).
3. Wpisujecie krótki **opis po polsku**, np. `Dodano imię w README`.
4. Ponownie potwierdzacie przyciskiem **Commit changes**.

To nie jest „Zapisz” jak w Wordzie. To zapis z **opisem**, który zostaje w historii na zawsze (da się później obejrzeć).

**Dobry opis:** `Zmieniono tytuł strony na wersję 2`  
**Zły opis:** `asd`, `poprawka`, `aaaa`

---

## 5. Gałąź (branch) — równoległa wersja pracy

**Gałąź** — osobna linia pracy w tym samym repozytorium.

- Gałąź **`main`** — wersja główna (oficjalna).
- Gałąź robocza, np. **`poprawka-tekstu`** — tu robicie zmiany „na boku”, żeby od razu nie psuć wersji głównej.

**Prosty obrazek:**

```text
main:              ■ —— ■ —— ■
                           \
gałąź poprawka:             ■ —— ■   (Wasze poprawki)
```

Później poprawki można **scalić** z `main`.

Na GitHubie gałąź najczęściej tworzycie tak:

- przy zapisie zmian wybieracie opcję **Create a new branch** (utwórz nową gałąź),  
  **albo**
- klikacie nazwę gałęzi u góry listy plików (często widać napis `main`) i wpisujecie nową nazwę.

---

## 6. Scalenie (merge)

**Scalenie** (po angielsku *merge*) — połączenie zmian z jednej gałęzi z drugą, zwykle: gałąź robocza → `main`.

Na zajęciach scalacie najczęściej przyciskiem **Merge pull request** (scalenię prośbę o przyjęcie zmian) — o tym w następnym punkcie.

---

## 7. Konflikt przy scalaniu

**Konflikt** — sytuacja, w której **ta sama linijka w tym samym pliku** została zmieniona inaczej na dwóch gałęziach.

Przykład:

- na jednej gałęzi: `Hasło dnia: GRUSZKA`
- na drugiej: `Hasło dnia: ŚLIWKA`

GitHub **nie zgadnie**, która wersja jest właściwa. Musisz **ręcznie** wybrać jedną (albo napisać własną), usunąć dziwne znaczniki konfliktu i zatwierdzić.

**Częsty błąd.** Kasowanie całego pliku ze strachu. Zasada: zostawcie jedną sensowną treść, usuńcie linie zaczynające się od `<<<<<<<`, `=======`, `>>>>>>>`.

---

## 8. Prośba o przyjęcie zmian (Pull Request)

**Pull Request** (krótko w kartach: **prośba o przyjęcie zmian**; na przyciskach GitHuba zobaczycie *Pull request*) — formalna prośba:

> „Weź moje zmiany do Twojego projektu / do gałęzi main.”

Typowa kolejność:

1. Ktoś przygotował zmiany (na gałęzi albo w kopii projektu).
2. Otwiera prośbę i opisuje, co zmienił.
3. Właściciel **ogląda różnice**, może napisać komentarz.
4. Właściciel klika **Merge pull request** (przyjmij i scal) albo prosi o poprawkę.

### Kopia cudzego projektu (Fork)

**Fork** — **kopia** cudzego **publicznego** repozytorium **na Twoim koncie**.

Po co: nie macie prawa zapisu w cudzym publicznym projekcie. Robicie kopię u siebie, zmieniacie kopię, a potem wysyłacie **prośbę o przyjęcie zmian** do oryginału.

To sposób pracy z karty 3 (między Waszymi publicznymi stronami).

---

## 9. Współpracownik (Collaborator)

**Collaborator** (współpracownik) — osoba **zaproszona** do Waszego repozytorium, która może w nim pracować (zmieniać pliki, tworzyć gałęzie — zależnie od ustawień).

Właściciel zaprasza w: **Settings** (ustawienia) → **Collaborators** (współpracownicy).  
Zaproszona osoba musi **zaakceptować** zaproszenie.

### Dwa sposoby współpracy — nie mylcie ich

| Sposób | Prosto |
|:---|:---|
| **Współpracownik** | Oboje pracujecie w **jednym** wspólnym repo (często prywatnym) |
| **Fork + prośba o przyjęcie zmian** | Robicie **kopię** cudzego publicznego repo i prosicie o wciągnięcie Waszych zmian |

---

## 10. Zgłoszenie / zadanie (Issue)

**Issue** (zgłoszenie) — kartka przy repozytorium: „co jest do zrobienia” albo „co jest nie tak”.

Możecie zgłoszenie:

- utworzyć (tytuł + opis),
- skomentować,
- **zamknąć**, gdy sprawa załatwiona.

Czasem w opisie prośby o przyjęcie zmian wpisuje się magiczne `Closes #1` — po przyjęciu zmian GitHub **sam zamknie** zgłoszenie numer 1. Ćwiczycie to na karcie 5.

---

## 11. Publikacja strony (GitHub Pages)

**GitHub Pages** — darmowe pokazanie Waszej strony WWW z publicznego repozytorium.

Na zajęciach potrzebujecie:

1. repozytorium ustawione jako **Public**,
2. plik o nazwie dokładnie **`index.html`** (strona startowa) leżący „na wierzchu” projektu (nie w podfolderze),
3. włączenia publikacji w **Settings** → **Pages**.

Adres strony będzie podobny do:

`https://WASZ-LOGIN.github.io/NAZWA-REPOZYTORIUM/`

Po włączeniu publikacji strona może pojawić się dopiero po **1–3 minutach**. To normalne.

---

## 12. Ochrona głównej gałęzi

**Ochrona gałęzi** — reguły, które utrudniają przypadkowe popsucie `main`.

Najczęstsza reguła na zajęciach: **nie zapisuj zmian wprost na `main`** — najpierw gałąź robocza, potem prośba o przyjęcie zmian.

Właściciel ustawia to w: **Settings** → **Branches** (gałęzie).

Na darmowym koncie niektóre opcje w **prywatnym** repo bywają niedostępne (przycisk szary). Wtedy na karcie 5 jest plan B — ćwiczenie na repo **publicznym**.

---

## 13. Słowniczek (zajrzyjcie tu w trakcie kart)

| Słowo na GitHubie / w kartach | Po polsku |
|:---|:---|
| Repository / repo | Repozytorium = projekt |
| Commit | Zapisany krok historii |
| Branch | Gałąź (np. `main`) |
| main | Główna gałąź projektu |
| Merge | Scalenie zmian |
| Conflict | Konflikt (ta sama linia zmieniona inaczej) |
| Pull request | Prośba o przyjęcie zmian |
| Fork | Kopia cudzego publicznego repo na Waszym koncie |
| Collaborator | Zaproszony współpracownik |
| Issue | Zgłoszenie / zadanie |
| GitHub Pages | Opublikowana strona WWW z repo |
| Branch protection | Ochrona gałęzi (np. `main`) |
| URL | Adres strony w pasku przeglądarki (zaczyna się od `https://`) |

---

## 14. Zasada na całą salę

> Zanim klikniecie **Commit changes**, sprawdźcie trzy rzeczy:  
> 1) czy to **moje** konto,  
> 2) czy to **właściwe** repozytorium,  
> 3) czy zapisuję na **właściwej** gałęzi (`main` albo roboczej).

Gdy utkniecie: porównajcie adres w pasku przeglądarki z adresem wpisanym w karcie.
