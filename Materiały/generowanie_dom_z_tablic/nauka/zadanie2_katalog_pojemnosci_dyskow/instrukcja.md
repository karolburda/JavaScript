## Cel
Zbuduj skrypt, który dynamicznie reaguje na zmianę suwaka (`input[type="range"]`) o identyfikatorze `#ilosc`, generując w kontenerze `#lista-zamowien` listę kafelków dysków SSD o pojemnościach mniejszych lub równych wybranej wartości. Sukcesem jest natychmiastowe odświeżenie listy z doklejoną jednostką "GB" przy każdym przesunięciu suwaka oraz bieżąca aktualizacja etykiety `#podsumowanie`.

Ciągłe wejście z formatowaniem jednostek przydaje się m.in. przy suwakach budżetu cenowego w filtrach e-commerce, w konfiguratorach grubości linii w programach graficznych oraz przy doborze limitu transferu danych w ofertach telekomunikacyjnych.

## Wskazówki aktywizujące
- Przeczytaj sekcję 2 i 7 w pliku `teoria.md` na temat czyszczenia kontenera i ponownego renderowania po zmianie danych.
- Dlaczego do suwaków lepiej użyć zdarzenia `input` zamiast `change`? Sprawdź w DevTools, kiedy wyzwalane jest każde z nich.
- Wpisz w konsoli przeglądarki: `document.querySelector('#ilosc').value` podczas przesuwania suwaka.

## Treść do wpisania
Dostępne warianty pojemności w tablicy liczbowej: `[120, 240, 480, 960, 2000]`.
Etykieta wskaźnika suwaka: "Maksymalna pojemność: ".
Tekst kafelka dysku: "Dysk SSD - pojemność: " z doklejoną jednostką " GB".
Komunikat, gdy żaden dysk nie spełnia kryterium: "Brak dysków spełniających wybrane kryterium".

## Wymagania
1. Pobierz suwak `#ilosc`, kontener kafelków `#lista-zamowien` oraz pole tekstu `#podsumowanie`.
2. Do elementu `#ilosc` podepnij nasłuchiwanie zdarzenia `input`.
3. W funkcji obsługi:
   - Odczytaj wartość liczbową suwaka.
   - Zaktualizuj treść `#podsumowanie` do postaci: "Maksymalna pojemność: X GB" (gdzie X to wartość suwaka).
   - Opróżnij kontener `#lista-zamowien`.
   - Przefiltruj tablicę pojemności, wybierając wartości mniejsze bądź równe wybranej.
   - Jeśli przefiltrowana lista jest pusta, wyświetl akapit z tekstem "Brak dysków spełniających wybrane kryterium".
   - W przeciwnym razie utwórz dla każdej pojemności element `div` z klasą `karta-dysku` i tekstem "Dysk SSD - pojemność: Y GB", po czym wstaw go do `#lista-zamowien`.
4. Wywołaj funkcję renderującą raz na starcie skryptu, aby zainicjować widok dla domyślnej wartości suwaka (500).

## Przykład
Stan początkowy: Suwak ustawiony na 500 GB. Wskaźnik `#podsumowanie` wskazuje "Maksymalna pojemność: 500 GB". Na ekranie widnieją 3 kafelki: 120 GB, 240 GB i 480 GB.
Akcja: Użytkownik przesuwa suwak na 1000 GB.
Efekt: Wskaźnik zmienia się na "Maksymalna pojemność: 1000 GB", a lista kafelków zostaje natychmiast rozszerzona o czwarty kafelek: 960 GB.
