# Zadanie: Kalkulator zamówień serwisu komputerowego

## Cel
Napisz biznesowy moduł koszyka usług serwisowych, który tworzy dynamiczne wiersze z nazwą usługi, ceną oraz przyciskiem usuwania pozycji, na bieżąco przeliczając łączną kwotę do zapłaty.
Taki wzorzec komponentu biznesowego występuje w arkuszach egzaminacyjnych INF.03, systemach fakturowania, rezerwacjach biletów kinowych oraz koszykach zakupowych e-commerce.

## Wskazówki aktywizujące
- Przeanalizuj w `teoria.md` sekcję 7 dotyczącą podpinania zdarzeń do dynamicznie tworzonych przycisków.
- Zastanów się: jak powiązać funkcję usuwania z wierszem `li` oraz zaktualizować zmienną sumaryczną kosztu?
- Przetestuj w konsoli odczyt wartości numerycznej: `parseFloat(document.querySelector('#cena-uslugi').value)`.

## Treść do wpisania
Wpisz dokładnie następujące teksty: etykietę przycisku usuwania "Usuń pozycję" oraz szablon łącznego kosztu "Łączny koszt zamówionych usług serwisowych: " ze znakiem waluty " zł".

## Wymagania
1. Pobierz referencje do pola nazwy `#nazwa-uslugi`, pola ceny `#cena-uslugi`, przycisku `#btn-dodaj-usluge`, listy `#lista-uslug` oraz elementu `#podsumowanie-kosztu`.
2. Zdefiniuj zmienną numeryczną przechowującą bieżącą sumę (wartość początkowa: 0).
3. Po kliknięciu `#btn-dodaj-usluge`:
   - odczytaj nazwę i cenę usługi; jeśli nazwa jest pusta lub cena <= 0, przerwij działanie,
   - utwórz element `li` z klasą `pozycja-serwisowa`,
   - utwórz element `span` z tekstem nazwy i ceny,
   - utwórz element `button` z klasą `btn-usun-pozycje` i tekstem "Usuń pozycję",
   - zarejestruj na przycisku usuwania zdarzenie `click`: po kliknięciu odejmij cenę od sumy, wywołaj `li.remove()` i zaktualizuj tekst w `#podsumowanie-kosztu`,
   - dołącz `span` i `button` do elementu `li`, a `li` do `#lista-uslug`,
   - powiększ sumę o cenę i zaktualizuj `#podsumowanie-kosztu`: "Łączny koszt zamówionych usług serwisowych: " + lacznyKoszt + " zł",
   - wyczyść pola formularza.

## Przykład
Stan początkowy: lista usług jest pusta, łączny koszt wynosi 0 zł.
Akcja: użytkownik dodaje "Czyszczenie układu chłodzenia" za 120 zł, a potem "Instalacja systemu" za 100 zł.
Efekt: lista zawiera dwie pozycje z przyciskami "Usuń pozycję", a suma wynosi 220 zł. Po kliknięciu usunięcia pierwszej pozycji suma spada do 100 zł.
