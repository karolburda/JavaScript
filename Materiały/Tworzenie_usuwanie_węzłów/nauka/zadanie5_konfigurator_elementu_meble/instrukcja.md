# Zadanie: Konfigurator elementów mebli biurowych

## Cel
Napisz skrypt odczytujący parametry z dwóch kontrolek formularza (kategorii mebla z listy rozwijanej oraz wybranego materiału z pól wyboru radio) i wstawiający skonfigurowaną kartę specyfikacji do zestawienia.
Zależność wieloargumentowa z dynamicznym tworzeniem węzłów DOM to standardowy fundament kreatorów samochodów, konfiguratorów zestawów komputerowych oraz generatorów zamówień produkcyjnych.

## Wskazówki aktywizujące
- Zapoznaj się w `teoria.md` z sekcją 2 dotyczącą tworzenia elementów oraz nadawania im klas.
- Pomyśl: w jaki sposób pobrać zaznaczoną opcję radio za pomocą selektora `document.querySelector('input[name="material"]:checked')`?
- Sprawdź w konsoli: `document.querySelector('#typ-mebla').value`.

## Treść do wpisania
Wpisz dokładnie następujące teksty: nagłówek karty "Skonfigurowany element wyposażenia" oraz szablon specyfikacji technicznej "Typ: " i separator parametrów " | Wykończenie: ".

## Wymagania
1. Pobierz referencje do listy rozwijanej `#typ-mebla`, grupy pól radio `input[name="material"]`, przycisku `#btn-dodaj-konfiguracje` oraz kontenera `#zestawienie-mebli`.
2. Po kliknięciu `#btn-dodaj-konfiguracje`:
   - odczytaj wybraną wartość mebla oraz zaznaczony materiał,
   - utwórz element nadrzędny `div` z klasą `karta-specyfikacji`,
   - utwórz element `h4` z klasą `tytul-specyfikacji` i tekstem "Skonfigurowany element wyposażenia",
   - utwórz akapit `p` z tekstem "Typ: " + typMebla + " | Wykończenie: " + materialMebla,
   - dołącz nagłówek `h4` oraz akapit `p` do utworzonego `div` za pomocą metody `appendChild()`,
   - dołącz cały skonfigurowany element `div` do kontenera `#zestawienie-mebli`.

## Przykład
Stan początkowy: w zestawieniu mebli brak nowych wpisów.
Akcja: użytkownik wybiera typ "Biurko regulowane", zaznacza radio "Dąb naturalny" i klika "Dodaj do zestawienia".
Efekt: w zestawieniu pojawia się nowa karta z nagłówkiem "Skonfigurowany element wyposażenia" i opisem "Typ: Biurko regulowane | Wykończenie: Dąb naturalny".
