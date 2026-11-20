# Zadanie 3: Obsługa pierwszego oczekującego pacjenta

## Cel
Aplikacja ma po kliknięciu przycisku usunąć pierwszego pacjenta z początku kolejki oczekujących (zgodnie z kolejnością zgłoszeń).

## Wskazówki / pułapki
- Czym różni się odwołanie do pierwszego dziecka od odwołania do ostatniego? Odsyłacz: teoria.md, sekcja 6.1 oraz 6.2.
- Upewnij się, że sprawdzasz obecność elementów przed próbą ich usunięcia.

## Treść merytoryczna
Tekst na przycisku: Przyjmij pierwszego pacjenta.
Komunikat o braku oczekujących: Wszyscy pacjenci w kolejce zostali już przyjęci.
Identyfikator przycisku: #btn-przyjmij-pierwszego.
Identyfikator kolejki: #poczekalnia-zabiegowa.
Identyfikator komunikatu: #komunikat-poczekalnia.

## Wymagania
1. Obsłuż kliknięcie przycisku #btn-przyjmij-pierwszego.
2. Sprawdź, czy element #poczekalnia-zabiegowa posiada oczekujących pacjentów:
   - jeśli posiada, usuń jego pierwsze dziecko z drzewa dokumentu,
   - jeśli kolejka jest pusta, wyświetl w elemencie #komunikat-poczekalnia treść podaną w sekcji Treść merytoryczna.

## Przykład
Stan początkowy: w poczekalni czeka trzech pacjentów.
Akcja: użytkownik klika przycisk Przyjmij pierwszego pacjenta.
Efekt: pierwszy pacjent znika z listy, a na czele kolejki staje kolejny oczekujący.
