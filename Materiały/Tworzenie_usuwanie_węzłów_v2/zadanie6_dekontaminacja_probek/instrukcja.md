# Zadanie 6: Dekontaminacja i reset komory sterylizatora

## Cel
Aplikacja ma umożliwiać wprowadzanie oznaczeń skażeń oraz przeprowadzenie pełnej dekontaminacji (czyszczenia) z przywróceniem certyfikatu sterylności.

## Wskazówki / pułapki
- Jakie polecenie błyskawicznie czyści wszystkie dzieci wskazanego pojemnika? Odsyłacz: teoria.md, sekcja 6.3.
- Pamiętaj o usunięciu komunikatu sterylności przy dodawaniu nowego wpisu.

## Treść merytoryczna
Komunikat o sterylności komory: Komora zdekontaminowana. Pełna sterylność mikrobiologiczna.
Prefiks wpisu skażenia: Zgłoszenie materiału biologicznego: 
Klasa wpisu skażenia: wpis-skazenia.
Klasa stanu sterylnego: stan-sterylny.
Identyfikator pola: #opis-materialu.
Identyfikator przycisku dodania: #btn-wprowadz-material.
Identyfikator przycisku sterylizacji: #btn-sterylizuj-komore.
Identyfikator rejestru: #rejestr-komory.

## Wymagania
1. Obsłuż kliknięcie przycisku #btn-wprowadz-material:
   - jeśli w rejestrze znajduje się element z klasą stan-sterylny, usuń go,
   - utwórz element div z klasą wpis-skazenia i zadanym prefiksem, dodaj go do #rejestr-komory, wyczyść pole.
2. Obsłuż kliknięcie przycisku #btn-sterylizuj-komore:
   - wyczyść całą zawartość elementu #rejestr-komory,
   - utwórz akapit p z klasą stan-sterylny oraz zadanym tekstem o pełnej sterylności, po czym wstaw go do #rejestr-komory.

## Przykład
Stan początkowy: w rejestrze widnieje komunikat o pełnej sterylności.
Akcja: użytkownik wprowadza próbkę patogenu, a następnie uruchamia przycisk sterylizacji.
Efekt: najpierw komunikat znika i pojawia się wpis materiału, a po sterylizacji rejestr jest czyszczony i powraca komunikat o pełnej sterylności.
