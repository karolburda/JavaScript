# Zadanie: Karta pozycji menu kawiarni

## Cel
Zaimplementuj dynamiczną synchronizację nazwy kawy z podglądem na żywo oraz dołączanie zatwierdzonej pozycji do widocznego menu kawiarni.
Mechanizm dwukierunkowej synchronizacji z tworzeniem węzłów jest powszechnie stosowany w edytorach profili użytkownika, podglądzie wizytówek online oraz kreatorach ogłoszeń nieruchomości.

## Wskazówki aktywizujące
- Przeanalizuj w `teoria.md` sekcję 1 oraz sekcję 2.1 dotyczącą cyklu życia węzła.
- Pomyśl: w jaki sposób jedno zdarzenie `input` może aktualizować podgląd, a zdarzenie `click` utrwalać wpis w drzewie DOM?
- Zbadaj w konsoli przeglądarki zawartość właściwości `textContent` elementu podglądu.

## Treść do wpisania
Wpisz dokładnie następujące teksty: domyślny komunikat podglądu "Podgląd: Czekam na wpisanie nazwy napoju..." oraz szablon wpisu "Napój deserowy: " i pozycję startową menu "Napój deserowy: Espresso Doppio".

## Wymagania
1. Wyszukaj pole tekstowe `#nazwa-napoju`, etykietę podglądu `#etykieta-podgladu`, przycisk `#btn-zatwierdz-pozycje` oraz listę menu `#lista-menu`.
2. Na polu `#nazwa-napoju` obsłuż zdarzenie `input`:
   - jeśli pole nie jest puste, ustaw w etykiecie podglądu: "Podgląd pozycji: " + nazwaNapoju,
   - jeśli pole jest puste, przywróć: "Podgląd: Czekam na wpisanie nazwy napoju...".
3. Na przycisku `#btn-zatwierdz-pozycje` obsłuż zdarzenie `click`:
   - pobierz wpisaną nazwę napoju,
   - utwórz nowy element `li`,
   - nadaj mu klasę `pozycja-menu`,
   - wstaw tekst: "Napój deserowy: " + nazwaNapoju,
   - dołącz element do `#lista-menu` za pomocą metody `appendChild()`,
   - wyczyść pole tekstowe i zresetuj etykietę podglądu.

## Przykład
Stan początkowy: pole jest puste, w podglądzie widnieje napis "Podgląd: Czekam na wpisanie nazwy napoju...".
Akcja: użytkownik wpisuje "Mocha Karmelowa" i klika "Zatwierdź pozycję".
Efekt: na liście menu pojawia się punkt "Napój deserowy: Mocha Karmelowa", a podgląd wraca do stanu oczekiwania.
