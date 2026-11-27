## Cel
Napisz skrypt, który po kliknięciu przycisku wygeneruje w elemencie `#lista-zamowien` listę punktowaną `<ul>` z nazwami działów magazynu komputerowego. Sukcesem jest pojawienie się w kontenerze dokładnie tylu elementów `<li>`, ile pozycji znajduje się w tablicy, bez powielania wpisów przy kolejnych kliknięciach.

Umiejętność dynamicznego generowania elementów z tablicy 1D przydaje się m.in. przy wyświetlaniu listy dostępnych biletów na seans, prezentacji kategorii produktów w menu bocznym sklepu internetowego oraz budowaniu list wyboru w kreatorach wniosków.

## Wskazówki aktywizujące
- Przeczytaj sekcję 2 w pliku `teoria.md` omawiającą czyszczenie kontenera oraz iterację za pomocą `forEach`.
- Jak zachowa się lista, jeśli pominiesz instrukcję `lista.innerHTML = ""` przed pętlą?
- Sprawdź w konsoli DevTools (F12) wynik polecenia: `document.querySelectorAll('#lista-zamowien li').length`.

## Treść do wpisania
W skrypcie wykorzystaj tablicę kategorii: `["Procesory i chłodzenie", "Płyty główne i pamięci RAM", "Karty graficzne", "Dyski SSD i zasilacze", "Obudowy i akcesoria"]`.
Na przycisku akcji widnieje etykieta: "Załaduj działy magazynu".
Komunikat o braku danych lub stanie początkowym: "Kliknij przycisk, aby wyświetlić działy magazynu".

## Wymagania
1. Pobierz przycisk `#btn-dodaj` oraz kontener `#lista-zamowien` za pomocą metody `document.querySelector`.
2. Do przycisku `#btn-dodaj` przypnij obsługę zdarzenia `click`.
3. W funkcji obsługi zdarzenia najpierw wyczyść dotychczasową treść kontenera `#lista-zamowien`.
4. Utwórz element `ul` za pomocą `document.createElement('ul')`.
5. Przeiteruj po tablicy kategorii metodą `forEach` i dla każdej pozycji utwórz element `li` z odpowiednim tekstem (`textContent`).
6. Dołącz każdy element `li` do utworzonej listy `ul`, a całą listę wstaw do `#lista-zamowien`.

## Przykład
Stan początkowy: W kontenerze `#lista-zamowien` widoczny jest tekst "Kliknij przycisk, aby wyświetlić działy magazynu".
Akcja: Użytkownik klika przycisk "Załaduj działy magazynu".
Efekt: Tekst informacyjny znika, a w kontenerze pojawia się lista 5 pozycji punktowanych: "Procesory i chłodzenie", "Płyty główne i pamięci RAM", "Karty graficzne", "Dyski SSD i zasilacze" oraz "Obudowy i akcesoria". Kolejne kliknięcia nie powielają listy.
