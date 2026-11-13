# Zadanie: Kreator etykiet promocyjnych sklepu

## Cel
Napisz aplikację odczytującą wpisany przez użytkownika rabat procentowy i tworzącą nową etykietę promocyjną na początku listy rabatów.
Podobne mechanizmy stosowane są przy generowaniu dynamicznych tagów wyszukiwania, dodawaniu filtrów cenowych w e-commerce oraz tworzeniu odznak (badge) nowości na portalach informacyjnych.

## Wskazówki aktywizujące
- Przeczytaj w `teoria.md` opis metody `prepend()` w sekcji 4.2.
- Zastanów się: czym różni się efekt wstawienia metodą `prepend()` od metody `appendChild()`?
- Przetestuj w konsoli przeglądarki polecenie: `document.querySelector('#kontener-etykiet').prepend('TEST')`.

## Treść do wpisania
Wpisz dokładnie następujące teksty: treść nowej etykiety "Rabat specjalny: -" oraz doklejany sufiks "% na całą kategorię" wraz z etykietą bazową "Rabat specjalny: -10% na całą kategorię" i nagłówkiem "Kreator Etykiet Sklepowych".

## Wymagania
1. Pobierz referencje do pola numerycznego `#wartosc-rabatu`, przycisku `#btn-dodaj-etykiete` oraz kontenera `#kontener-etykiet`.
2. Po kliknięciu przycisku `#btn-dodaj-etykiete`:
   - odczytaj wartość z pola i sprawdź czy nie jest pusta,
   - utwórz element `span` za pomocą `document.createElement('span')`,
   - nadaj mu klasę `etykieta-rabatu`,
   - przypisz do właściwości `textContent` dosłowny tekst: "Rabat specjalny: -" + wartoscRabatu + "% na całą kategorię",
   - wstaw nowo utworzony element na sam początek kontenera za pomocą metody `prepend()`.

## Przykład
Stan początkowy: w kontenerze etykiet znajduje się etykieta bazowa.
Akcja: użytkownik wpisuje w pole liczbę 25 i klika "Dodaj etykietę".
Efekt: na samej górze kontenera pojawia się nowa etykieta z napisem "Rabat specjalny: -25% na całą kategorię".
