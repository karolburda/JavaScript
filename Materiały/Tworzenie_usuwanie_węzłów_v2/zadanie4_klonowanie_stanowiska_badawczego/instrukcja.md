# Zadanie 4: Powielanie stanowiska analitycznego

## Cel
Aplikacja ma na podstawie istniejącego profilu stanowiska badawczego sklonować cały moduł laboratoryjny wraz z jego aparaturą i wpiąć go do planu laboratorium.

## Wskazówki / pułapki
- Jak zapewnić sklonowanie całego wnętrza bloku, a nie tylko zewnętrznego znacznika? Odsyłacz: teoria.md, sekcja 5.
- Sprawdź, czy referencja do elementu wzorcowego jest poprawna.

## Treść merytoryczna
Tekst na przycisku: Powiel profil stanowiska.
Klasa stanowiska wzorcowego: .stanowisko-wzorzec.
Identyfikator przycisku: #btn-powiel-stanowisko.
Identyfikator planu: #plan-laboratorium.

## Wymagania
1. Obsłuż kliknięcie przycisku o identyfikatorze #btn-powiel-stanowisko.
2. Pobierz element o klasie .stanowisko-wzorzec i wykonaj jego głębokie sklonowanie.
3. Wstaw utworzony element do kontenera o identyfikatorze #plan-laboratorium.

## Przykład
Stan początkowy: w planie znajduje się jedno stanowisko badawcze.
Akcja: użytkownik klika przycisk Powiel profil stanowiska.
Efekt: w planie pojawia się drugie identyczne stanowisko laboratoryjne ze wszystkimi opisami aparatury.
