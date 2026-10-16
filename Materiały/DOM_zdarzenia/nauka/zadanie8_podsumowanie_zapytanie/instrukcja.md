# Zadanie 8: Podsumowanie — zapytanie o produkt

## Cel

Łączysz `input`, `click` i `submit`. Pole `#produkt` na żywo kopiuje się do `#podglad`. Przycisk `#wyczysc` czyści pole i podgląd. Wysłanie `#formularz` **nie** odświeża strony: puste pole pokazuje błąd w `#status`, wpisana nazwa — potwierdzenie.

## Przydatne

- `"input"` ląduje na polu, `"click"` na `#wyczysc`, `"submit"` na formularzu.
- Przy wysyłce `e.preventDefault()` zatrzymuje przeładowanie. Bez tego komunikat w `#status` zniknie.
- Treść pola to `.value`. Podgląd i status wypisujesz przez `textContent`.

## Wymagania

1. Podgląd aktualizuje się w trakcie pisania.
2. „Wyczyść” zeruje pole i `#podglad`.
3. Submit nie przeładowuje strony. W `#status` widać dwa różne komunikaty: błąd i potwierdzenie.
4. W stopce zostawiasz „Imię Nazwisko klasa”.

## Przykład

Wpisz `zeszyt`. W podglądzie od razu widać „zeszyt”. Kliknij „Wyczyść”. Pole i podgląd są puste. Wpisz `zeszyt` ponownie i wyślij formularz. W `#status` pojawia się „Wysłano zapytanie o: zeszyt”. Wyślij puste pole. Tekst zmienia się na „Wpisz nazwę produktu.”.
