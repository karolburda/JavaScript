## Cel
Opracuj moduł rejestru zleceń serwisowych dla warsztatu samochodowego, który umożliwia dodawanie nowych napraw do tablicy w pamięci, dynamiczne renderowanie ich w tabeli oraz pełne przywrócenie stanu bazowego (reset rejestru do stanu początkowego) za pomocą przycisku `#btn-usun`. Sukcesem jest poprawna aktualizacja widoku po dopisaniu zlecenia oraz czysty powrót do pierwotnych danych po kliknięciu resetu.

Mechanizm odwracalny i resetowanie stanu interfejsu to kluczowy wzorzec w systemach transakcyjnych, formularzach rezerwacyjnych z opcją anulowania zmian oraz w filtrach wyszukiwania z przyciskiem przywracania wartości domyślnych.

## Wskazówki aktywizujące
- Przeczytaj sekcję 3 i 7 w pliku `teoria.md` o czyszczeniu i renderowaniu danych tabelarycznych.
- W jaki sposób zachować stan początkowy danych? Utwórz niemutowalną kopię zapasową tablicy za pomocą operatora rest/spread: `[...danePoczatkowe]`.
- Sprawdź w konsoli DevTools liczbę wierszy tabeli: `document.querySelectorAll('#tabela-danych tbody tr').length`.

## Treść do wpisania
Wpisz dokładnie następujące teksty, zlecenia warsztatowe i etykiety: zlecenia bazowe "Wymiana klocków i tarcz hamulcowych" dla "Ford Focus MK3", "Serwis klimatyzacji i ozonowanie" dla "Toyota Yaris", "Wymiana rozrządu i pompy wody" dla "Volkswagen Passat B8", nowe zlecenie "Diagnostyka komputerowa i adaptacja" dla "Skoda Octavia", przyciski "Zarejestruj nową naprawę" oraz "Przywróć stan bazowy rejestru", komunikat "Zarejestrowane zlecenia w kolejce warsztatu: " oraz jednostkę " zł".

## Wymagania
1. Przygotuj tablicę obiektów ze stanem bazowym oraz bieżącą tablicę roboczą jako kopię tablicy początkowej.
2. Zdefiniuj funkcję `renderujTabele()`, która:
   - Czyści zawartość elementu `tbody` tabeli `#tabela-danych`.
   - Dla każdego obiektu w tablicy roboczej tworzy wiersz `tr` i komórki `td` z nazwą usługi, modelem pojazdu oraz kosztem (z dopiskiem " zł").
   - Dołącza komórki do wiersza i wiersz do tabeli.
   - Aktualizuje pole `#podsumowanie` tekstem: "Zarejestrowane zlecenia w kolejce warsztatu: X" (gdzie X to długość tablicy roboczej).
3. Do przycisku `#btn-dodaj` przypnij zdarzenie `click`, które:
   - Dodaje do tablicy roboczej nowy obiekt: `{ usluga: "Diagnostyka komputerowa i adaptacja", pojazd: "Skoda Octavia", koszt: 150 }`.
   - Wywołuje `renderujTabele()`.
4. Do przycisku `#btn-usun` przypnij zdarzenie `click`, które:
   - Resetuje tablicę roboczą do stanu początkowego (tworząc świeżą kopię tablicy bazowej).
   - Wywołuje `renderujTabele()`.
5. Wywołaj `renderujTabele()` przy załadowaniu strony.

## Przykład
Stan początkowy: Tabela zawiera 3 zlecenia bazowe, podsumowanie wskazuje 3.
Akcja 1: Użytkownik klika "Zarejestruj nową naprawę".
Efekt: W tabeli pojawia się 4. wiersz ("Diagnostyka komputerowa i adaptacja", "Skoda Octavia", 150 zł), podsumowanie wskazuje 4.
Akcja 2: Użytkownik klika "Przywróć stan bazowy rejestru".
Efekt: Czwarty wiersz znika, tabela ponownie zawiera dokładnie 3 zlecenia początkowe, a licznik powraca do 3.
