# Zadanie: Dodanie powiadomienia magazynowego

## Cel
Napisz skrypt, który po kliknięciu przycisku utworzy nowy element komunikatu i dołączy go na koniec listy powiadomień magazynowych.
Umiejętność ta przydaje się przy dodawaniu powiadomień o nowych wiadomościach w poczcie, dopisywaniu statusów płatności w sklepie internetowym oraz rejestrowaniu zdarzeń w panelu administracyjnym serwera.

## Wskazówki aktywizujące
- Zajrzyj do pliku `teoria.md` do sekcji 2.1 (`document.createElement`) oraz 4.1 (`appendChild`).
- Zastanów się: dlaczego przed dołączeniem elementu do drzewa DOM musimy najpierw skonfigurować jego treść i klasy w pamięci?
- Sprawdź w konsoli przeglądarki (F12) wynik polecenia: `document.createElement('div')`.

## Treść do wpisania
Wpisz dokładnie następujące teksty: komunikat magazynowy "Przyjęto nową dostawę paletową na magazyn główny." oraz nagłówek "Panel Magazynowy Logistyki" i opis wpisu startowego "Dziennik zainicjalizowany pomyślnie.".

## Wymagania
1. Wyszukaj w dokumencie przycisk o identyfikatorze `#btn-dodaj` oraz kontener `#lista-powiadomien`.
2. Zarejestruj na przycisku zdarzenie kliknięcia `click` za pomocą metody `addEventListener`.
3. Wewnątrz funkcji obsługi zdarzenia:
   - utwórz nowy element `p` za pomocą `document.createElement('p')`,
   - nadaj mu klasę CSS `wpis-powiadomienia` za pomocą właściwości `classList.add()`,
   - przypisz do właściwości `textContent` dosłowny tekst: "Przyjęto nową dostawę paletową na magazyn główny.",
   - dołącz utworzony akapit do kontenera `#lista-powiadomien` metodą `appendChild()`.

## Przykład
Stan początkowy: w kontenerze powiadomień znajduje się jedno powiadomienie startowe.
Akcja: użytkownik klika przycisk "Dodaj powiadomienie".
Efekt: na dole listy pojawia się nowy ciemnoniebieski kafelek z napisem "Przyjęto nową dostawę paletową na magazyn główny.".
