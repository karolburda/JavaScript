# Zadanie: Rejestr historii napraw warsztatu samochodowego

## Cel
Zaimplementuj dynamiczny dziennik serwisowy umożliwiający dodawanie wpisów o wykonanych naprawach oraz całkowite resetowanie (czyszczenie) historii do stanu pustego z wyświetleniem komunikatu zastępczego.
Mechanizm odwracalny i resetowanie stanu drzewa DOM metodą `replaceChildren()` lub czyszczeniem pętlą jest fundamentem filtrów wyszukiwania, resetowania formularzy oraz czyszczenia koszyka zamówień.

## Wskazówki aktywizujące
- Przeczytaj w `teoria.md` sekcję 6.3 opisującą czyszczenie całej zawartości kontenera.
- Zastanów się: dlaczego po wyczyszczeniu wpisów warto poinformować użytkownika, że lista jest obecnie pusta?
- Sprawdź działanie metody: `kontener.replaceChildren()`.

## Treść do wpisania
Wpisz dokładnie następujące teksty: komunikat o pustej historii "Brak zarejestrowanych napraw w bieżącej sesji warsztatu." oraz szablon rejestru naprawy "Naprawa pojazdu: ".

## Wymagania
1. Pobierz referencje do pola `#opis-naprawy`, przycisku `#btn-dodaj-naprawe`, przycisku `#btn-resetuj-historie` oraz kontenera `#historia-napraw`.
2. Po kliknięciu `#btn-dodaj-naprawe`:
   - odczytaj tekst z pola,
   - jeśli na liście znajduje się element stanu pustego (z klasą `stan-pusty`), usuń go za pomocą metody `.remove()`,
   - utwórz element `div` z klasą `wpis-naprawy`,
   - wstaw tekst "Naprawa pojazdu: " + nazwaUslugi,
   - dołącz element do `#historia-napraw` metodą `appendChild()`,
   - wyczyść pole tekstowe.
3. Po kliknięciu `#btn-resetuj-historie`:
   - wyczyść całą zawartość kontenera `#historia-napraw` za pomocą metody `replaceChildren()`,
   - utwórz akapit `p` z klasą `stan-pusty` i tekstem "Brak zarejestrowanych napraw w bieżącej sesji warsztatu.",
   - dołącz ten akapit do `#historia-napraw`.

## Przykład
Stan początkowy: w historii znajduje się komunikat stanu pustego.
Akcja: użytkownik wpisuje "Wymiana klocków hamulcowych" i klika "Dodaj naprawę", a następnie klika "Wyczyść całą historię".
Efekt: najpierw komunikat znika i pojawia się wpis naprawy, a po kliknięciu resetu lista zostaje wyczyszczona i powraca komunikat stanu pustego.
