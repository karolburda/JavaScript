# Zadanie 1: Karta przyjęcia pacjenta

## Cel
Aplikacja ma po wybraniu opcji z listy rozwijanej utworzyć wpis skierowania do gabinetu i umieścić go na końcu rejestru wizyt.

## Wskazówki / pułapki
- Jak odczytać aktualnie wybraną opcję z listy rozwijanej? Odsyłacz: teoria.md, sekcja 2.1 oraz sekcja 4.1.
- Zwróć uwagę, aby nowo utworzony element nie nadpisywał istniejących rekordów.

## Treść merytoryczna
Prefiks wpisu wizyty: Skierowanie pacjenta do: 
Klasa wpisu wizyty: wpis-medyczny.
Identyfikator listy rozwijanej: #wybor-poradni.
Identyfikator przycisku: #btn-zarejestruj.
Identyfikator rejestru: #rejestr-wizyt.

## Wymagania
1. Obsłuż kliknięcie przycisku o identyfikatorze #btn-zarejestruj.
2. Odczytaj wartość z listy rozwijanej #wybor-poradni.
3. Utwórz element akapitu, nadaj mu klasę wpis-medyczny oraz treść złożoną z prefiksu i nazwy wybranej poradni.
4. Umieść utworzony akapit na końcu elementu o identyfikatorze #rejestr-wizyt.

## Przykład
Stan początkowy: rejestr wizyt zawiera powitanie recepcji.
Akcja: użytkownik wybiera Gabinet Kardiologiczny i klika przycisk.
Efekt: na dole rejestru pojawia się nowy element z tekstem Skierowanie pacjenta do: Gabinet Kardiologiczny.
