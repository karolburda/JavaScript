# Zadanie 2: Pilny alert medyczny na początku kolejki

## Cel
Aplikacja ma odczytać wybrany stopień pilności z grupy przycisków radiowych i utworzyć alert oznaczony kolorem na samym początku listy triage.

## Wskazówki / pułapki
- Jak pobrać zaznaczoną opcję z grupy przycisków radiowych? Odsyłacz: teoria.md, sekcja 4.2 oraz Ściąga.
- Zwróć uwagę, która metoda umieszcza element przed pierwszym dzieckiem kontenera.

## Treść merytoryczna
Prefiks wpisu alertu: ALERT MEDYCZNY KOD: 
Klasa wpisu alertu: wpis-sor-pilny.
Nazwa grupy opcji: kod-pilnosci.
Identyfikator przycisku: #btn-zglos-alarm.
Identyfikator kolejki: #kolejka-sor.

## Wymagania
1. Obsłuż kliknięcie przycisku #btn-zglos-alarm.
2. Odczytaj zaznaczoną wartość z grupy pól o nazwie kod-pilnosci.
3. Utwórz element listy z klasą wpis-sor-pilny oraz tekstem złożonym z podanego prefiksu i odczytanej wartości.
4. Wstaw utworzony element na sam początek elementu #kolejka-sor.

## Przykład
Stan początkowy: w kolejce widnieje jeden wpis rutynowy.
Akcja: użytkownik zaznacza Kod Czerwony (Resuscytacja) i klika przycisk.
Efekt: na samej górze kolejki pojawia się wpis z tekstem ALERT MEDYCZNY KOD: CZERWONY.
