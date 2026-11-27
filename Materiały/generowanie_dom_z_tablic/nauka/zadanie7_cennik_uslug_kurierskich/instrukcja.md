## Cel
Zbuduj interaktywny cennik usług kurierskich i spedycyjnych w konwencji egzaminacyjnej INF.03, który generuje karty gabarytów przesyłek ze zdjęciami oraz przyciskami wyboru, a po kliknięciu przelicza koszt wysyłki z uwzględnieniem opcji ekspresowej (`#regulamin`) w bloku `#podsumowanie`. Sukcesem jest pełna integracja szablonu kart produktowych z logiką kalkulacyjną zamówienia.

Komponenty kalkulacyjne tego typu są standardowym elementem egzaminów praktycznych INF.03 oraz rzeczywistych serwisów nadawania paczek, kalkulatorów przeprowadzek i rezerwacji usług transportowych.

## Wskazówki aktywizujące
- Przeczytaj sekcję 5 i 6 w pliku `teoria.md` dotyczące generowania kart z grafikami `picsum.photos` oraz obsługi zdarzeń.
- Pamiętaj, że adresy grafik muszą mieć postać: `https://picsum.photos/id/{id}/300/200`.
- Wpisz w konsoli DevTools: `document.querySelectorAll('.karta-gabarytu').length`.

## Treść do wpisania
Wpisz dokładnie następujące teksty, dane gabarytów i komunikaty: identyfikatory "gabaryt-a", "gabaryt-b", "gabaryt-c", nazwy przesyłek "Gabaryt A - Mała paczka", "Gabaryt B - Średnia paczka", "Gabaryt C - Duża paczka", wymiary "8 x 38 x 64 cm do 5 kg", "19 x 38 x 64 cm do 15 kg", "41 x 38 x 64 cm do 25 kg", etykietę "Wybierz ten gabaryt", opcję "Dostawa ekspresowa gwarantowana (+15 zł)", komunikat "Wybierz gabaryt przesyłki, aby przeliczyć koszt nadania", szablony "Cena bazowa: ", "Wybrano: " oraz " | Koszt wysyłki: ".

## Wymagania
1. Przygotuj tablicę obiektów z 3 wariantami gabarytów.
2. Zdefiniuj funkcję renderującą karty w kontenerze `#lista-zamowien`:
   - Opróżnij `#lista-zamowien`.
   - Zastosuj metodę `map()` i literał szablonowy z `.join('')`.
   - Każda karta musi zawierać znacznik `article` z klasą `karta-gabarytu`, grafikę `<img src="https://picsum.photos/id/{imgId}/300/200" alt="{nazwa}" width="300" height="200">`, nagłówek `<h3>`, akapit z wymiarami, akapit z ceną oraz przycisk `<button class="btn-wybierz" data-id="{id}">Wybierz ten gabaryt</button>`.
3. Zarejestruj zmienną przechowującą aktualnie wybrany gabaryt (początkowo `null`).
4. Dodaj obsługę kliknięcia w `#lista-zamowien` (delegowanie zdarzeń):
   - Po kliknięciu `.btn-wybierz` znajdź odpowiadający gabaryt w tablicy.
   - Zapisz go jako aktywny i wywołaj funkcję aktualizującą `#podsumowanie`.
   - Wyróżnij wybraną kartę klasą `.aktywny`, usuwając ją z pozostałych.
5. Dodaj obsługę zdarzenia `change` na polu `#regulamin` (opcja ekspresowa):
   - Jeśli wybrano gabaryt, przelicz łączną cenę (cena bazowa + 15 zł, gdy checkbox zaznaczony).
   - Wypisz w `#podsumowanie`: "Wybrano: [Nazwa] | Koszt wysyłki: [Cena] zł".

## Przykład
Stan początkowy: Wyrenderowane 3 kafelki paczek ze zdjęciami. W podsumowaniu: "Wybierz gabaryt przesyłki, aby przeliczyć koszt nadania". Checkbox ekspresu odznaczony.
Akcja 1: Użytkownik klika "Wybierz ten gabaryt" na karcie "Gabaryt B - Średnia paczka".
Efekt: Karta otrzymuje niebieską ramkę `.aktywny`, a w podsumowaniu pojawia się: "Wybrano: Gabaryt B - Średnia paczka | Koszt wysyłki: 18.50 zł".
Akcja 2: Użytkownik zaznacza opcję "Dostawa ekspresowa gwarantowana (+15 zł)".
Efekt: Tekst natychmiast aktualizuje się do: "Wybrano: Gabaryt B - Średnia paczka | Koszt wysyłki: 33.50 zł".
