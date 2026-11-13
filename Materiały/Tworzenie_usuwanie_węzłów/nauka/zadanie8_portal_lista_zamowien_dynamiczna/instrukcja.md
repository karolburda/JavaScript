# Zadanie: Dynamiczny rejestr zamówień portalu IT-Partner

## Cel
Rozbuduj portal IT-Partner o dynamiczny rejestr zamówień licencyjnych, umożliwiający dodawanie nowych pozycji do listy w drzewie DOM oraz usuwanie poszczególnych zgłoszeń z natychmiastowym przeliczeniem sumy.
Mechanizm ten jest kluczowym elementem portali korporacyjnych, koszyków B2B, systemów ticketingowych helpdesk oraz kalkulatorów wdrożeń chmurowych.

## Wskazówki aktywizujące
- Przeanalizuj w `teoria.md` sekcje 2.1, 4.1 oraz 6.1 dotyczące tworzenia (`createElement`), wpinania (`appendChild`) oraz usuwania (`remove`) węzłów.
- Pomyśl: w jaki sposób powiązać zdarzenie usunięcia bezpośrednio z nowo utworzonym elementem `li`?
- Przetestuj w konsoli DevTools: `document.querySelector('#lista-zamowien').children`.

## Treść do wpisania
Wpisz dokładnie następujące teksty: etykietę przycisku usuwania "Usuń licencję" oraz szablon podsumowania "Łączna wartość aktywnych licencji chmurowych: " wraz z pozycją startową "Pakiet Podstawowy Cloud [Standard] — 1200 zł".

## Wymagania
1. Zachowaj istniejące kontrolki personalizacji wizualnej portalu (Zero Regresji).
2. Pobierz referencje do pola nazwy licencji `#nazwa-licencji`, listy wyboru wariantu `#wariant-licencji`, pola kwoty `#cena-licencji`, przycisku `#btn-dodaj-licencje`, listy `#lista-zamowien` oraz kontenera `#podsumowanie-licencji`.
3. Po kliknięciu `#btn-dodaj-licencje`:
   - odczytaj wartości z pól; jeśli nazwa jest pusta lub cena <= 0, przerwij operację,
   - utwórz element `li` i nadaj mu klasę `pozycja-zamowienia`,
   - utwórz element `span` z tekstem: nazwaLicencji + " [" + wariant + "] — " + cena + " zł",
   - utwórz element `button` z klasą `btn-usun-licencje` oraz tekstem "Usuń licencję",
   - do przycisku przypnij zdarzenie `click`, które odejmie kwotę od sumy, wywoła `li.remove()` i zaktualizuje tekst w `#podsumowanie-licencji`,
   - dołącz `span` i `button` do `li`, a `li` do `#lista-zamowien`,
   - zwiększ sumę i zaktualizuj tekst w `#podsumowanie-licencji`: "Łączna wartość aktywnych licencji chmurowych: " + sumaWartosci + " zł",
   - wyczyść pole nazwy licencji i pole ceny.

## Przykład
Stan początkowy: lista zamówień zawiera jedną licencję startową (1200 zł).
Akcja: użytkownik dodaje licencję "Baza danych SQL" (Wariant Enterprise) za 2500 zł.
Efekt: lista wzbogaca się o nową pozycję, łączna kwota rośnie do 3700 zł. Po kliknięciu "Usuń licencję" przy pierwszej pozycji, łączna suma wynosi 2500 zł.
